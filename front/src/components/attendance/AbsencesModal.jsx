import { Modal, ModalContent, ModalHeader, ModalBody, Input } from "@nextui-org/react"
import uploadIcon from '../../assets/icons/upload.png'

const AbsencesModal = ({ isOpen, onOpenChange }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} radius="md" size="sm" backdrop="blur" placement="center" disableAnimation={true}>
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-center">Justificaciones de ausencias</ModalHeader>
            <ModalBody>
              <p>Desde mi computadora</p>
              <label htmlFor="justification" className="cursor-pointer relative inline-block">
                <div className="w-[100px] h-[100px] bg-slate-200 rounded-large hover:opacity-70">
                  <img src={uploadIcon} alt="upload icon" />
                </div>
              </label>
              <Input id="justification" type="file" accept="image/*" className="hidden" />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default AbsencesModal