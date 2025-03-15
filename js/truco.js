let baraja = [
    { nombre: "1basto", valor: 19}, { nombre: "1copa", valor: 14}, { nombre: "1espada", valor: 20}, { nombre: "1oro", valor: 14},
    { nombre: "2basto", valor: 15}, { nombre: "2copa", valor: 15}, { nombre: "2espada", valor: 15}, { nombre: "2oro", valor: 15}, 
    { nombre: "3basto", valor: 16}, { nombre: "3copa", valor: 16}, { nombre: "3espada", valor: 16}, { nombre: "3oro", valor: 16},
    { nombre: "4basto", valor: 4}, { nombre: "4copa", valor: 4}, { nombre: "4espada", valor: 4}, { nombre: "4oro", valor: 4},
    { nombre: "5basto", valor: 5}, { nombre: "5copa", valor: 5}, { nombre: "5espada", valor: 5}, { nombre: "5oro", valor: 5}, 
    { nombre: "6basto", valor: 6}, { nombre: "6copa", valor: 6}, { nombre: "6espada", valor: 6}, { nombre: "6oro", valor: 6}, 
    { nombre: "7basto", valor: 7}, { nombre: "7copa", valor: 7}, { nombre: "7espada", valor: 18}, { nombre: "7oro", valor: 17}, 
    { nombre: "10basto", valor: 10}, { nombre: "10copas", valor: 10}, { nombre: "10espada", valor: 10}, { nombre: "10oro", valor: 10}, 
    { nombre: "11basto", valor: 11}, { nombre: "11copa", valor: 11}, { nombre: "11espada", valor: 11}, { nombre: "11oro", valor: 11}, 
    { nombre: "12basto", valor: 12}, { nombre: "12copa", valor: 12}, { nombre: "12espada", valor: 12}, { nombre: "12oro", valor: 12},
];

let rondasJugadas = 0;  // son 3 rondas por turno
let puntosJ1 = 0;  // usuario
let puntosJ2 = 0;  // bot
let ganoJ1 = 0;
let ganoJ2 = 0;
let cartasJ1 = [];


// repartir cartas
function repartirCartas(baraja) {
    cartasJ1 = []; 

    function obtenerCartaRandom() {            
        return baraja[Math.floor(Math.random() * baraja.length)];
    }

    for (let i = 0; i < 3; i++) {
        cartasJ1.push(obtenerCartaRandom());
    }

    mostrarCartas(cartasJ1);
}      

// mostrar las cartas del jugador en el DOM y agregar eventos de click
function mostrarCartas(cartasJ1) {
    let contenedorCartas = document.querySelector('.cartasJ1');
    contenedorCartas.innerHTML = ''; // limpiar las cartas anteriores

    cartasJ1.forEach(function(carta, index) {       // *con el metodo forEach se le aplica una función a cada elemento del array (en este caso a cada carta del array baraja)*
        let imagenCarta = `<img src="../truco/img/${carta.nombre}.png" alt="${carta.nombre}" title="Tirar carta" data-index="${index}"> `;
        contenedorCartas.innerHTML += imagenCarta;  
    });

    // agregar listeneres a las cartas generadas para el usuario (sino no toma el click del usuario para tirar la carta, porque no es la 'original' sino la generada en dom)
    let cartasDom = document.querySelectorAll('.cartasJ1 img');
    cartasDom.forEach(function(cartaDom) {  
    cartaDom.addEventListener('click', function() {  
            let indexCarta = cartaDom.getAttribute('data-index');   // *obtener el indice de la carta (posicion dentro del array cartasJ1)*
            tirarCartaJugador(cartasJ1[indexCarta], cartaDom);      // se accede a la carta específica en la posición del array cartasJ1 que se seleccionó. se muestra en la interfaz con cartaDom
        });                                                         
    });
}


// ahora el usuario puede ver sus cartas, debe clickear alguna para tirarla y comenzar la ronda
function tirarCartaJugador(cartaUser, cartaDom) {

    // se deshabilitan las cartas clickeadas por el usuario
    cartaDom.classList.add('disabled');
    cartaDom.style.opacity = '60%';
    cartaDom.style.pointerEvents = 'none'; 


    // el bot responde con carta al azar, se muestra en el dom
    let cartaBot = baraja[Math.floor(Math.random() * baraja.length)];
    let contenedorCartas2 = document.querySelector('.cartasJ2');
    contenedorCartas2.innerHTML = `<img src="../truco/img/${cartaBot.nombre}.png" alt="${cartaBot.nombre}">`;


    // comparar los valores de las cartas 
        if (cartaUser.valor > cartaBot.valor) {
            ganoJ1++;  
        } else if (cartaBot.valor > cartaUser.valor) {
            ganoJ2++;
        }  

        rondasJugadas++; 
        if (rondasJugadas === 3) {  
            determinarGanador();   // se verifica el ganador del turno al llegar a las 3 rondas
        }
  
}

function determinarGanador() {
    let totalPuntos = 0;

    /* sumar los puntos apostados ACA SE TIENE QUE TENER EN CUENTA LAS JUGADAS (truco, envido, etc) */

    if (ganoJ1 > ganoJ2) {  
        puntosJ1 += totalPuntos;
        let puntosUser = document.querySelector('#puntosUser');
        puntosUser.innerText = puntosJ1; //  mostrar los puntos del jugador en el contador
    } 
    else if (ganoJ2 > ganoJ1) {
        puntosJ2 += totalPuntos;  
        let puntosBot = document.querySelector('#puntosBot');
        puntosBot.innerText = puntosJ2;  // mostrar los puntos del bot
    } 
   
     // verificar si alguien alcanzó 30 puntos
     if (puntosJ1 >= 30 || puntosJ2 >= 30) {
        finalizarJuego();
    } else {
        iniciarNuevoTurno();
    }
}

function finalizarJuego() {
    if(puntosJ1 >= 30) {
        document.querySelector('#ganarCartas').style.display = 'block'
    } else {
        document.querySelector('#perderCartas').style.display = 'block'
    }
}

function iniciarNuevoTurno() {
    rondasJugadas = 0;
    ganoJ1 = 0;
    ganoJ2 = 0;
    repartirCartas(baraja);
}


let btnJugar = document.querySelector('#btnJugar') 
btnJugar.addEventListener('click', function() {
    repartirCartas(baraja); 
});





// por cada turno son 3 rondas
// en cada ronda gana la carta de mayor valor (no valor numerico sino segun las reglas del juego)
// quien tire la carta de mayor valor en la segunda ronda será quien tire primero en la tercer ronda
// al finalizar cada turno se suman los puntos que ganó cada uno.
// se deben tener en cuentas los puntos apostados si se canta envido, truco o sus derivados
// gana quien llegue a 30 puntos. 


/* 
- tienen que figurar todos los botones de jugadas siempre, pero deshabilitados,
    se habilitan cuando corresponda.
- juegaUser / juegaBot según corresponda (agregar esta lógica)


*/