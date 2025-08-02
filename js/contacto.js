// se verifica que el mail tenga un formato válido y que el mensaje sea mayor a 5 dígitos 

const formulario = document.getElementById('formulario');
const message = document.getElementById("message");


formulario.addEventListener('submit', function (e) {
    const contenido = message.value.trim();

    e.preventDefault();

    const email = document.getElementById('email');
    const message = document.getElementById('message');


    if (contenido.length <= 5) {
        e.preventDefault(); //  detiene el envío
        alert("El mensaje debe tener más de 5 caracteres.");
        message.focus();
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        alert("Por favor ingresá un email válido.");
        email.focus();
        return false;
    }

  formulario.submit(); 
});



