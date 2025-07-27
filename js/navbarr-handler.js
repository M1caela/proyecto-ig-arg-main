document.addEventListener("DOMContentLoaded", function () {
    const placeholder = document.getElementById("navbar-placeholder");
    if (!placeholder) return;

    // Calcular ruta relativa a navbar.html
    const relativePath = "/navbar.html";


    fetch(relativePath)
        .then((response) => {
            if (!response.ok) throw new Error("No se pudo cargar el navbar.");
            return response.text();
        })
        .then((html) => {
            placeholder.insertAdjacentHTML("beforeend", html);
            console.log("✅ Navbar cargado correctamente.");

            // Ejecutar scrpts del navbar SOLO una vez que fue insertado en el DOM
            iniciarNavbarFunciones();
        })
        .catch((error) => {
            console.error("Error al cargar el navbar:", error);
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

      // MENÚ MOBILE //
    const toggleBtn = document.getElementById("menu-toggle");
    const closeBtn = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");

    if (toggleBtn && mobileMenu) {
        toggleBtn.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
    }

    if (closeBtn && mobileMenu) {
        closeBtn.addEventListener("click", () => mobileMenu.classList.add("hidden"));
    }

    // submenus
     document.querySelectorAll(".dropdown-toggle").forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-target");
            const el = document.getElementById(id);
            if (el) {
                el.classList.toggle("hidden");
            }
        });
    });


    // cambiar fondo al hacer scroll
    const navbar = document.getElementById("navbar");
    if (navbar) {
        window.addEventListener("scroll", () => {
            console.log("scrollY:", window.scrollY); // ver si se activa el evento

            // es transparente al principio y azul al bajar
            if (window.scrollY > 10) {
            navbar.classList.remove("bg-transparent");
            navbar.classList.add("bg-[#1e2b57]");
            } else {
                navbar.classList.remove("bg-[#1e2b57]");
                navbar.classList.add("bg-transparent");
            }
        });
    }

  

}

    // submenús
    // window.toggleDropdown = function (id) {
    //     const el = document.getElementById(id);
    //       console.log("Clic en toggleDropdown:", id, el);

    //     if (el) {
    //         el.classList.toggle("hidden");
    //     }
    // };