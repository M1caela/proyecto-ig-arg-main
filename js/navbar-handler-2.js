document.addEventListener("DOMContentLoaded", function () {
    const placeholder = document.getElementById("navbar-placeholder");
    if (!placeholder) return;

    // para que cargue en todos los navegadores
  function obtenerBaseURL() {
  const path = window.location.pathname;
  const isGitHubPages = location.hostname.includes("github.io");
  const segs = path.split("/").filter(Boolean);
  if (isGitHubPages && segs.length > 0) {
    return `/${segs[0]}`; // nombre del repo
  }
  return "";
}

const base = obtenerBaseURL();
const relativePath = `${base}/navbar.html`;

  // Fetch + limpiar posible inyección de Live Server + renderizar
  fetch(navPath)
    .then((res) => {
      if (!res.ok) throw new Error(`Status ${res.status}`);
      return res.text();
    })
    .then((html) => {
      // Si usás Live Server, quita la sección de live-reload que rompe tu HTML
      html = html.replace(
        /<!-- Code injected by live-server -->[\s\S]*?<\/script>/gi,
        ""
      );

      placeholder.innerHTML = html;
      console.log("✅ Navbar inyectado correctamente");
      iniciarNavbarFunciones();
    })
    .catch((err) => {
      console.error("❌ Error cargando navbar:", err);
    });
});

function iniciarNavbarFunciones() {
  let closeTimeout;

  // dropdown desktop con delay
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

  // toggle menú mobile
  const toggleBtn = document.getElementById("menu-toggle");
  const closeBtn  = document.getElementById("close-menu");
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

  // submenús mobile (botones .dropdown-toggle)
  document.querySelectorAll(".dropdown-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      document.getElementById(target)?.classList.toggle("hidden");
    });
  });

  // scroll: fondo transparente→sólido
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        navbar.classList.replace("bg-transparent", "bg-[#1e2b57]");
      } else {
        navbar.classList.replace("bg-[#1e2b57]", "bg-transparent");
      }
    });
  }
}
