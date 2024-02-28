import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import Swal from 'sweetalert2';
import { loginValidationSchema } from '../schemas/loginValidationSchema.js';

const Login = () => {
  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await axios.post('https://educlass-2024.onrender.com/api/auth/login', {
        email: values.email,
        password: values.password,
      });

      const token = response.data.token;
      localStorage.setItem('token', token);

      // const verifyResponse = await axios.get('https://tu-backend.com/verify-user', {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // });

      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso!',
      });

    } catch (error) {
      if (error.response && error.response.status === 401) {
        setFieldError('password', 'Credenciales incorrectas o invalidas');
      } else {
        console.error('Hubo un error:', error);
      }
    }
    setSubmitting(false);
  };


  return (
    <section className="flex justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className='flex justify-center'>
            <img src="public/images/logo_educlass.webp" alt="logo educlass" className="object-center border-8 rounded-3xl border-blue-400 w-[150px]" />
          </div>
          <div>
            <h1 className="text-2xl text-center font-semibold mt-2">¡Te damos la bienvenida a Educlass!</h1>
            <p className="mt-4 text-center">Sigue el progreso de tus hijos o hijas.</p>
          </div>
        
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm">Email</label>
              <Field type="email" name="email" placeholder="Ingresa tu e-mail" className="w-full px-4 py-2 border rounded-md focus:border-blue-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              <ErrorMessage name="email" component="div" className="text-red-600" />
            </div>
            <div>
              <label className="block mb-2 text-sm">Contraseña</label>
              <Field type="password" name="password" placeholder="Ingresa tu contraseña" className="w-full px-4 py-2 border rounded-md focus:border-blue-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              <ErrorMessage name="password" component="div" className="text-red-600" />
            </div>
            <div>
              <Field type="checkbox" name="remember" />
              <label className="mb-2 ml-2 text-sm">Recordarme</label>
            </div>
            <button type="submit" className="block w-full p-3 text-center bg-violet-700 text-white rounded-2xl hover:bg-violet-800 drop-shadow-xl">
              Iniciar Sesión
            </button>
          </Form>
        </Formik>
      </div>
      
      <div className="hidden bg-cover lg:block lg:w-3/5" style={{ backgroundImage: "url('/images/milad-fakurian-0_8gAoFrzbw-unsplash.webp')" }}></div>

    </section>
  );
};

export default Login;