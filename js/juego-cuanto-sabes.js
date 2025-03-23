//     QUIZ 2 - ¿Cuánto sabés sobre Argentina?   //

let preguntasConocimientos = [
    {
        pregunta: '¿Cuál es la capital de Argentina?',
        respuestas: [
            { texto: 'Córdoba', correcta: false },
            { texto: 'Rosario', correcta: false },
            { texto: 'Buenos Aires', correcta: true },
            { texto: 'Mendoza', correcta: false },
        ]
    },
    {
        pregunta: '¿Cuál es el río más largo de Argentina?',
        respuestas: [
            { texto: 'Río de la Plata', correcta: false },
            { texto: 'Río Salado', correcta: false },
            { texto: 'Río Uruguay', correcta: false },
            { texto: 'Río Paraná', correcta: true },
        ]
    },
    {
        pregunta: '¿En qué año se declaró la independencia de Argentina?',
        respuestas: [
            { texto: '1816', correcta: true },
            { texto: '1806', correcta: false },
            { texto: '1776', correcta: false },
            { texto: '1820', correcta: false },
        ]
    },
    {
        pregunta: '¿Qué provincia argentina es conocida por su producción de vino?',
        respuestas: [
            { texto: 'Tucumán', correcta: false },
            { texto: 'Mendoza ', correcta: true },
            { texto: 'Corrientes', correcta: false },
            { texto: 'Jujuy', correcta: false },
        ]
    },
    {
        pregunta: '¿Quién fue el primer presidente del país?',
        respuestas: [
            { texto: 'Manuel Belgrano', correcta: false },
            { texto: 'Bernardino Rivadavia', correcta: true },
            { texto: 'Juan Manuel de Rosas', correcta: false },
            { texto: 'Hipólito Yrigoyen', correcta: false },
        ]
    },
    {
        pregunta: '¿Cuál es el deporte nacional de Argentina?',
        respuestas: [
            { texto: 'Golf', correcta: false },
            { texto: 'Tenis', correcta: false },
            { texto: 'Pato ', correcta: true },
            { texto: 'Fútbol', correcta: false },
        ]
    },
    {
        pregunta: '¿Cómo se llama el pico más alto de América, ubicado en Argentina?',
        respuestas: [
            { texto: 'Fitz Roy', correcta: false },
            { texto: 'Aconcagua ', correcta: true },
            { texto: 'Cerro Torre', correcta: false },
            { texto: 'Nevado de Cachi', correcta: false },
        ]
    },
    {
        pregunta: '¿Qué animal forma parte del escudo nacional?',
        respuestas: [
            { texto: 'Cóndor', correcta: false },
            { texto: 'No hay animales', correcta: true },
            { texto: 'Jaguar', correcta: false },
            { texto: 'Caballo', correcta: false },
        ]
    },
    {
        pregunta: '¿Cuál de estas comidas es tradicional en el país?',
        respuestas: [
            { texto: 'Paella', correcta: false },
            { texto: 'Sushi', correcta: false },
            { texto: 'Asado ', correcta: true },
            { texto: 'Chumbeque', correcta: false },
        ]
    },
    {
        pregunta: '¿Cuál es la moneda oficial de Argentina?',
        respuestas: [
            { texto: 'Real', correcta: false },
            { texto: 'Peso', correcta: true },
            { texto: 'Dólar', correcta: false },
            { texto: 'Sol', correcta: false },
        ]
    },
    {
        pregunta: '¿En qué provincia están las Cataratas del Iguazú?',
        respuestas: [
            { texto: 'Misiones ', correcta: true },
            { texto: 'Formosa', correcta: false },
            { texto: 'Salta', correcta: false },
            { texto: 'Santiago del Estero', correcta: false },
        ]
    },
    {
        pregunta: '¿Quién compuso el Himno Nacional Argentino?',
        respuestas: [
            { texto: 'Bartolomé Mitre con Amancio Alcorta', correcta: false },
            { texto: 'Esteban Echeverría con Juan Pedro Esnaola', correcta: false },
            { texto: 'Vicente López y Planes con Blas Parera', correcta: true },
            { texto: 'Juan Manuel de Rosas con Hilario Ascasubi', correcta: false },
        ]
    },
];

let preguntaActualConocimientos = 0;
let puntajeConocimientos = 0;

function mostrarPreguntaConocimientos() {
    let preguntaElemento = document.querySelector('#preguntaConocimiento');
    let pregunta = preguntasConocimientos[preguntaActualConocimientos];
    preguntaElemento.innerText = pregunta.pregunta;

    pregunta.respuestas.forEach(function(opcion, index) {
        let respuestaElemento = document.querySelector('#respuestaConocimiento' + (index + 1));
        if (respuestaElemento) {
            respuestaElemento.innerText = opcion.texto;
            respuestaElemento.style.display = 'block';
            respuestaElemento.style.backgroundColor = '';

            respuestaElemento.onclick = function() {
                if (opcion.correcta) {
                    respuestaElemento.style.backgroundColor = 'green';
                    puntajeConocimientos++;
                } else {
                    respuestaElemento.style.backgroundColor = 'red';
                }
                setTimeout(siguientePreguntaConocimientos, 1000);
            };
        }
    });
}

function siguientePreguntaConocimientos() {
    preguntaActualConocimientos++;
    if (preguntaActualConocimientos < preguntasConocimientos.length) {
        mostrarPreguntaConocimientos();
    } else {
        mostrarResultadoFinalConocimientos();
    }
}

function mostrarResultadoFinalConocimientos() {
    let resultadoElemento = document.querySelector('#resultado');
    resultadoElemento.innerText = 'Puntaje final: ' + puntajeConocimientos + ' de ' + preguntasConocimientos.length;
    resultadoElemento.style.display = 'block';
}

function iniciarJuegoConocimiento() {
    document.querySelector('.previa-quiz-conocimiento').style.display = 'none';
    document.querySelector('.juego-quiz-conocimiento').style.display = 'block';
    mostrarPreguntaConocimientos();
}

document.querySelector('#btnJugarConocimiento').onclick = iniciarJuegoConocimiento;
