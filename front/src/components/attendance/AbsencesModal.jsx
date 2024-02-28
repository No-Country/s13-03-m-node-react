import { Modal, ModalContent, ModalHeader, ModalBody, Input, Button } from "@nextui-org/react"
import uploadIcon from '../../assets/icons/upload.png'
import { useState } from "react"
import SkeletonImage from "./SkeletonImage"
import Swal from "sweetalert2"

const AbsencesModal = ({ isOpen, onOpenChange }) => {
  const [justification, setJustification] = useState(null)

  const handleSend = () => {
    onOpenChange(false)
    Swal.fire({
      icon: 'success',
      title: 'Justificación enviada',
      text: 'Se ha enviado tu justificación',
    })
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} radius="md" size="xs" backdrop="blur" placement="center" disableAnimation={true}>
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-left">Justificaciones de ausencias</ModalHeader>
            <ModalBody>
              <label htmlFor="justification" className="cursor-pointer relative inline-block">
                Subir documento
                <div className="w-[270px] h-[200px] bg-slate-200 rounded-large hover:opacity-70 mt-2 flex justify-center items-center">
                  <img src={uploadIcon} alt="upload icon" className="w-[50px] h-[50px]" />
                </div>
              </label>
              <Input id="justification" type="file" accept="image/*" className="hidden"
                onChange={(e) => setJustification(URL.createObjectURL(e.target.files[0]))} />

              {!justification && <SkeletonImage />}

              {justification && <img src={justification} alt="justification" className="w-[270px] mt-2" id="justification" />}

              <Button className="w-full mt-3 shadow-inner bg-[#7222D3]" color="secondary" onClick={handleSend}>Enviar</Button>
            </ModalBody>
          </>
        )}

      </ModalContent>
    </Modal>
  )
}

export default AbsencesModal