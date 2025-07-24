document.addEventListener("DOMContentLoaded", function () {
  var provincias = [
    "buenos_aires", "cordoba", "salta", "mendoza", "neuquen", "santa_fe"
  ];

  var cartas = [];
  var carta1 = null;
  var carta2 = null;
  var bloqueo = false;
  var aciertos = 0;

  var btnJugar = document.getElementById("btnJugarMemotest");
  var tablero = document.getElementById("tableroMemotest");
  var juego = document.querySelector(".juego-memotest");
  var previa = document.querySelector(".previa-memotest");
  var mensaje = document.getElementById("mensajeFinalMemotest");
  var btnReiniciar = document.getElementById("btnReiniciarMemotest");

  btnJugar.addEventListener("click", iniciarJuego);
  btnReiniciar.addEventListener("click", iniciarJuego);

  function iniciarJuego() {
    previa.classList.add("hidden");
    juego.classList.remove("hidden");
    mensaje.textContent = "";
    btnReiniciar.classList.add("hidden");
    carta1 = null;
    carta2 = null;
    bloqueo = false;
    aciertos = 0;

    var duplicadas = provincias.concat(provincias);
    cartas = duplicadas.sort(function () {
      return 0.5 - Math.random();
    });

    tablero.innerHTML = "";

    for (var i = 0; i < cartas.length; i++) {
      var div = document.createElement("div");
      div.className = "cartaMemotest";
      div.dataset.nombre = cartas[i];

      var img = document.createElement("img");
      img.src = "img/" + cartas[i] + ".png";
      img.alt = cartas[i];

      div.appendChild(img);
      div.addEventListener("click", revelarCarta);
      tablero.appendChild(div);
    }
  }

  function revelarCarta() {
    if (bloqueo || this.classList.contains("descubierta")) return;

    this.classList.add("descubierta");

    if (!carta1) {
      carta1 = this;
    } else {
      carta2 = this;
      bloqueo = true;

      if (carta1.dataset.nombre === carta2.dataset.nombre) {
        aciertos++;
        carta1 = null;
        carta2 = null;
        bloqueo = false;

        if (aciertos === provincias.length) {
          mensaje.textContent = "¡Ganaste! Provincias encontradas 🎉";
          btnReiniciar.classList.remove("hidden");
        }
      } else {
        setTimeout(function () {
          carta1.classList.remove("descubierta");
          carta2.classList.remove("descubierta");
          carta1 = null;
          carta2 = null;
          bloqueo = false;
        }, 1000);
      }
    }
  }
});
