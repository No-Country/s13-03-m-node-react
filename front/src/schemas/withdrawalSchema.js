import * as Yup from 'yup';

export const initialValues = {
  studentid: "65de921dc4b8e7383f8d3acd",
  date: '23/02/2024',
  status: 'retiro',
  name: '',
  document: '',
  message: '',
};

export const withdrawalSchema = Yup.object().shape({
  name: Yup.string().required('*Campo obligatorio').matches(/^[a-zA-Z\s]*$/, 'Solo se aceptan letras').min(3, 'Debe contener al menos 3 caracteres').max(30, 'Debe contener menos de 30 caracteres'),
  document: Yup.string().required('*Campo obligatorio').min(8, 'Debe contener al menos 8 dígitos').max(12, 'Debe menos de 12 dígitos'),
  message: Yup.string().required('*Campo obligatorio').min(20, 'Debe contener al menos 20 caracteres').max(200, 'Debe contener menos de 200 caracteres'),
});