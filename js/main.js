
// efecto parallax
window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var parallaxImage = document.querySelector('.parallax-backg img');

    /* Se mueve más lento que el scroll para el efecto parallax */
    parallaxImage.style.transform = 'translateY(' + scrollPosition * 0.3 + 'px)';
});



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

