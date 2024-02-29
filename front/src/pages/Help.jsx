import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

function Help() {

    const answers = [
        {
            key: "1",
            question: "pregunta 1",
            answer: "estamos viendo la respuesta a la pregunta 1"
        },
        {
            key: "2",
            question: "pregunta 2",
            answer: "estamos viendo la respuesta a la pregunta 2"
        },
        {
            key: "3",
            question: "pregunta 3",
            answer: "estamos viendo la respuesta a la pregunta 3"
        },
        {
            key: "4",
            question: "pregunta 4",
            answer: "estamos viendo la respuesta a la pregunta 4"
        }
    ]

    return (
        <section className="">
            <div className="flex flex-col items-center justify-center gap-3">
                <h1 className="text-2xl font-semibold text-gray-800 md:text-4xl">¿En que podemos ayudarte?</h1>
                <p className="mb-4 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-orange-600">Frequently asked questions</p>
            </div>
                <Accordion variant="splitted">
                    {answers.map(item => (
                        <AccordionItem key={item.key} aria-label={item.question} title={item.question}>
                            {item.answer}
                        </AccordionItem>
                    ))};
                </Accordion>
        </section>
    )
}

export default Help;