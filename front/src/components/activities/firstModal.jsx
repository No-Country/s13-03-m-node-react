import React, { useState } from 'react';
import { Modal, ModalContent, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import SecondModal from "./secondModal";

function FirstModal() {
    const [backdrop, setBackdrop] = React.useState('blur');
    const backdrops = ["blur"];
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

    const [modalData, setModalData] = useState({
        title1: "Titulo de la salida",
        text1: "Vamos a dar un paseo a la montaña.",
        title2: "Horario de la salida",
        text2: "Viernes de 9:00 a 12:00 hs.",
        title3: "¿Que se necesita?",
        text3: "Zapatillas cómodas, agua, comida y gorra.",
        title4: "Autorización",
        text4: "Autorizo a mi estudiante a cargo a dar esta salida.",
    });

    const handleOpen = (backdrop) => {
        setBackdrop(backdrop)
        onOpen();
    };

    const handleAutorizar = () => {
        setIsSecondModalOpen(true);
        onClose();  
    };

    return (
        <>
          <div className="flex p-4">
            {backdrops.map((b) => (
              <Button  
                variant="flat" 
                color="primary" 
                onPress={() => handleOpen(b)}
                className="font-semibold text-base"
              >
                Detalle de la actividad
              </Button>
            ))}  
          </div>
          <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose} placement="top-center" disableAnimation={true} >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalBody className='text-left'>
                    <h2 className="text-center text-xl font-semibold">{modalData.title1}</h2>
                    <p>{modalData.text1}</p>
                    <h2 className="text-center text-xl font-semibold">{modalData.title2}</h2>
                    <p>{modalData.text2}</p>
                    <h2 className="text-center text-xl font-semibold">{modalData.title3}</h2>
                    <p>{modalData.text3}</p>
                    <h2 className="text-center text-xl font-semibold">{modalData.title4}</h2>
                    <p>{modalData.text4}</p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onClick={onClose}>
                      Rechazar
                    </Button>
                    <Button color="primary" onClick={handleAutorizar}>
                      Autorizar
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>

          {isSecondModalOpen && <SecondModal />}
        </>
    );
}

export default FirstModal;