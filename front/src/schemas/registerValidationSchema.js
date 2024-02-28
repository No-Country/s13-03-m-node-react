import * as Yup from 'yup';

export const registerValidationSchema = Yup.object().shape({
    apellidoFamiliar: Yup.string().required('*Campo obligatorio'),
    codigoAlumno: Yup.string()
    .required('*Campo obligatorio')
    .matches(/^[0-9]+$/, 'Solo debe contener valores numéricos'),
    email: Yup.string().email('Email invalido').required('*Campo obligatorio'),
    password: Yup.string()
      .required('*Campo obligatorio')
      .min(8, 'Debe tener al menos 8 caracteres')
      .max(16, 'Debe tener como máximo 16 caracteres')
      .matches(
        /^[0-9]{8,16}$/,
        'Solo debe contener valores numéricos'
    ),
});