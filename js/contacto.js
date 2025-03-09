let formulario = document.querySelector('#form');
formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    if (form.checkValidity()) {
        alert('Gracias, tu mensaje se envió correctamente.');
    } 
});
