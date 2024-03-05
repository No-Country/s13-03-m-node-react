import React, {useState} from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import ChatbotIcon from "../components/ChatbotIcon";
import EduChatbot from "../components/Chatbot";


function Help() {
    const [chatbotOpen, setChatbotOpen] = useState(false);

    const handleToggleChatbot = () => {
        setChatbotOpen(!chatbotOpen);
    };

    const answers = [
        {
            key: "1",
            question: "¿Cómo puedo ver las calificaciones?",
            answer: "Los exámenes de cada materia del grado que se encuentra cursando el estudiante están en la sección de Calificaciones."
        },
        {
            key: "2",
            question: "¿Cómo puedo comunicarme con alguna área en especifico?",
            answer: "Los contactos de la institución están disponibles en el Chatbot. Diríjase a la sección Ayuda, y clique en el icono de Chatbot para comenzar con su consulta."
        },
        {
            key: "3",
            question: "¿Como puedo avisar de un retiro?",
            answer: "Los retiros se gestionan desde la sección Asistencias, allí deberá completar el formulario de retiro y enviarlo para que sea procesado por la institución."
        },
        {
            key: "4",
            question: "¿Donde puedo ver la tarea del estudiante?",
            answer: "Lo sentimos, por el momento esa funcionalidad no se encuentra disponible. Pronto se agregará. Pero cada grado cuenta con una sección de Notificaciones."
        },
        {
            key: "5",
            question: "¿Donde puedo ver las asistencias del estudiante?",
            answer: "Se encuentran en la sección Asistencias, en donde se puede acceder a un seguimiento detallado."
        }
    ];

    return (
        <>
        <section className="mb-16">
            <div className="flex flex-col items-center justify-center gap-3">
                <h1 className="text-2xl font-semibold p-1 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-orange-400">Resuelve tus dudas</h1>
            </div>
                <Accordion variant="splitted">
                    {answers.map(item => (
                        <AccordionItem key={item.key} aria-label={item.question} title={item.question} className="border border-amber-300 drop-shadow-sm mb-3">
                            {item.answer}
                        </AccordionItem>
                    ))};
                </Accordion>
        </section>

        <section className="p-4"> 
            <ChatbotIcon onClick={handleToggleChatbot} />
            <EduChatbot isOpen={chatbotOpen} onClose={() => setChatbotOpen(false)} />
        </section>
        </>
    );
}

export default Help;