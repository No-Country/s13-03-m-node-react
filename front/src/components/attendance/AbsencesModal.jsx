import { Modal, ModalContent, ModalHeader, ModalBody, Button } from "@nextui-org/react"
import uploadIcon from '../../assets/icons/upload.png'
import { useState } from "react"
import SkeletonImage from "./SkeletonImage"
import Swal from "sweetalert2"
import axios from "axios"

const AbsencesModal = ({ isOpen, onOpenChange }) => {
  const [justification, setJustification] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    formData.append('justification', justification)
    onOpenChange(false)
    console.log(justification)
    console.log(formData)

    try {
      await axios.post('https://educlass-2024.onrender.com/api/attendance', formData)
      console.log(justification)
      console.log(formData)
      Swal.fire({
        icon: 'success',
        title: 'Justificación enviada',
        text: 'Se ha enviado tu justificación',
      })
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al enviar tu justificación',
      })
    }
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} radius="md" size="xs" backdrop="blur" placement="center" disableAnimation={true}>
      <ModalContent>
        {() => (
          <>
            <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
              <ModalHeader className="flex flex-col gap-1 text-left">Justificaciones de ausencias</ModalHeader>
              <ModalBody>
                <label htmlFor="justification" className="cursor-pointer relative inline-block">
                  Subir documento
                  <div className="w-[270px] h-[200px] bg-slate-200 rounded-large hover:opacity-70 mt-2 flex justify-center items-center">
                    <img src={uploadIcon} alt="upload icon" className="w-[50px] h-[50px]" />
                  </div>
                </label>
                <input id="justification" name="justification" type="file" accept="image/*" className="hidden"
                  onChange={(e) => setJustification(URL.createObjectURL(e.target.files[0]))} />

                {!justification && <SkeletonImage />}

                {justification && <img src={justification} alt="justification" className="w-[270px] mt-2" id="justification" />}

                <Button className="w-full mt-3 shadow-inner bg-[#7222D3]" color="secondary" type="submit">Enviar</Button>
              </ModalBody>
            </form>
          </>
        )}

      </ModalContent>
    </Modal>
  )
}

export default AbsencesModal