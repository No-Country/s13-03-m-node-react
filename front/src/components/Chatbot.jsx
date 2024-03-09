import React from 'react';
import ChatBot from 'react-simple-chatbot';

const EduChatbot = ({ isOpen, onClose }) => {
    const steps = [
        {
            id: '1',
            message: 'Hola, soy el chatbot de EduClass. Por favor indica tu nombre para continuar.',
            trigger: '2',
        },
        {
            id: '2',
            user: true,
            trigger: '3',
        },
        {
            id: '3',
            message: '{previousValue}, ¿en que puedo ayudarte?',
            trigger: '4',
        },
        {
            id: '4',
            options: [
                { value: 1, label: '1. Area Administrativa', trigger: '5' },
                { value: 2, label: '2. Area Financiera', trigger: '6' },
                { value: 3, label: '3. Despacho de Alumnos', trigger: '7' },
            ],
        },
        {
            id: '5',
            message: 'Area Administrativa: A cargo: Natalia Morales. Horario de atención: Lunes a Viernes de 9:00 - 12:00 hs. Correo: adm@gmail.com. Teléfono: (123)45678.',
            trigger: '8',
        },
        {
            id: '6',
            message: 'Area Financiera: A cargo: Marcos Perez. Horario de atención: Lunes a Viernes de 9:00 - 13:00 hs. Correo: finanzas@gmail.com. Teléfono: (555)15678.',
            trigger: '8',
        },
        {
            id: '7',
            message: 'Despacho de Alumnos: A cargo: Julio Diaz. Horario de atención: Lunes a Viernes de 9:00 - 15:00 hs. Correo: despacho@gmail.com. Teléfono: (111)45678.',
            trigger: '8',
        },
        {
            id: '8',
            options: [
                { value: 1, label: 'Volver al Menu', trigger: '4' },
                { value: 2, label: 'Finalizar', trigger: '9' },
            ]
        },
        {
            id: '9',
            message: 'Gracias por utilizar nuestro chatbot. ¡Hasta pronto!👋',
            end: true,
        },
    ];

    return (
        <div className={`absolute top-12 right-14 p-4 ${isOpen ? 'block' : 'hidden'}`}>
            <ChatBot
                steps={steps}
                opened={isOpen}
                toggleFloating={() => { }}
                handleEnd={() => onClose()}
            />
        </div>
    );
};

export default EduChatbot;