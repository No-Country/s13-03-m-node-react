import { Button, Checkbox, Radio, RadioGroup, useDisclosure } from "@nextui-org/react"
import AbsencesModal from "./AbsencesModal";

const Absences = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="text-3xl h-screen w-full flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold text-center mt-10">Ausencias</h1>
      <div className="border-1 rounded-md border-gray-800 p-2 m-2 flex justify-between">
        <div className="p-4">
          <small>14/02/2024</small>
        </div>
        <div className="p-4">
          <small>Febrero</small>
        </div>
        <Checkbox size="md" />
      </div>
      <div className="text-right mr-4">
        <Button size="lg" color="secondary" onPress={onOpen}>Justificar</Button>
        <AbsencesModal isOpen={isOpen} onOpenChange={onOpenChange} />
      </div>

      <h1 className="text-2xl font-semibold text-center mt-10">Historial</h1>
      <RadioGroup orientation="horizontal" className="flex justify-center items-center  gap-1 mt-4 ">
        <Radio size="md" value="mes">Mes pasada</Radio>
        <Radio size="md" value="week">Semana pasada</Radio>
        <Radio size="md" value="all">Todo</Radio>
      </RadioGroup>

      <div className="border-1 rounded-md border-gray-800 p-2 m-2 flex justify-between">
        <div className="p-4">
          <small>14/02/2024</small>
        </div>
        <div className="p-4">
          <small>Febrero</small>
        </div>
        <Checkbox size="md" />
      </div>
    </div>
  )
}

export default Absences