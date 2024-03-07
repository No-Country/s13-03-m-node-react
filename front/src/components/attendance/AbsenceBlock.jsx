import { useDisclosure } from "@nextui-org/react";
import AbsencesModal from "./AbsencesModal";
import { useLocation } from "react-router-dom"


const AbsenceBlock = ({ date }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { state } = useLocation()
  const id = state.ausenciasData.filter((item) => item.date === date).map((item) => item._id)[0]

  return (
    <>
      <div className="border-1 rounded-md border-orange-200 shadow-md shadow-orange-200 mt-4 flex justify-between m-4">
        <div className="p-4 text-2xl text-[#280058]">
          <small>{date}</small>
        </div>
        <div className="p-4 text-2xl">
          <small className="text-[#3FA3EB] font-medium cursor-pointer" onClick={onOpen}>Justificar</small>
          <AbsencesModal isOpen={isOpen} onOpenChange={onOpenChange} id={id} />
        </div>
      </div>
    </>
  )
}

export default AbsenceBlock