let turnoJugador = true; // El jugador empieza siempre en la primera ronda
let cartasJugador = [];
let cartasBot = [];
let ganoJ1 = 0;
let ganoJ2 = 0;
let rondasJugadas = 0;

// Repartir cartas al jugador y al bot
function repartirCartas(baraja) {
    baraja = baraja.sort(() => Math.random() - 0.5); // Mezclar baraja

    cartasJugador = baraja.slice(0, 3); // 3 cartas para el jugador
    cartasBot = baraja.slice(3, 6);     // 3 cartas para el bot
    mostrarCartas(cartasJugador);       // Mostrar las cartas del jugador

    // Limpiar el área de cartas del bot
    let contenedorCartas2 = document.querySelector('.cartasJ2');
    contenedorCartas2.innerHTML = `
        <div class="carta m-3"><img src="img/reverso-carta.png" alt="Carta del oponente"></div>
        <div class="carta m-3"><img src="img/reverso-carta.png" alt="Carta del oponente"></div>
        <div class="carta m-3"><img src="img/reverso-carta.png" alt="Carta del oponente"></div>
    `;

    rondasJugadas = 0;
    turnoJugador = true; // Reiniciar para que siempre empiece el jugador en cada nueva partida
}

// Mostrar cartas del jugador en el DOM
function mostrarCartas(cartasJ1) {
    let contenedorCartas = document.querySelector('.cartasJ1');
    contenedorCartas.innerHTML = ''; // Limpiar cartas anteriores

    cartasJ1.forEach(function(carta, index) {       
        let imagenCarta = `<img src="../truco/img/${carta.nombre}.png" alt="${carta.nombre}" title="Tirar carta" data-index="${index}"> `;
        contenedorCartas.innerHTML += imagenCarta;  
    });

    let cartasDom = document.querySelectorAll('.cartasJ1 img');
    cartasDom.forEach(function(cartaDom) {  
        cartaDom.addEventListener('click', function() {  
            if (turnoJugador) { // Si es el turno del jugador, puede tirar la carta
                let indexCarta = cartaDom.getAttribute('data-index');
                tirarCartaJugador(cartasJugador[indexCarta], cartaDom, indexCarta);
            }
        });                                                         
    });
}

// Jugada del usuario
function tirarCartaJugador(cartaUser, cartaDom, indexCarta) {
    // Deshabilitar la carta que se jugó
    cartaDom.classList.add('disabled');
    cartaDom.style.opacity = '60%';
    cartaDom.style.pointerEvents = 'none';

    // Juega el bot después
    tirarCartaBot(cartaUser, indexCarta);
}

// Jugada del bot
function tirarCartaBot(cartaUser, indexCarta) {
    let cartaBot = cartasBot[indexCarta]; // El bot juega la carta correspondiente al índice
    let contenedorCartas2 = document.querySelector('.cartasJ2');

    contenedorCartas2.innerHTML = `
        <img src="../truco/img/${cartaBot.nombre}.png" alt="${cartaBot.nombre}">
    `;

    // Comparar valores de las cartas
    if (cartaUser.valor > cartaBot.valor) {
        ganoJ1++;
        turnoJugador = true;  // Si el jugador ganó, sigue jugando él en la próxima carta
    } else if (cartaBot.valor > cartaUser.valor) {
        ganoJ2++;
        turnoJugador = false; // Si el bot ganó, ahora él juega primero en la próxima carta
    } 

    rondasJugadas++;

    if (rondasJugadas === 3) {  
        determinarGanador();
    }
}

// Determina quién ganó la ronda actual
function determinarGanador() {
    if (ganoJ1 > ganoJ2) {
        alert("Ganaste la ronda!");
    } else {
        alert("Perdiste la ronda!");
    }

    // Reiniciar contadores
    ganoJ1 = 0;
    ganoJ2 = 0;

    // Cambiar quien empieza la próxima ronda
    turnoJugador = false; // Ahora empieza el bot en la próxima ronda
    repartirCartas(baraja); // Repartir nuevas cartas para la siguiente ronda
}

let btnJugar = document.querySelector('#btnJugar') 
btnJugar.addEventListener('click', function() {
    repartirCartas(baraja); 
});
