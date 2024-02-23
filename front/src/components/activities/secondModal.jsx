import React, { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Link} from "@nextui-org/react";
import { IoMailOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";


function SecondModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
    } else {
      alert("Por favor, rellena todos los campos");
    }
  };

  return (
    <>
    <div className="p-4">
      <Button onPress={onOpen} color="primary" className="font-semibold">Confirmar autorización</Button>
    </div>
      
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
        disableAnimation={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Inicia sesión para confirmar la autorización</ModalHeader>

              <form onSubmit={handleSubmit}>
              <ModalBody>
                <div className="flex items-center gap-1">
                  <Input
                    autoFocus
                    required
                    label="Email"
                    placeholder="Ingresa tu Email"
                    variant="bordered"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <IoMailOutline className="text-3xl" />
                </div>
                
                <div className="flex items-center gap-1">
                  <Input
                    required
                    label="Contraseña"
                    placeholder="Ingresa tu Contraseña"
                    type="password"
                    variant="bordered"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <RiLockPasswordLine className="text-3xl" />
                </div>
                
                <div className="flex py-2 px-1 justify-between">
                  <Link color="secondary" href="#" size="sm">
                    Olvide mi contraseña
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="warning" variant="flat" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="secondary" onPress={onClose} type="submit">
                  Iniciar sesión
                </Button>
              </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default SecondModal;