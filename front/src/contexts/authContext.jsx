import React, { useState, createContext, useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const loginUser = async (email, password) => {
        try {
            const response = await axios.post('https://educlass-2024.onrender.com/api/auth/login', {
                email,
                password,
            });

            const { user, token } = response.data;
            localStorage.setItem('token', token);

            console.log(token, user);

            setUser(user);

            Swal.fire({
                icon: 'success',
                title: 'Inicio de sesión exitoso!',
            });


        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.error('Credenciales incorrectas o invalidas');
            } else {
                console.error('Hubo un error:', error);
            }
        }
    };

    const logoutUser = () => {
        setUser(null);
        localStorage.removeItem('token');
    };


    const registerUser = async (lastname, email, password, idstudents) => {
        try {
            const response = await axios.post('https://educlass-2024.onrender.com/api/auth/register', {
                lastname,
                email,
                password,
                idstudents,
            });

            const token = response.data.token;
            localStorage.setItem('token', token);

            setUser({ email });

            Swal.fire({
                icon: 'success',
                title: 'Tu cuenta se creo con éxito!',
                text: 'En unos minutos recibirás un correo electrónico para confirmar tu cuenta.',
            });

        } catch (error) {
            if (error.response) {
                const errorMessage = error.response.data.message || 'Hubo un error al crear tu cuenta';
                console.error('errorMessage');

                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: errorMessage
                });
            } else {
                console.error('Hubo un error:', error);

                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.'
                });
            }
        }
    };

    return (
        <AuthContext.Provider value={{ user, loginUser, logoutUser, registerUser }}>
            {children}
        </AuthContext.Provider>
    );
};