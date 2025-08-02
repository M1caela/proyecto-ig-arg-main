
//   document.addEventListener('DOMContentLoaded', function () {
//     var formulario = document.getElementById('formulario');

//     formulario.addEventListener('submit', function (event) {
//       event.preventDefault();

//       // Limpiar errores previos
//       document.getElementById('nameError').textContent = '';
//       document.getElementById('messageError').textContent = '';
//       document.getElementById('successMessage').classList.add('hidden');

//       // Obtener valores
//       var nombre = document.getElementById('name').value.trim();
//       var email = document.getElementById('email').value.trim();
//       var asunto = document.getElementById('subject').value.trim();
//       var mensaje = document.getElementById('message').value.trim();

//       // Validación
//       var errores = false;

//       var letrasNombre = nombre.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ]/g, '');
//       if (letrasNombre.length < 2 || /\d/.test(nombre)) {
//         document.getElementById('nameError').textContent = 'El nombre debe tener al menos 2 letras y no contener números.';
//         errores = true;
//       }

//       var letrasMensaje = mensaje.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ]/g, '');
//       if (letrasMensaje.length < 10) {
//         document.getElementById('messageError').textContent = 'El mensaje debe tener al menos 10 letras.';
//         errores = true;
//       }

//       if (errores) return;

//       // Envío manual con fetch a Formspark
//       fetch("https://submit-form.com/YTTeBbsCt", {
//         method: "POST",
//         headers: { "Content-Type": "application/json", Accept: "application/json" },
//         body: JSON.stringify({
//           name: nombre,
//           email: email,
//           subject: asunto,
//           message: mensaje
//         })
//       })
//         .then(function (response) {
//           if (response.ok) {
//             document.getElementById('successMessage').classList.remove('hidden');
//             formulario.reset();
//           } else {
//             alert("Error al enviar. Intenta más tarde.");
//           }
//         })
//         .catch(function (error) {
//           alert("Error de red: " + error.message);
//         });
//     });
//   });


/////////claude///////

// se verifica que el mail tenga un formato válido y que el mensaje sea mayor a 5 dígitos 

// const formulario = document.getElementById('formulario');
// const message = document.getElementById("message");


// formulario.addEventListener('submit', function (e) {
//     const contenido = message.value.trim();

//     e.preventDefault();

//     const email = document.getElementById('email');
//     const message = document.getElementById('message');


//     if (contenido.length <= 5) {
//         e.preventDefault(); //  detiene el envío
//         alert("El mensaje debe tener más de 5 caracteres.");
//         message.focus();
//     }

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
//         alert("Por favor ingresá un email válido.");
//         email.focus();
//         return false;
//     }

//   formulario.submit(); 
// });

    // document.addEventListener("DOMContentLoaded", function () {
    // const form = document.getElementById("formulario");
    // const name = document.getElementById("name");

    // form.addEventListener("submit", function (e) {
    //     const nombre = name.value.trim();

    //     // Verifica que solo tenga letras y al menos 2
    //     const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{2,}$/;

    //     if (!soloLetras.test(nombre)) {
    //     e.preventDefault(); 
    //     alert("El nombre debe contener al menos 2 letras y no debe incluir números.");
    //     name.focus();
    //     }
    // });
    // });


    // validación: no se puede enviar el form solo con carácteres especiales
    // incluye soporte para caracteres acentuados y ñ
    // Los errores se muestran mientras el usuario escribe


    function validarNombre(name) {
        const tieneNumeros = /\d/.test(name); // que no tenga números
        const cantidadLetras = (name.match(/[A-Za-zÁÉÍÓÚáéíóúñÑ]/g) || []).length // contar letras (excluyendo espacios y caracteres especiales)

        if (tieneNumeros) {
            return { valid: false, message: "El nombre no debe contener números" };
        }

        if (cantidadLetras < 2) {
            return { valid: false, message: "El nombre debe contener al menos 2 letras" };
        }

            return { valid: true, message: "" };
    }

    function validarMensaje(message) {
        const cantidadLetras = (message.match(/[A-Za-zÁÉÍÓÚáéíóúñÑ]/g) || []).length // contar solo letras

        if (cantidadLetras < 10) {
        return { valid: false, message: "El mensaje debe contener al menos 10 letras" };
        }

        return { valid: true, message: "" };
    }

    // mostrar errores 
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorDiv = document.getElementById(fieldId + 'Error');
            
        field.classList.add('input-error');
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    }

    // limpiar errores
    function clearError(fieldId) {
        const field = document.getElementById(fieldId);
        const errorDiv = document.getElementById(fieldId + 'Error');
        
        field.classList.remove('input-error');
        errorDiv.style.display = 'none';
    }

    // validacion principal
    function validarForm() {
        const valorName = document.getElementById('name').value.trim();
        const valorMsj = document.getElementById('message').value.trim();

        clearError('name');
        clearError('message');

        let esValido = true;

        const nombreValidacion = validarNombre(valorName);
        if (!nombreValidacion.valid) {
            showError('name', nombreValidacion.message);
            esValido = false;
        } else {
            clearError('name');
        }

        const mensajeValidacion = validarMensaje(valorMsj);
        if (!mensajeValidacion.valid) {
            showError('message', mensajeValidacion.message);
            esValido = false;
        } else {
            clearError('message');
        }

        return esValido; // si es válido, se envía el formulario

    }

    // validacion en tiempo real
    document.getElementById('name').addEventListener('input', function() {
            const valorName = this.value.trim();
            const validation = validarNombre(valorName);
            
            if (valorName === '') {
                clearError('name');
                return;
            }
            
            if (validation.valid) {
                clearError('name');
            } else {
                showError('name', validation.message);
            }
        });

    document.getElementById('message').addEventListener('input', function() {
        const valorMsj = this.value.trim();
        const validation = validarMensaje(valorMsj);
        
        if (valorMsj === '') {
            clearError('message');
            return;
        }
        
        if (validation.valid) {
            clearError('message');
        } else {
            showError('message', validation.message);
        }
    });