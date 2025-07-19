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

// ========== Funciones una vez cargado el navbar ==========
function iniciarNavbarFunciones() {
    let closeTimeout;

    // Mostrar/ocultar dropdowns (con delay)
    window.openDropdown = function (id) {
        clearTimeout(closeTimeout);
        const el = document.getElementById(id);
        if (el) el.classList.remove("hidden");
    };

    window.closeDropdown = function (id) {
        closeTimeout = setTimeout(function () {
            const el = document.getElementById(id);
            if (el) el.classList.add("hidden");
        }, 300);
    };

    // Menú hamburguesa
    const toggleBtn = document.getElementById("menu-toggle");
    const closeBtn = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");

    if (toggleBtn && mobileMenu) {
        toggleBtn.addEventListener("click", function () {
            mobileMenu.classList.toggle("hidden");
        });
    }

    if (closeBtn && mobileMenu) {
        closeBtn.addEventListener("click", function () {
            mobileMenu.classList.add("hidden");
        });
    }

    // Mostrar navbar solo arriba del todo
    const navbar = document.querySelector("nav");
    if (navbar) {
        window.addEventListener("scroll", function () {
            if (window.scrollY === 0) {
                navbar.style.display = "block";
            } else {
                navbar.style.display = "none";
            }
        });
    }
}
