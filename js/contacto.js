
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