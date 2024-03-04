import * as Yup from 'yup';

export const registerValidationSchema = Yup.object().shape({
    lastname: Yup.string().required('*Campo obligatorio'),
    email: Yup.string().email('Email invalido').required('*Campo obligatorio'),
    password: Yup.string()
      .required('*Campo obligatorio')
      .min(8, 'Debe tener al menos 8 caracteres')
      .max(16, 'Debe tener como máximo 16 caracteres')
      .matches(
        /^[0-9]{8,16}$/,
        'Solo debe contener valores numéricos'
    ),
    idstudents: Yup.string()
    .required('*Campo obligatorio')
});