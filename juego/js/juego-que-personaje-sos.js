//     QUIZ 1 - ¿Qué personaje argentino sos?   //

let puntajes = [0, 0, 0, 0, 0]; // 5 personajes posibles

let preguntas = [
    {
        pregunta: "Al elegir una temática para un libro, películaa/serie o podcast, generalmente prefiero...",
        respuestas: [
            { texto: "Relatos de superación personal.", personaje: 2 },
            { texto: "Historias emotivas e introspectivas.", personaje: 3 },
            { texto: "Crónicas urbanas y culturales.", personaje: 0 },
            { texto: "Cuentos poéticos y reflexivos.", personaje: 3 },
            { texto: "Biografías de grandes pensadores.", personaje: 4 },
            { texto: "Aventuras o epopeyas históricas.", personaje: 1 }
        ]
    },

    {
        pregunta: "Cuando tengo tiempo libre, disfruto de...",
        respuestas: [
            { texto: "Hacer sociales, salir a conocer lugares nuevos.", personaje: 1 },
            { texto: "Hacer deporte o alguna actividad física.", personaje: 2 },
            { texto: "Tocar o escuchar música.", personaje: 0 },
            { texto: "Investigar y aprender cosas nuevas.", personaje: 4 },
            { texto: "Escribir o leer algo interesante.", personaje: 3 },
            { texto: "Planificar y organizar mis actividades o pendientes.", personaje: 1 }
        ]
    },

    {
        pregunta: "Si tuviera que elegir un lugar ideal para relajarme, prefiero...",
        respuestas: [
            { texto: "Un bosque silencioso.", personaje: 3 },
            { texto: "Una biblioteca acogedora.", personaje: 4 },
            { texto: "Una playa tranquila.", personaje: 3 },
            { texto: "Mi hogar, con familia y amigos.", personaje: 2 },
            { texto: "Una montaña rodeada de naturaleza.", personaje: 1 },
            { texto: "Un teatro o cine sereno.", personaje: 0 }
        ]
    },

    {
        pregunta: "Tus personas cercanas te decribirían como una persona...",
        respuestas: [
            { texto: "Soñadora y apasionada. ", personaje: 0 },
            { texto: "Inteligente y comprometida.", personaje: 4 },
            { texto: "Fuerte y decidida.", personaje: 1 },
            { texto: "Creativa y sensible.", personaje: 3 },
            { texto: "Dedicada y curiosa.", personaje: 4 },
            { texto: "Perseverante y humilde.", personaje: 2 }
        ]
    },

    {
        pregunta: "¿Qué estilo de música te gusta más?",
        respuestas: [
            { texto: "Tango o folklore", personaje: 0 },
            { texto: "Bachata o pop latino", personaje: 2 },
            { texto: "Nada en particular, prefiero el silencio", personaje: 4 },
            { texto: "Música clásica o jazz", personaje: 3 },
            { texto: "Rock (de cualquier tipo) o metal", personaje: 1 },
            { texto: "Cumbia o reggaetón", personaje: 2 }
        ]
    },

    {
        pregunta: "¿Qué valor considerás más importante en la vida?",
        respuestas: [
            { texto: "Pasión", personaje: 0 },
            { texto: "Coraje", personaje: 1 },
            { texto: "Disciplina", personaje: 2 },
            { texto: "Sensibilidad", personaje: 3 },
            { texto: "Compromiso", personaje: 4 },
            { texto: "Carisma", personaje: 0 }
        ]
    },

    {
        pregunta: "¿Qué área te interesa más?",
        respuestas: [
            { texto: "Arte / diseño / poesía.", personaje: 3 },
            { texto: "Música / entretenimiento.", personaje: 0 },
            { texto: "Deportes / competencia.", personaje: 2 },
            { texto: "Actuación / teatro.", personaje: 0 },
            { texto: "Educación / Lectura.", personaje: 4 },
            { texto: "Historia / política / economía.", personaje: 1 }
        ]
    },

    {
        pregunta: "¿Cuál sería tu forma 'legendaria' de pasar a la historia?",
        respuestas: [
            { texto: "Contribuyendo a la educación y el pensamiento del país. ", personaje: 4 },
            { texto: "Luchando por causas importantes y defendiendo tus ideales. ", personaje: 1 },
            { texto: "Siendo un ejemplo de dedicación, perseverencia y esfuerzo.", personaje: 2 },
            { texto: "Creando obras que conmuevan y sean reconocidas mundialmente.", personaje: 3 },
            { texto: "Inspirando a otros a luchar por sus derechos.", personaje: 1 },
            { texto: "Creando música que trascienda generaciones.", personaje: 0 }
        ]
    },

    {
        pregunta: "¿Cuál de estas frases crees que te representa mejor?",
        respuestas: [
            { texto: "Defender lo justo es mi deber.", personaje: 1 },
            { texto: "Cantar es vivir.", personaje: 0 },
            { texto: "El arte es la expresión más pura del alma.", personaje: 3 },
            { texto: "Escribo como medio y arma de combate.", personaje: 4 },
            { texto: "La pasión mueve montañas.", personaje: 2 },
            { texto: "La educación es la base de todo progreso.", personaje: 4 }
        ]
    },
];

let preguntaActual = 0;

