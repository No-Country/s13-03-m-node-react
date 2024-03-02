import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import Swal from 'sweetalert2';
import { registerValidationSchema } from '../schemas/registerValidationSchema.js';

const Register = () => {
  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await axios.post('https://educlass-2024.onrender.com/api/auth/register', {
        apellidoFamiliar: values.apellidoFamiliar,
        codigoAlumno: values.codigoAlumno,
        email: values.email,
        password: values.password,
      });

      const token = response.data.token;
      localStorage.setItem('token', token);

      Swal.fire({
        icon: 'success',
        title: 'Tu cuenta se creo con éxito!',
        text: 'En unos minutos recibirás un correo electrónico para confirmar tu cuenta.',
      });

      } catch (error) {
        if (error.response) {
          setFieldError(''); 
          // completar errores
        } else {
          console.error('Hubo un error:', error);
        }
      }

      setSubmitting(false);
    };

    return (
      <section className="flex justify-center min-h-screen">
        <div className="hidden bg-cover lg:block lg:w-3/5" style={{backgroundImage: "url('src/assets/images/milad-fakurian-F93PQmh4krI-unsplash.webp')"}}></div>
         
        <div className='flex flex-col items-center justify-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5'>

          <h1 className="text-2xl text-center font-semibold">¡Te damos la bienvenida a Educlass!</h1>
          <p className="mt-4">Completa el siguiente formulario para crear tu cuenta.</p>
         
          <Formik
            initialValues={{ apellidoFamiliar: '', codigoAlumno: '', email: '', password: '' }}
            validationSchema={registerValidationSchema}
            onSubmit={handleSubmit}
          >
          <Form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm">Apellido de la familia</label>
                <Field type="text" name="apellidoFamiliar" placeholder="Ej: Montero" className="w-full px-4 py-2 border rounded-md focus:border-blue-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                <ErrorMessage name="apellidoFamiliar" component="div" className="text-red-600" />
              </div>
              <div>
                <label className="block mb-2 text-sm">Código del alumno</label>
                <Field type="number" name="codigoAlumno" placeholder="Ej: 12345B" className="w-full px-4 py-2 border rounded-md focus:border-blue-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                <ErrorMessage name="codigoAlumno" component="div" className="text-red-600" />
              </div>
              <div>
                <label className="block mb-2 text-sm">E-mail</label>
                <Field type="email" name="email" placeholder="Ingresa tu e-mail" className="w-full px-4 py-2 border rounded-md focus:border-blue-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                <ErrorMessage name="email" component="div" className="text-red-600" />
              </div>
              <div>
                <label className="block mb-2 text-sm">Contraseña</label>
                <Field type="password" name="password" placeholder="Ingresa tu contraseña" className="w-full px-4 py-2 border rounded-md focus:border-blue-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                <ErrorMessage name="password" component="div" className="text-red-600" />
              </div>
              <button type="submit" className="block w-full p-3 text-center bg-violet-700 text-white rounded-2xl hover:bg-violet-800 drop-shadow-xl">
                Registrarse
              </button>
            </Form>
          </Formik>
        </div>
      </section>
    );
};

export default Register;