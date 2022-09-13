import { ref } from 'vue';

const useValidations = () => {
    let isValid = ref(true);

    let validations = ref({
        name: {
            error: false,
            message: ''
        },
        last_name: {
            error: false,
            message: ''
        },
        phone: {
            error: false,
            message: ''
        },
        email: {
            error: false,
            message: ''
        },
        document_number: {
            error: false,
            message: ''
        }
    });

    

    const validateName = (name) => {
        validations.value.name.error = false;
        if (!name) {
            isValid.value = false;
            validations.value.name = {
                error: true,
                message: 'El campo es requerido'
            }
        }
    }

    const validateLastName = (last_name) => {
        validations.value.last_name.error = false;
        if (!last_name) {
            isValid.value = false;
            validations.value.last_name = {
                error: true,
                message: 'El campo es requerido'
            }
        }
    }

    const validatePhone = (phone) => {
        validations.value.phone.error = false;
        if (!phone) {
            isValid.value = false;
            validations.value.phone = {
                error: true,
                message: 'El campo es requerido.'
            }
            return;
        }

        if (/[a-zA-Z]/.test(phone)) {
            isValid.value = false;
            validations.value.phone = {
                error: true,
                message: 'Por favor ingrese un número de teléfono válido.'
            }
        }

    }

    const validateEmail = (email) => {
        validations.value.email.error = false;
        if (!email) {
            isValid.value = false;
            validations.value.email = {
                error: true,
                message: 'El campo es requerido.'
            }
            return;
        }

        if (!email.toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            isValid.value = false;
            validations.value.email = {
                error: true,
                message: 'Por favor ingrese un correo electrónico válido.'
            }
        }

    }

    const validateDocumentNumber = (document_type, document_number) => {
        validations.value.document_number.error = false;
        if (!document_number) {
            isValid.value = false;
            validations.value.document_number = {
                error: true,
                message: 'El campo es requerido.'
            }
            return;
        }

        switch (document_type) {
            case 'dni':
                if (document_number.toString().length != 8) {
                    isValid.value = false;
                    validations.value.document_number = {
                        error: true,
                        message: 'Ingrese un DNI válido.'
                    }
                }
                break;

            case 'cuit':
                if (document_number.toString().length != 11) {
                    isValid.value = false;
                    validations.value.document_number = {
                        error: true,
                        message: 'Ingrese un CUIT válido.'
                    }
                }
                break;

            default:
                break;
        }

    }

    return {
        validateName,
        validateLastName,
        validatePhone,
        validateEmail,
        validateDocumentNumber,
        validations,
        isValid
    }
}

export default useValidations;