// === Juego de Truco (Versión Mejorada) ===

// Baraja Española de 40 cartas (sin 8 y 9)
var baraja = [
    { palo: 'Espadas', valor: 1, fuerza: 14, nombre: '1 de Espadas' },
    { palo: 'Bastos', valor: 1, fuerza: 13, nombre: '1 de Bastos' },
    { palo: 'Espadas', valor: 7, fuerza: 12, nombre: '7 de Espadas' },
    { palo: 'Oros', valor: 7, fuerza: 11, nombre: '7 de Oros' },
];

// Resto de la baraja
var palos = ['Espadas', 'Bastos', 'Oros', 'Copas'];
var valores = [2, 3, 4, 5, 6, 10, 11, 12];

for (var i = 0; i < palos.length; i++) {
    for (var j = 0; j < valores.length; j++) {
        baraja.push({ 
            palo: palos[i], 
            valor: valores[j], 
            fuerza: valores[j] <= 7 ? valores[j] : valores[j] - 3, 
            nombre: valores[j] + ' de ' + palos[i] 
        });
    }
}

var puntosUser = 0;
var puntosBot = 0;
var turno = 0; // Indica si es el turno del usuario o del bot
var manosGanadasUser = 0;
var manosGanadasBot = 0;

// Mezclar la baraja
function mezclarBaraja() {
    for (var i = baraja.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = baraja[i];
        baraja[i] = baraja[j];
        baraja[j] = temp;
    }
}

// Repartir cartas
function repartirCartas() {
    var manoUsuario = [];
    var manoBot = [];

    mezclarBaraja();

    for (var i = 0; i < 3; i++) {
        manoUsuario.push(baraja.pop());
        manoBot.push(baraja.pop());
    }

    return { manoUsuario: manoUsuario, manoBot: manoBot };
}

// Mostrar cartas en la interfaz
function mostrarCartas(manos) {
    for (var i = 0; i < 3; i++) {
        document.getElementById('userCarta' + (i + 1)).src = 'img/' + manos.manoUsuario[i].nombre + '.png';
        document.getElementById('botCarta' + (i + 1)).src = 'img/reverso-carta.png';
    }
}

// Iniciar juego
var manos = repartirCartas();
mostrarCartas(manos);

// Función para manejar el clic en las cartas del usuario
function jugarCarta(indice) {
    if (turno !== 0) return;

    var cartaUser = manos.manoUsuario[indice];
    var cartaBot = manos.manoBot[indice];

    // Mostrar carta del bot
    document.getElementById('botCarta' + (indice + 1)).src = 'img/' + cartaBot.nombre + '.png';

    // Determinar el ganador de la mano
    if (cartaUser.fuerza > cartaBot.fuerza) {
        manosGanadasUser++;
    } else if (cartaBot.fuerza > cartaUser.fuerza) {
        manosGanadasBot++;
    }

    // Actualizar turno
    turno = 1;

    // Si se jugaron las 3 manos, determinar el ganador del Truco
    if (manosGanadasUser + manosGanadasBot === 3) {
        determinarGanadorTruco();
    }
}

// Determinar el ganador del Truco
function determinarGanadorTruco() {
    if (manosGanadasUser > manosGanadasBot) {
        puntosUser += 1;
        alert('¡Ganaste el Truco!');
    } else if (manosGanadasBot > manosGanadasUser) {
        puntosBot += 1;
        alert('Perdiste el Truco.');
    } else {
        alert('Empate en el Truco.');
    }

    // Actualizar puntos en pantalla
    document.getElementById('puntosUser').textContent = puntosUser;
    document.getElementById('puntosBot').textContent = puntosBot;

    // Reiniciar juego
    reiniciarJuego();
}

// Reiniciar el juego
function reiniciarJuego() {
    manosGanadasUser = 0;
    manosGanadasBot = 0;
    turno = 0;
    baraja = baraja.concat(manos.manoUsuario, manos.manoBot); // Devolver cartas a la baraja
    manos = repartirCartas();
    mostrarCartas(manos);
}

// Asociar eventos a las cartas del usuario
for (var i = 0; i < 3; i++) {
    (function(index) {
        document.getElementById('userCarta' + (index + 1)).onclick = function() {
            jugarCarta(index);
        }
    })(i);
}


// por cada turno son 3 rondas
// en cada ronda gana la carta de mayor valor (no valor numerico sino segun las reglas del juego)
// quien tire la carta de mayor valor en la segunda ronda será quien tire primero en la tercer ronda
// al finalizar cada turno se suman los puntos que ganó cada uno.
// se deben tener en cuentas los puntos apostados si se canta envido, truco o sus derivados
// gana quien llegue a 30 puntos. 


/* 
- tienen que figurar todos los botones de jugadas siempre, pero deshabilitados,
    se habilitan cuando corresponda.

- juegaUser / juegaBot 


*/