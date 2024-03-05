import { Modal, ModalContent, ModalHeader, ModalBody, Button } from "@nextui-org/react"
import uploadIcon from '../../assets/icons/upload.png'
import { useState } from "react"
import SkeletonImage from "./SkeletonImage"
import Swal from "sweetalert2"
import axios from "axios"
import { useAuth } from "../../contexts/authContext"
import { useNavigate } from "react-router-dom"

const AbsencesModal = ({ isOpen, onOpenChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();
  const { _id } = user

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setImageUrl(URL.createObjectURL(event.target.files[0]));
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      await axios.put(`https://educlass-2024.onrender.com/api/attendance/update/?_id=${_id}`, formData)
      Swal.fire({
        icon: 'success',
        title: 'Justificación enviada',
        text: 'Se ha enviado tu justificación',
      })
      navigate('/asistencias')
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al enviar tu justificación',
      })
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} radius="md" size="xs" backdrop="blur" placement="center" disableAnimation={true}>
      <ModalContent>
        {() => (
          <>
            <form onSubmit={onFormSubmit}>
              <ModalHeader className="flex flex-col gap-1 text-left">Justificaciones de ausencias</ModalHeader>
              <ModalBody>
                <label htmlFor="justification" className="cursor-pointer relative inline-block">
                  Subir documento
                  <div className="w-[270px] h-[200px] bg-slate-200 rounded-large hover:opacity-70 mt-2 flex justify-center items-center">
                    <img src={uploadIcon} alt="upload icon" className="w-[50px] h-[50px]" />
                  </div>
                </label>
                <input id="justification" type="file" accept="image/*" className="hidden"
                  onChange={onFileChange} />

                {!imageUrl && <SkeletonImage />}

                {imageUrl && <img src={imageUrl} alt="justification" className="w-[270px] mt-2" />}

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