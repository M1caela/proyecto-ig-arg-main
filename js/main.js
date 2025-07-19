// efecto parallax
window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var parallaxImage = document.querySelector('.parallax-backg img');

    /* Se mueve más lento que el scroll para el efecto parallax */
    parallaxImage.style.transform = 'translateY(' + scrollPosition * 0.3 + 'px)';
});

