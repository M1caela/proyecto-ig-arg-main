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

document.querySelector('#btnJugarConocimiento').onclick = iniciarJuegoConocimiento;
function iniciarJuegoConocimiento() {
    document.querySelector('.previa-quiz-conocimiento').style.display = 'none';
    document.querySelector('.juego-quiz-conocimiento').style.display = 'block';
    mostrarPreguntaConocimientos();
}

// Función para actualizar la barra de progreso
function actualizarBarraProgreso() {
    const progressBar = document.querySelector('#p01d');
    const progressLabel = document.querySelector('#p01d-label');
    
    // Calcular el porcentaje de progreso basado en la pregunta actual
    const porcentaje = Math.floor((preguntaActualConocimientos / preguntasConocimientos.length) * 100);
    
    // Actualizar el valor y el texto de la barra de progreso
    progressBar.value = porcentaje;
    progressLabel.innerHTML = `<span class="sr-only">progreso</span> ${porcentaje}%`;
    
    // Ajustar el ancho del label según el progreso
    progressLabel.style.width = `${porcentaje}%`;
}

function mostrarPreguntaConocimientos() {
    let preguntaElemento = document.querySelector('#preguntaConocimiento');
    let pregunta = preguntasConocimientos[preguntaActualConocimientos]; //  toma la pregunta actual del array preguntas (para esto funciona contabilizar preguntaActualConocimientos)
    preguntaElemento.innerText = pregunta.pregunta;

    pregunta.respuestas.forEach(function(opcion, index) { // se recorren array de respuestas (dentro de preguntas) // opcion es cada objeto, index el nro de cada respuesta
        let respuestaElemento = document.querySelector('#respuestaConocimiento' + (index + 1));
        if (respuestaElemento) {
            respuestaElemento.innerText = opcion.texto;
            respuestaElemento.style.display = 'block';
            respuestaElemento.style.backgroundColor = '';

            // se captura el click de cada respuesta
            respuestaElemento.onclick = function() {
                if (opcion.correcta) {
                    respuestaElemento.style.backgroundColor = 'green';
                    puntajeConocimientos++; // se suma para el puntje final y se muestra un color según correcto o incorrecto
                } else {
                    respuestaElemento.style.backgroundColor = 'red';
                }
                setTimeout(siguientePreguntaConocimientos, 1000);
            };
        }
    });
}

function siguientePreguntaConocimientos() {
    preguntaActualConocimientos++;  // se suma para pasar a la siguiente posición del array preguntas{
    actualizarBarraProgreso(); 

    if (preguntaActualConocimientos < preguntasConocimientos.length) {
        mostrarPreguntaConocimientos();
    } else {
        mostrarResultadoFinalConocimientos();
    }
}

function mostrarResultadoFinalConocimientos() {
    document.querySelector('.juego-quiz-conocimiento').style.display = 'none';

    let resultadoElementoConocimiento = document.querySelector('.resultado-conocimiento');

    // calcular el porcentaje de respuestas correctas para mostrar mensaje según nivel
    const porcentaje = (puntajeConocimientos / preguntasConocimientos.length) * 100;
    let imagenSrc = '';
    let mensajeNivel = '';
    
    if (porcentaje <= 20) {
        imagenSrc = 'img/nivel1.png';
        mensajeNivel = '¡Nunca es tarde para seguir aprendiendo!';
    } else if (porcentaje <= 40) {
        imagenSrc = 'img/nivel2.png';
        mensajeNivel = 'Conoces algo de Argentina, pero siempre se puede mejorar.';
    } else if (porcentaje <= 60) {
        imagenSrc = 'img/nivel3.png';
        mensajeNivel = 'Tienes un conocimiento promedio sobre Argentina, ¡seguí asi!';
    } else if (porcentaje <= 80) {
        imagenSrc = 'img/nivel4.png';
        mensajeNivel = '¡Muy bien! Conocés bastante sobre Argentina.';
    } else {
        imagenSrc = 'img/nivel5.png';
        mensajeNivel = '¡Felicitaciones! Sos todo un experto.';
    }

    resultadoElementoConocimiento.innerHTML = 
        `<div class="flex flex-col justify-center items-center m-auto p-6">
            <img src="${imagenSrc}" alt="Nivel de conocimiento" class="flex justify-center items-center m-auto w-64 h-auto mb-4">
            <h2 class="font-bold text-xl mb-2">${mensajeNivel}</h2> 
            <h1 class="font-bold text-2xl mb-4"> Puntaje final: ${puntajeConocimientos}/${preguntasConocimientos.length}</h1> 

            <a href="index.html"><button class="rounded-md text-white font-semibold p-2 m-6 bg-[#74ACDF] hover:bg-[#4F8DC6]">Volver a jugar</button></a>
            <a href="#juego1">Jugar quiz de personalidades</a">
        </div>` // se muestra mensaje según cantidad de rtas correctas 
    ;
    resultadoElementoConocimiento.style.display = 'block';
}


// agregar sonidos de bien/mal
// css: el fondo tiene margenes blancos que no deberia

