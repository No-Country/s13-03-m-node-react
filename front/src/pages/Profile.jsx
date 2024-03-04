import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { registerValidationSchema } from '../schemas/registerValidationSchema.js';
import axios from 'axios';
import { useAuth } from '../contexts/authContext.jsx';


const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [updatedUserData, setUpdatedUserData] = useState(null);
  const { user } = useAuth();
  const [ userEmail, setUserEmail ] = useState('');

  useEffect(() => {
    if (user) {
      setUserEmail(user.email);
      axios.get(`https://educlass-2024.onrender.com/api/user/${user.email}`)
      .then(response => {
        setUserData(response.data);
        console.log('Datos del usuario cargados correctamente:', response.data);
      })
      .catch(error => {
        console.error('Error fetching user data', error);
      });
    }
}, [user]);

  useEffect(() => {
    if (userData) {
      const initialValues = {
        lastname: userData?.lastname || '',
        email: userData?.email || '',
        idstudents: userData?.idstudents || '',
        password: '',
      };
      console.log('Initial values:', initialValues);
    }
  }, [userData]);
   

const handleUpdateUser = (values) => {
  if (user) {
    const updatedData = { ...userData, ...values }
    setUpdatedUserData(updatedData);

    axios.put(`https://educlass-2024.onrender.com/api/user/${user.email}`, updatedUserData) 
    .then(response => {
      console.log('Los datos se han actualizado correctamente');
      setUserData(updatedData); 
    })
    .catch(error => {
      console.error('Error al actualizar los datos, intente nuevamente', error);
    });
  };
}

  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <h1 className='text-2xl'>Perfil</h1>
      <div>
        {userData && (
          <Formik
          initialValues={initialValues}
          validationSchema={registerValidationSchema}
          onSubmit={handleUpdateUser}
        >
        {({ errors, touched }) => (
        <Form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm">Apellido de la familia</label>
              <Field type="text" name="lastname" placeholder="Ej: Montero" className="w-full px-4 py-2 border rounded-md focus:border-blue-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                {errors.lastname && touched.lastname && <div>{errors.lastname}</div>}
            </div>

            <div>
              <label className="block mb-2 text-sm">Código del alumno</label>
              <Field type="number" name="idstudents" placeholder="Ej: 12345B" className="w-full px-4 py-2 border rounded-md focus:border-blue-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                {errors.idstudents && touched.idstudents && <div>{errors.idstudents}</div>}
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

export default UserProfile;