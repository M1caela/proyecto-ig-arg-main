// se verifica que el mail tenga un formato válido y que el mensaje sea mayor a 5 dígitos 
// no se verifica si los campos están completos ya que eso lo hace required en el input

let enviarBtn = document.getElementById('enviar');

const validate = (e) => {
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const formulario = document.getElementById('formulario');

    function emailIsValid(emailInput) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput);
    }

    if (!emailIsValid(email.value)) {
        alert("Por favor ingresá un email válido.");
        email.focus();
        return false;
    }

    function messageIsValid(messageInput) {
        return messageInput.length > 5;
    }

    if (!messageIsValid(message.value)) {
        alert("Parece que el mensaje es muy corto, intentá completarlo.");
        message.focus();
        return false;
    }

    // esto interfiere con formsubmit //
    // alert('¡Gracias por tu mensaje! Se envió correctamente.');
    // formulario.submit();
};

enviarBtn.addEventListener('click', validate);
