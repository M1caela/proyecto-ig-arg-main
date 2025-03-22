let puntajes = [0, 0, 0, 0, 0]; // 5 personajes posibles

let preguntas = [
    {
        pregunta: "¿Cuál es tu comida favorita?",
        respuestas: [
            { texto: "Asado", personaje: 0 },
            { texto: "Empanadas", personaje: 1 },
            { texto: "Pizza", personaje: 2 },
            { texto: "Milanesa", personaje: 3 },
            { texto: "Locro", personaje: 4 },
            { texto: "Pastelitos", personaje: 0 }
        ]
    },
    {
        pregunta: "¿Qué actividad preferís en tu tiempo libre?",
        respuestas: [
            { texto: "Leer", personaje: 1 },
            { texto: "Hacer deportes", personaje: 2 },
            { texto: "Escuchar música", personaje: 0 },
            { texto: "Cocinar", personaje: 4 },
            { texto: "Salir con amigos", personaje: 3 },
            { texto: "Dibujar", personaje: 1 }
        ]
    },
   
];


let personajes = [
    {
        nombre: "Personaje 1",
        descripcion: "Descripción del personaje 1. Ejemplo: Eres una persona muy apasionada y creativa.",
        imagen: "ruta/a/imagen1.jpg"
    },
    {
        nombre: "Personaje 2",
        descripcion: "Descripción del personaje 2. Ejemplo: Eres una persona muy lógica y racional.",
        imagen: "ruta/a/imagen2.jpg"
    },
    {
        nombre: "Personaje 3",
        descripcion: "Descripción del personaje 3. Ejemplo: Eres una persona muy amable y generosa.",
        imagen: "ruta/a/imagen3.jpg"
    },
    {
        nombre: "Personaje 4",
        descripcion: "Descripción del personaje 4. Ejemplo: Eres una persona muy determinada y segura de sí misma.",
        imagen: "ruta/a/imagen4.jpg"
    },
    {
        nombre: "Personaje 5",
        descripcion: "Descripción del personaje 5. Ejemplo: Eres una persona muy relajada y divertida.",
        imagen: "ruta/a/imagen5.jpg"
    }
];


let preguntaActual = 0;

let btnJugarPersonajes = document.querySelector('#btnJugarPersonajes');
btnJugarPersonajes.addEventListener('click', function(){
    iniciarJuego();
});

function iniciarJuego() {
    document.querySelector('.juego-quiz-personaje').style.display = 'block';
    document.querySelector('.previa-quiz-personaje').style.display = 'none';
    mostrarPregunta();
};

function mostrarPregunta() {
    let preguntaElemento = document.querySelector('#pregunta');
    let pregunta = preguntas[preguntaActual]; //  Toma un objeto del array preguntas que corresponde a la pregunta actual
    preguntaElemento.innerText = pregunta.pregunta;

    pregunta.respuestas.forEach(function(opcion, index) { //forEach recorre el array de respuestas, opcion es cada objeto e index el nro de cada respuesta
        let respuestaElemento = document.querySelector('#respuesta' + (index + 1)); // selecciona uno de los div de respuesta usando el indice
        respuestaElemento.innerText = opcion.texto; // muestra la opcion de respuesta 

        respuestaElemento.style.display = 'block';

        // capturar el click de cada rta
        respuestaElemento.onclick = function() {
            console.log("Se hizo clic en la opción: " + opcion.texto); // Verificación del clic
            puntajes[opcion.personaje]++; // suma un punto al personaje vinculado a esa opcion // puntajes es el contadpor de cada personaje
            siguientePregunta();
        };
    });
};

function siguientePregunta() {
    preguntaActual++;
        
    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
};

function mostrarResultado() {    
    document.querySelector('.juego-quiz-personaje').style.display = 'none';

    let personajeGanador = puntajes.indexOf(Math.max(...puntajes));

    let resultadoElemento = document.querySelector('.resultado-personaje');
        resultadoElemento.innerHTML = `
            <h1 class="font-bold text-2xl mb-4">${personajes[personajeGanador].nombre}</h1>
            <p class="mb-4">${personajes[personajeGanador].descripcion}</p>
            <img src="${personajes[personajeGanador].imagen}" alt="${personajes[personajeGanador].nombre}" class="w-48 h-48 rounded-full">
        `;
        resultadoElemento.style.display = 'block';
}


