import { useDisclosure } from "@nextui-org/react";
import AbsencesModal from "./AbsencesModal";

const AbsenceBlock = ({ date }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="border-1 rounded-md border-orange-300 shadow-md shadow-orange-300 mt-4 flex justify-between m-4">
        <div className="p-4 text-2xl">
          <small>{date}</small>
        </div>
        <div className="p-4 text-2xl">
          <small className="text-[#3FA3EB] font-medium cursor-pointer" onClick={onOpen}>Justificar</small>
          <AbsencesModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </div>
      </div>
    </>
  )
}

export default AbsenceBlock