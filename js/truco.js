//  Juego de Truco 

// Baraja Española de 40 cartas (sin 8 y 9)
let baraja = [
    { nombre: "1basto", valor: 1}, { nombre: "1copa", valor: 1}, { nombre: "1espada", valor: 1}, { nombre: "1oro", valor: 1},
    { nombre: "2basto", valor: 2}, { nombre: "2copa", valor: 2}, { nombre: "2espada", valor: 2}, { nombre: "2oro", valor: 2}, 
    { nombre: "3basto", valor: 3}, { nombre: "3copa", valor: 3}, { nombre: "3espada", valor: 3}, { nombre: "3oro", valor: 3},
    { nombre: "4basto", valor: 4}, { nombre: "4copa", valor: 4}, { nombre: "4espada", valor: 4}, { nombre: "4oro", valor: 4},
    { nombre: "5basto", valor: 5}, { nombre: "5copa", valor: 5}, { nombre: "5espada", valor: 5}, { nombre: "5oro", valor: 5}, 
    { nombre: "6basto", valor: 6}, { nombre: "6copa", valor: 6}, { nombre: "6espada", valor: 6}, { nombre: "6oro", valor: 6}, 
    { nombre: "7basto", valor: 7}, { nombre: "7copa", valor: 7}, { nombre: "7espada", valor: 7}, { nombre: "7oro", valor: 7}, 
    { nombre: "10basto", valor: 10}, { nombre: "10copas", valor: 10}, { nombre: "10espada", valor: 10}, { nombre: "10oro", valor: 10}, 
    { nombre: "11basto", valor: 10}, { nombre: "11copa", valor: 10}, { nombre: "11espada", valor: 10}, { nombre: "11oro", valor: 10}, 
    { nombre: "12basto", valor: 10}, { nombre: "12copa", valor: 10}, { nombre: "12espada", valor: 10}, { nombre: "12oro", valor: 10},
];

// Resto de la baraja
var palos = ['Espadas', 'Bastos', 'Oros', 'Copas'];
var valores = [2, 3, 4, 5, 6, 10, 11, 12];

for (var i = 0; i < palos.length; i++) {
    for (var j = 0; j < valores.length; j++) {
        baraja.push({ palo: palos[i], valor: valores[j], nombre: valores[j] + ' de ' + palos[i] });
    }
}

// Mezclar la baraja
function mezclarBaraja() {
    for (var i = baraja.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = baraja[i];
        baraja[i] = baraja[j];
        baraja[j] = temp;
    }
}

// Repartir cartas a cada jugador (3 cartas cada uno)
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

// Mostrar las manos repartidas
var manos = repartirCartas();
console.log('Mano del Usuario:', manos.manoUsuario);
console.log('Mano del Bot:', manos.manoBot);
