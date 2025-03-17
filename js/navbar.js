// Navbar
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.toggle("hidden");
});

document.getElementById("close-menu").addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.add("hidden");
});

function toggleDropdown(id) {
    document.getElementById(id).classList.toggle("hidden");
}

let closeTimeout;

function openDropdown(id) {
    clearTimeout(closeTimeout); // Cancela el cierre si el usuario vuelve a hacer hover
    document.getElementById(id).classList.remove("hidden");
}

function closeDropdown(id) {
    closeTimeout = setTimeout(function () {
        document.getElementById(id).classList.add("hidden");
    }, 300); // Delay de 300ms antes de cerrar el menú
}


// 
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    if (window.scrollY === 0) {
        navbar.style.display = 'block';  // Mostrar navbar solo cuando estás en la parte superior
    } else {
        navbar.style.display = 'none';   // Ocultar navbar cuando haces scroll hacia abajo
    }
});

console.log("Navbar.js está cargado correctamente.");
