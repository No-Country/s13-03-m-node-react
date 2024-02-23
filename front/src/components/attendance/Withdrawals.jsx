import { Button, Checkbox, Input, Radio, RadioGroup, Textarea } from "@nextui-org/react"

const Withdrawals = () => {
  return (
    <div className="text-3xl h-screen w-full flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold text-center mt-10">Retiros</h1>
      <p className="text-sm p-4">Para retirar a tu hijo o hija, completa el siguiente formulario, por favor. </p>

      <form className="flex flex-col gap-4 justify-center items-center">
        <Input label="Nombre y apellido del padre" type="text" required className="w-full px-4 py-2 focus:border-violet-500 focus:ring-violet-400 focus:outline-none focus:ring focus:ring-opacity-40" isRequired />

        <Input label="Identificación" type="text" required className="w-full px-4 py-2 focus:border-violet-500 focus:ring-violet-400 focus:outline-none focus:ring focus:ring-opacity-40" isRequired />

        <Textarea label="Mensaje" placeholder="Indicar motivo del retiro" required className="w-full px-4 py-2 focus:border-violet-500 focus:ring-violet-400 focus:outline-none focus:ring focus:ring-opacity-40" isRequired />

        <Button className="w-[200px]" size="lg" color="secondary">Enviar aviso</Button>
      </form>

      <h1 className="text-2xl font-semibold text-center mt-10">Historial</h1>
      <RadioGroup orientation="horizontal" className="flex justify-center items-center  gap-1 mt-4 ">
        <Radio size="md" value="mes">Mes pasada</Radio>
        <Radio size="md" value="week">Semana pasada</Radio>
        <Radio size="md" value="all">Todo</Radio>
      </RadioGroup>

      <div className="border-1 rounded-md border-gray-800 p-2 m-2 flex justify-between">
        <div className="p-4">
          <small>22/02/2024</small>
        </div>
        <div className="p-4">
          <small>Febrero</small>
        </div>
        <Checkbox size="md" />
      </div>
    </div>
  )
}

export default Withdrawals