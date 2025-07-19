// js/cargar-navbar.js

// document.addEventListener("DOMContentLoaded", function () {
//   const placeholder = document.getElementById("navbar-placeholder");

//   if (placeholder) {
//     // Detectar cuántos niveles subir para encontrar navbar.html
//     let path = window.location.pathname;
//     let depth = path.split("/").length - 2;
//     let relativePath = "../".repeat(depth) + "navbar.html";

//     fetch(relativePath)
//       .then((response) => {
//         if (!response.ok) throw new Error("No se pudo cargar el navbar.");
//         return response.text();
//       })
//       .then((html) => {
//         placeholder.innerHTML = html;
//       })
//       .catch((error) => {
//         console.error("Error al cargar el navbar:", error);
//       });
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     fetch("/navbar.html")
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Error al cargar el navbar");
//             }
//             return response.text();
//         })
//         .then(data => {
//             document.getElementById("navbar-container").innerHTML = data;

//             // Una vez cargado el navbar, ahora sí cargamos el script del toggle
//             const script = document.createElement("script");
//             script.src = "/js/navbar-toggle.js"; // Asegurate que esta ruta sea correcta
//             document.body.appendChild(script);
//         })
//         .catch(error => {
//             console.error("Error al cargar el navbar:", error);
//         });
// });

