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

// Variables principales
var cartasJugador = [];
var cartasBot = [];
var rondasGanadasJugador = 0;
var rondasGanadasBot = 0;
var puntosJugador = 0;
var puntosBot = 0;
var puntosApostados = 0;
var turnoActual = 'jugador';
var inicioMano = 'jugador'; // Alterna después de cada mano completa
var rondaActual = 1;

// Función para barajar y repartir cartas
function barajarCartas() {
    repartirCartas(baraja)
}

function repartirCartas(baraja) {
    cartasJ1 = []; 

    function obtenerCartaRandom() {            
        return baraja[Math.floor(Math.random() * baraja.length)];
    }

    for (let i = 0; i < 3; i++) {
        cartasJ1.push(obtenerCartaRandom());
        cartasJ2.push(obtenerCartaRandom());
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
            if (turnoJugador) { // puede tirar si es su turno
                let indexCarta = cartaDom.getAttribute('data-index');   // *obtener el indice de la carta (posicion dentro del array cartasJ1)*
                tirarCartaJugador(cartasJ1[indexCarta], cartaDom);      // se accede a la carta específica en la posición del array cartasJ1 que se seleccionó. se muestra en la interfaz con cartaDom
            } 
        });                                                          
    });
}

// Función para iniciar una nueva mano (3 rondas)
function iniciarMano() {
    cartasJugador = barajarCartas();
    cartasBot = barajarCartas();
    rondasGanadasJugador = 0;
    rondasGanadasBot = 0;
    rondaActual = 1;
    turnoActual = inicioMano;
}

// Función para manejar el turno del jugador
function tirarCartaJugador(carta) {
    if (turnoActual !== 'jugador') return;

    var cartaJugador = carta;
    var cartaBot = cartasBot.pop();

    compararCartas(cartaJugador, cartaBot);

    if (rondaActual > 3) {
        determinarGanador();
    } else {
        turnoActual = 'bot';
        if (turnoActual === 'bot') {
            setTimeout(tirarCartaBot, 1000);
        }
    }
}

// Función para el turno del bot
function tirarCartaBot() {
    if (turnoActual !== 'bot') return;

    var cartaJugador = cartasJugador.pop();
    var cartaBot = cartasBot.pop();

    compararCartas(cartaJugador, cartaBot);

    if (rondaActual > 3) {
        determinarGanador();
    } else {
        turnoActual = 'jugador';
    }
}

// Función para comparar cartas
function compararCartas(cartaJugador, cartaBot) {
    if (cartaJugador > cartaBot) {
        rondasGanadasJugador++;
        turnoActual = 'jugador';
    } else if (cartaBot > cartaJugador) {
        rondasGanadasBot++;
        turnoActual = 'bot';
    }
    rondaActual++;
}

// Función para determinar el ganador de la mano
function determinarGanador() {
    if (rondasGanadasJugador > rondasGanadasBot) {
        puntosJugador += puntosApostados;
        inicioMano = 'jugador'; // El jugador inicia la próxima mano
    } else if (rondasGanadasBot > rondasGanadasJugador) {
        puntosBot += puntosApostados;
        inicioMano = 'bot'; // El bot inicia la próxima mano
    }
    // Aquí actualizarías el DOM con los puntos obtenidos
}

// Iniciar el juego por primera vez



let btnJugar = document.querySelector('#btnJugar') 
btnJugar.addEventListener('click', function() {
  iniciarMano();
});