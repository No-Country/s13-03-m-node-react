import * as yup from 'yup';

// Validaciones para el Registro 

const codigoAlumnoSchema = yup.string() 
    .required('El campo es obligatorio') 
    .matches(/^[0-9]+$/, 'Solo debe contener valores numéricos')

const passwordSchema = yup.string()
    .required('El campo es obligatorio')
    .min(8, 'Debe contener un mínimo de 8 caracteres')
    .max(16, 'Debe contener un máximo de 16 caracteres')
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/,
        'Debe contener por lo menos 1 minúscula, 1 mayúscula y 1 número' 
    )

const passwordConfirmationSchema = yup.string()
    .required('El campo es obligatorio')
    .oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir')

const registerSchema = yup.object().shape({
    apellidoFamiliar: yup.string().required('El campo es obligatorio'),
    codigoAlumno: codigoAlumnoSchema,
    email: yup.string().email('Email invalido').required('El campo es obligatorio'),
    password: passwordSchema,
    passwordConfirmation: passwordConfirmationSchema,
});

export default registerSchema;