let personajes = [
    {
        nombre: "Carlos Gardel",
        descripcion: "Reconocido como el gran ícono del tango argentino, su voz cálida y su habilidad para conectar emocionalmente con el público lo convirtieron en un símbolo de la música. Para Gardel y para vos, la música es una de las cosas más valiosas.",
        imagen: "img/gardel.png"
    },
    {
        nombre: "Juana Azurduy",
        descripcion: "Una figura heroica, Juana luchó incansablemente en las guerras de independencia sudamericanas. Su coraje y determinación la hicieron destacar como una guerrera que desafiaba las normas de su época, liderando tropas con fuerza y pasión. ¡Tanto ella como vos, son personas determinadas y valientes!",
        imagen: "img/azurduy.png"
    },
    {
        nombre: "Lionel Messi",
        descripcion: "Más que un futbolista, Messi personifica la persistencia y la dedicación. Su habilidad extraordinaria en el campo, combinada con una carrera construida a base de trabajo arduo y compromiso constante, lo han convertido en un modelo de perseverancia para miles de personas alrededor del mundo. ¡Seguramente vos seas una de ellos!",
        imagen: "img/messi.png"
    },
    {
        nombre: "Alfonsina Storni",
        descripcion: "Con su pluma exploró temas profundos en sus escritos, desafiando paradigmas sociales y defendiendo la voz femenina. Su legado como poeta y escritora sigue inspirando generaciones con su autenticidad y creatividad. Tanto ella como vos tienen amor por la escritura y el lado poético de la vida.",
        imagen: "img/storni.png"
    },
    {
        nombre: "Domingo Faustino Sarmiento",
        descripcion: "Destacado por su labor docente y visión política, Sarmiento promovió la educación como base del progreso. Su faceta militar se sumó a su incansable esfuerzo por construir un país más ilustrado y desarrollado, dejando una huella imborrable en la historia argentina. Comparte con vos su amor el aprendizaje y la dedicación.",
        imagen: "img/sarmiento.png"
    }
];

let btnJugarPersonajes = document.querySelector('#btnJugarPersonajes');
btnJugarPersonajes.addEventListener('click', function(){
    iniciarJuego();
});

function iniciarJuego() {
    document.querySelector('.juego-quiz-personaje').style.display = 'block';
    document.querySelector('.previa-quiz-personaje').style.display = 'none';

    preguntaActual = 0;
    puntajes = [0, 0, 0, 0, 0]; // Reiniciar puntajes
    actualizarBarraProgresoPersonaje();

    mostrarPregunta();
};

function actualizarBarraProgresoPersonaje() {
    const progressBar = document.querySelector('#p02d');
    const progressLabel = document.querySelector('#p02d-label');
    
    // calcular el porcentaje de progreso basado en la pregunta actual
    const porcentaje = Math.floor((preguntaActual / preguntas.length) * 100);
    progressBar.value = porcentaje;
    progressLabel.innerHTML = `<span class="sr-only">progreso</span> ${porcentaje}%`;
    
    // ajustar el ancho del label según el progreso
    progressLabel.style.width = `${porcentaje}%`;
};

// cuando se clickea una rta se reproduce el sonido
const audioSeleccion = new Audio('sonidos/select.mp3');
function reproducirSonidoSeleccion() {
    audioSeleccion.currentTime = 0;    // reiniciar el audio si ya estaba reproduciéndose
    audioSeleccion.play()  
};

// cuando se muestra el resultado suena otro sonido
const audioFinalizar = new Audio('sonidos/finish-game-personaje.mp3');
function reproducirSonidoFinalizar () {
    audioFinalizar.play()
};

function mostrarPregunta() {
    let preguntaElemento = document.querySelector('#pregunta');
    let pregunta = preguntas[preguntaActual]; //  toma la pregunta actual del array preguntas (para esto funciona contabilizar preguntaActual)
    preguntaElemento.innerText = pregunta.pregunta;

    pregunta.respuestas.forEach(function(opcion, index) { // se recorren array de respuestas (dentro de preguntas) // opcion es cada objeto, index el nro de cada respuesta
        let respuestaElemento = document.querySelector('#respuesta' + (index + 1)); // se seleccionan los 6 div de respuesta usando el indice (el id debe ser respuesta1, etc)
        respuestaElemento.innerText = opcion.texto; 
        respuestaElemento.style.display = 'block';

        // capturar el click de cada rta
        respuestaElemento.onclick = function() {
            puntajes[opcion.personaje]++; // suma un punto al personaje vinculado a esa opcion // puntajes es el contdor de cada personaje
            reproducirSonidoSeleccion();
            siguientePregunta();
        };
    });
};

function siguientePregunta() {
    preguntaActual++; // se suma para pasar a la siguiente posición del array preguntas
    actualizarBarraProgresoPersonaje();
        
    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    } 
};

function mostrarResultado() {    
    document.querySelector('.juego-quiz-personaje').style.display = 'none';
    let personajeGanador = puntajes.indexOf(Math.max(...puntajes));

    reproducirSonidoFinalizar ()
    let resultadoElemento = document.querySelector('.resultado-personaje');
        resultadoElemento.innerHTML = `
            <div class="flex flex-col justify-center items-center m-auto p-6">
                <h1 class="font-bold text-2xl mb-4">${personajes[personajeGanador].nombre}</h1>
                <p class="mb-4">${personajes[personajeGanador].descripcion}</p>
                <img src="${personajes[personajeGanador].imagen}" alt="${personajes[personajeGanador].nombre}" class="flex justify-center items-center m-auto">

                <a href="index.html"><button class="rounded-md text-white font-semibold p-2 m-6 bg-[#74ACDF] hover:bg-[#4F8DC6]">Volver a jugar</button></a>
               <a href="#juego2">Jugar quiz de conocimientos</a">
            </div>
        `;
        resultadoElemento.style.display = 'block';
}


