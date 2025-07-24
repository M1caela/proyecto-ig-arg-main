document.addEventListener("DOMContentLoaded", function () {
  var piezas = [
    "vino", "tango", "hornero", "empanadas", "obelisco", "carne", "pelota","mate", "sol", "bandera"
  ];

  var cartas = [];
  var carta1 = null;
  var carta2 = null;

  // controladores de turno
  var bloqueo = false;
  var aciertosJugador = 0;
  var aciertosBot = 0;
  var turnoJugador = true;

  var btnJugar = document.getElementById("btnJugarMemotest");
  var tablero = document.getElementById("tableroMemotest");
  var juego = document.querySelector(".juego-memotest");
  var previa = document.querySelector(".previa-memotest");
  var mensaje = document.getElementById("mensajeFinalMemotest");
  var btnReiniciar = document.getElementById("btnReiniciarMemotest");
  var indicadorTurno = document.getElementById("turnoActual");

  btnJugar.addEventListener("click", iniciarJuego);
  btnReiniciar.addEventListener("click", iniciarJuego);

  function iniciarJuego() {
    // se hace visible el tablero de juego en el mismo contenedor
    previa.classList.add("hidden");
    juego.classList.remove("hidden");
    mensaje.textContent = "";
      // btnReiniciar.classList.add("hidden");

    // se reinicia para no arrastrar lo anterior
    carta1 = null;
    carta2 = null;
    bloqueo = false;
    aciertosJugador = 0;
    aciertosBot = 0;
    turnoJugador = true;
    actualizarIndicadorTurno();

    // duplicar piezas y mezclar 
    var duplicadas = piezas.concat(piezas);
    cartas = duplicadas.sort(function () {
      return 0.5 - Math.random();
    });

    tablero.innerHTML = "";

    // mostrar en pantalla las piezas 
    for (var i = 0; i < cartas.length; i++) {
      var div = document.createElement("div");
      div.className = "cartaMemotest"; 
      div.dataset.nombre = cartas[i]; // guardar nombre para dsp verificar si dos coinciden

      var img = document.createElement("img");
      img.src = "img/memotest/" + cartas[i] + ".png";
      img.alt = cartas[i];

      div.appendChild(img);
      div.addEventListener("click", revelarCarta); // al clickear la carta, se "da vuelta"
      tablero.appendChild(div); 
    }
  }

  function actualizarIndicadorTurno() {
    indicadorTurno.textContent = turnoJugador ? "Tu turno" : "Turno del bot";
  }

  function revelarCarta() {
    // no se puede hacer click si no es tu turno o si la pieza ya esta visible
    if (bloqueo || !turnoJugador || this.classList.contains("descubierta")) return;

    this.classList.add("descubierta");

    // guardar cartas clickeadas
    if (!carta1) {
      carta1 = this;
    } else {
      carta2 = this;
      bloqueo = true; // solo pueden ser 2 

      // se verifica si coinciden
      if (carta1.dataset.nombre === carta2.dataset.nombre) {
        aciertosJugador++;
        carta1 = null;
        carta2 = null;


        // si ya se encontraron todas, termina el juego
        if (aciertosJugador + aciertosBot === piezas.length) {
          mostrarGanador();
        } else {
          turnoJugador = false;
          actualizarIndicadorTurno();
          setTimeout(turnoBot, 1000);
        }
      } else {
        // sino, se vuelven a "dar vuelta" las cartas 
        setTimeout(function () {
          carta1.classList.remove("descubierta");
          carta2.classList.remove("descubierta");
          carta1 = null;
          carta2 = null;

          turnoJugador = false;
          actualizarIndicadorTurno();
          setTimeout(turnoBot, 1000);
        }, 1000);
      }
    }
  }


function turnoBot() {
    bloqueo = true;

    // elegir entre las cartas válidas (no descubiertas)
    var disponibles = Array.from(document.querySelectorAll(".cartaMemotest"))
      .filter(function (carta) {
        return !carta.classList.contains("descubierta");
      });

    // si no hay al menos 2  disponibles, el juego termina
    if (disponibles.length < 2) {
      mostrarGanador();
      return;
    }

    // bot elige dos cartas al azar
    var index1 = Math.floor(Math.random() * disponibles.length);
    var cartaBot1 = disponibles[index1];
    disponibles.splice(index1, 1); 

    var index2 = Math.floor(Math.random() * disponibles.length);
    var cartaBot2 = disponibles[index2];

    cartaBot1.classList.add("descubierta");
    cartaBot2.classList.add("descubierta");

    setTimeout(function () {
        // se verifica si coinciden
        if (cartaBot1.dataset.nombre === cartaBot2.dataset.nombre) {
          aciertosBot++;
          if (aciertosJugador + aciertosBot === piezas.length) {
            mostrarGanador();
          } else {
            turnoJugador = true;
            actualizarIndicadorTurno();
            bloqueo = false;
          }
        } else {
          cartaBot1.classList.remove("descubierta");
          cartaBot2.classList.remove("descubierta");

          // cambio de turno
          turnoJugador = true;
          actualizarIndicadorTurno();
          bloqueo = false;
        }
    }, 1000);
  }

  function mostrarGanador() {
    bloqueo = true;
    btnReiniciar.classList.remove("hidden");

    if (aciertosJugador > aciertosBot) {
      mensaje.textContent = "¡Ganaste! Felicidades 🎉";
    } else if (aciertosBot > aciertosJugador) {
      mensaje.textContent = "Perdiste 😓 ¡Quizás la próxima!";
    } else {
      mensaje.textContent = "¡Empate!";
    }
  }

}); // cierre de DOMContentLoaded

