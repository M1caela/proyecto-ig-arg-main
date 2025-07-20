

document.querySelector('#btnDados').onclick = iniciarJuegoDados;
function iniciarJuegoDados() {
    document.querySelector('.previa-dados').style.display = 'none';
    document.querySelector('.juego-dados').style.display = 'block';
    mostrarJuyegoDados();
}


let nombreUser = prompt('Escribe tu nombre', '');
while (nombreUser === '' || nombreUser === ' ') {
    nombreUser = prompt('Escribe tu nombre', '');
}

// se modifica nombre en el tablero del juego 
let nombreUserDOM = document.querySelector('#nombreUser'); 
nombreUserDOM.innerText = nombreUser

let jugador1 = {
    nombre: nombreUser,
    tiradas: []
};

let jugador2 = {
    nombre: 'Oponente',
    tiradas: []
};

let J1puntos;
let J2puntos;

// contadores para funcionamiento interno y msotrar msj segun quien gana
let puntosUser = 0;
let puntosBot = 0; 

let btnTirarDado = document.querySelector('#btnTirarDado');
let imagenesDados = document.querySelectorAll('.seccionDados img');


function tirarDados() {
    let tirada = [];
    for (let i = 0; i < 5; i++) { // se obtienen 5 números random y se agregan al array [tirada] para poder mostrarlos en la siguiente función
        tirada.push(Math.floor(Math.random() * 5) + 1);
    }
    return tirada;
}


// mostrar en pantalla los dados sorteados
function mostrarDados (tirada) {
    for (let i = 0; i < tirada.length; i++) {
        imagenesDados[i].src = `img/juego-dado/0${tirada[i]}.png`; // usando un template string para el indice de la img, logro que coincida con el nombre de la foto y se muestre el dado segun el nro sorteado
    } 
}


// verificar jugadas obtenidas, para ver si alguno consiguio escalera o dados iguales
function verificarEscalera(tirada) {
    let escalera = [1, 2, 3, 4, 5]; 
    let cuenta = 0;  // contador para saber cuantos nros de la escalera estan la tirada

    for (let i = 0; i < escalera.length; i++) {
        if (tirada.includes(escalera[i])) {  // si la tirada incluye el num actual de la escalera, se incrementa el contador
            cuenta++;  
        }
    }
    return cuenta === 5;  // devuelve true si estan los 6 num de la escalera
}

function verificarFull(tirada) {
    let contador = {};  // obj para contar las apariciones de cada nro
    
    for (let i = 0; i < tirada.length; i++) {  // cuenta cuantas veces aparece cada nro en la tirada
        let num = tirada[i]; 
        if (contador[num]) { // si el número ya esta en el contador, se incrementa
            contador[num]++;
        } else { // sino, se inicializa en 1
            contador[num] = 1;
        }
    }

    // obtiene los valores de las repeticiones de los números
    let valores = Object.values(contador); // devuelve un array con cuántas veces aparecio cada num
    
    // verifica si hay un grupo 2 y 3 num iguales 
    return valores.includes(2) && valores.includes(3);
}


/* (Anterior - iguales)
    function verificarIguales(tirada) {
        for (let i = 1; i <= 6; i++) { 
            let cuenta = 0;  // contador para saber cuantas veces aparece el nro en la tirada

            for (let j = 0; j < tirada.length; j++) {
                if (tirada[j] === i) {  // si el nnmero i esta en la tirada, se aumentam el contador
                    cuenta++; 
                }
            }
            if (cuenta === 6) { 
                return true; // si un num aparece 6 veces, devuelve true
            }
        }
        return false;  // sino, devuelve false
    }
*/


// en caso de que todos los nros sean 6
function verificarSeis(tirada) {
    for (let i = 0; i < tirada.length; i++) { // recorre cada numero de la tirada
        if (tirada[i] !== 6) {  // si alguno no es 6, devuelve false
            return false;
        }
    }
    return true;   // si todos son 6, retorna true
}


// verificar quien ganó alguna de las condiciones y tachar en la tabla
function verificarGanador(tirada, esJugador) {
    let tieneFull = verificarFull(tirada);
    let tieneEscalera = verificarEscalera(tirada);

    // Si la tirada es del jugador
    if (esJugador) {
        let fullJugador1DOM = document.querySelectorAll('.jugadores td')[2]; // celda de columna "full" del user
        let escaleraJugador1DOM = document.querySelectorAll('.jugadores td')[1]; // celda de columna "escalera" del user

        if (tieneFull) {
            fullJugador1DOM.textContent = '✔';
            puntosUser++;
        }
        if (tieneEscalera) {
            escaleraJugador1DOM.textContent = '✔';
            puntosUser++;
        }
    } else {
        // Si la tirada es del bot
        let fullJugador2DOM = document.querySelectorAll('.jugadores td')[5]; // celda de columna "full" del bot
        let escaleraJugador2DOM = document.querySelectorAll('.jugadores td')[4]; // celda de columna "escalera" del bot

        if (tieneFull) {
            fullJugador2DOM.textContent = '✔';
            puntosBot++;
        }
        if (tieneEscalera) {
            escaleraJugador2DOM.textContent = '✔';
            puntosBot++;
        }
    }

    // gana quien cumple ambas condiciones 
    return tieneFull && tieneEscalera;
}

// función para hacer visible el mensajes de ganar o perder según corresponda
function mostrarMensajeGanar() {
    let ganarDados = document.querySelector('#ganarDados');
    ganarDados.style.display = 'block';
    document.querySelector('.tableroDados').style.display = 'none';
}

function mostrarMensajePerder() {
    let perderDados = document.querySelector('#perderDados');
    perderDados.style.display = 'block';
    document.querySelector('.tableroDados').style.display = 'none';
}

// verificar si alguno cumple las dos condiciones para ganar y mostrar msj según corresponda
function verificarPuntos() {
    if (puntosUser >= 2) {
        J1puntos = 50
        localStorage.setItem('puntosUserDados', J1puntos);   // local storage
        mostrarMensajeGanar();
    } else if (puntosBot >= 2) {
        J2puntos = 50
        localStorage.setItem('puntosBotDados', J2puntos);   // local storage
        mostrarMensajePerder();
    }
}

// turno del usuario
function turnoUser() {
    jugador1.tiradas = tirarDados();
    mostrarDados(jugador1.tiradas);

    verificarGanador(jugador1.tiradas, true);

    // verificar si alguien llego a los 2 puntos
    verificarPuntos();

    if (!verificarSeis(jugador1.tiradas)) {
        setTimeout(turnoBot, 4000);
    } else {
        setTimeout(mostrarMensajePerder, 1000);
    }
}

// turno del bot
function turnoBot() {
    jugador2.tiradas = tirarDados();
    mostrarDados(jugador2.tiradas);

    verificarGanador(jugador2.tiradas, false);

    // verificar si alguien llegó a los 2 puntos
    verificarPuntos();

    if (!verificarSeis(jugador2.tiradas)) {
        // no hay acción adicional si no todos son 6
    } else {
        setTimeout(mostrarMensajeGanar, 1000);
    }
}

// función para tirar dados cuando se hace click en el botón (3 segs despues se ven los dados del bot)
btnTirarDado.addEventListener('click', function(){ 
    turnoUser();
});







 