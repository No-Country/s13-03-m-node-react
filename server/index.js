import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import router from '../server/src/routers/index.js';
import fileUpload from 'express-fileupload';
import { Server } from 'socket.io';
import { createServer } from 'http';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();

const server = createServer(app);
const io = new Server(server);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

io.on('connection', (socket) => {
    console.log('New client connected');

    const welcomeMessage = 'Hola, soy el chatbot de EduClass. ¿En qué te puedo ayudar?<br>Selecciona la opción para continuar:<br>1: Área Administrativa<br>2: Área Financiera<br>3: Despacho de alumnos';
    socket.emit('chat message', welcomeMessage);

    let conversacionActiva = false;
    let opcionSeleccionada;

    socket.on('chat message', (message) => {
        if (!conversacionActiva) {
            conversacionActiva = true;
            return;
        }

        let respuesta;
        if (!opcionSeleccionada) {
            // El cliente está seleccionando una opción
            switch (message.trim().toLowerCase()) {
                case '1':
                    respuesta = 'Area Administrativa: <br>A cargo: Natalia Morales. <br>Horario de atención: Lunes a Viernes de 9:00 - 12:00 hs. <br>Correo: adm@gmail.com. <br>Teléfono: (123)45678- <br> ¿Necesita otra información? Si o No';
                    opcionSeleccionada = '1';
                    break;
                case '2':
                    respuesta = 'Area Financiera: <br>A cargo: Marcos Perez. <br>Horario de atención: Lunes a Viernes de 9:00 - 13:00 hs. <br>Correo: finanzas@gmail.com. <br>Teléfono: (555)15678.<br> ¿Necesita otra información? Si o No';
                    opcionSeleccionada = '2';
                    break;
                case '3':
                    respuesta = 'Despacho de Alumnos: <br>A cargo: Julio Diaz. <br>Horario de atención: Lunes a Viernes de 9:00 - 15:00 hs. <br>Correo: despacho@gmail.com. Teléfono: (111) 45678.<br> ¿Necesita otra información? Si o No';
                    opcionSeleccionada = '3';
                    break;
                default:
                    respuesta = 'Lo siento, no entendí tu opción. Por favor, elige una opción válida.';
            }
        } else {
            // El cliente está respondiendo si necesita otra consulta
            switch (message.trim().toLowerCase()) {
                case 'si':
                    conversacionActiva = true; // Continuar la conversación
                    respuesta = welcomeMessage; // Mostrar nuevamente las opciones
                    opcionSeleccionada = null; // Reiniciar la opción seleccionada
                    break;
                case 'no':
                    conversacionActiva = false; // Finalizar la conversación
                    respuesta = '¡Gracias por usar el chatbot de EduClass!';
                    break;
                default:
                    respuesta = 'Lo siento, no entendí tu respuesta. ¿Necesita otra consulta? (responde Si o No)';
            }
        }

        socket.emit('chat message', respuesta);
    });

    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(fileUpload({ useTempFiles: true }));
app.use('/api', router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
