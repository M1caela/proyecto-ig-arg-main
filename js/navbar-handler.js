document.addEventListener("DOMContentLoaded", function () {
    const placeholder = document.getElementById("navbar-placeholder");
    if (!placeholder) return;

    // Calcular ruta relativa a navbar.html
    let path = window.location.pathname;
    let depth = path.split("/").length - 2;
    let relativePath = "../".repeat(depth) + "navbar.html";

    fetch(relativePath)
        .then((response) => {
            if (!response.ok) throw new Error("No se pudo cargar el navbar.");
            return response.text();
        })
        .then((html) => {
            placeholder.innerHTML = html;
            console.log("✅ Navbar cargado correctamente.");

            // Ejecutar scripts del navbar SOLO una vez que fue insertado en el DOM
            iniciarNavbarFunciones();
        })
        .catch((error) => {
            console.error("Error al cargar el navbar:", error);
        });
});

// una vez cargado el navbar:
function iniciarNavbarFunciones() {
    let closeTimeout;

    // Menu desplegable con delay
    window.openDropdown = function (id) {
        clearTimeout(closeTimeout);
        const el = document.getElementById(id);
        if (el) el.classList.remove("hidden");
    };

    window.closeDropdown = function (id) {
        closeTimeout = setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.classList.add("hidden");
        }, 300);
    };

    // menú mobile
    const toggleBtn = document.getElementById("menu-toggle");
    const closeBtn = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");

    if (toggleBtn && mobileMenu) {
        toggleBtn.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
    }

    if (closeBtn && mobileMenu) {
        closeBtn.addEventListener("click", () => mobileMenu.classList.add("hidden"));
    }

    // cambiar fondo al hacer scroll
    if (navbar) {
    window.addEventListener("scroll", () => {
    console.log("scrollY:", window.scrollY); // ver si se activa el evento

    if (window.scrollY > 10) {
      navbar.classList.remove("bg-transparent");
      navbar.classList.add("bg-[#233679]");
      console.log("🟦 Fondo cambiado a color");
    } else {
      navbar.classList.remove("bg-[#233679]");
      navbar.classList.add("bg-transparent");
      console.log("⬜ Fondo transparente");
    }
  });
}
}

