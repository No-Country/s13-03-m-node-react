import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { registerValidationSchema } from '../schemas/registerValidationSchema.js';
import axios from 'axios';


const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios.get('https://educlass-2024.onrender.com/api/user')
        .then(response => {
            setUserData(response.data);
        })
        .catch(error => {
            console.error('Error fetching user data', error);
        });
  }, []);


const handleSubmit = (values) => {
  axios.put('https://educlass-2024.onrender.com/api/user/:email', values)
  .then(response => {
    console.log('Los datos se han actualizado correctamente'); 
  })
  .catch(error => {
    console.error('Error al actualizar los datos, intente nuevamente', error);
  });
};

const initialValues = {
  lastName: userData?.lastName || '',
  email: userData?.email || '',
  codigoAlumno: userData?.codigoAlumno || '',
  password: '',
};

  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <h1 className='text-2xl'>Perfil</h1>
      <div>
        {userData && (
          <Formik
          initialValues={initialValues}
          validationSchema={registerValidationSchema}
          onSubmit={handleSubmit}
        >
        {({ errors, touched }) => (
        <Form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm">Apellido de la familia</label>
              <Field type="text" name="apellidoFamiliar" placeholder="Ej: Montero" className="w-full px-4 py-2 border rounded-md focus:border-blue-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                {errors.lastName && touched.lastName && <div>{errors.lastName}</div>}
            </div>

            <div>
              <label className="block mb-2 text-sm">Código del alumno</label>
              <Field type="number" name="codigoAlumno" placeholder="Ej: 12345B" className="w-full px-4 py-2 border rounded-md focus:border-blue-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                {errors.codigoAlumno && touched.codigoAlumno && <div>{errors.codigoAlumno}</div>}
            </div>

            <div>
              <label className="block mb-2 text-sm">E-mail</label>
              <Field type="email" name="email" placeholder="Ej: jHcJt@gmail.com" className="w-full px-4 py-2 border rounded-md focus:border-blue-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                {errors.email && touched.email && <div>{errors.email}</div>}
            </div>

            <div>
              <label className="block mb-2 text-sm">Contraseña</label>
              <Field type="password" name="password" placeholder="Ej: ********" className="w-full px-4 py-2 border rounded-md focus:border-blue-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                {errors.password && touched.password && <div>{errors.password}</div>}
            </div>

            <button type="submit" className="block w-full p-3 text-center bg-violet-700 text-white rounded-2xl hover:bg-violet-800 drop-shadow-xl">
              Guardar cambios
            </button>
          </Form>
        )}
        </Formik>
        )}
      </div>
    </section>
  );
}

export default Profile;