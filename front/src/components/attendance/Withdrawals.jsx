import { Button, Input, Textarea } from "@nextui-org/react"
import Swal from "sweetalert2"

const Withdrawals = () => {
  const handleSend = () => {
    Swal.fire({
      icon: 'success',
      title: 'Retiro enviado',
      text: '¡Tu aviso se envió con éxito!',
    })
  }

  return (
    <div className="text-3xl h-screen w-full flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold text-left mt-10 p-4 text-[#280058]">Formulario de retiro</h1>
      <p className="text-sm p-4 text-[#280058]">Para retirar a tu hijo o hija, por favor completar los siguientes campos.</p>

      <form className="flex flex-col gap-4 justify-center items-center">
        <Input label="Nombre y apellido del responsable" placeholder="Ingresa tu nombre y apellido" type="text" required className="w-full px-4 py-2 focus:border-violet-500 focus:ring-violet-400 focus:outline-none focus:ring focus:ring-opacity-40" isRequired />

        <Input label="Documento / Pasaporte" placeholder="Ingresa tu documento o pasaporte" type="text" required className="w-full px-4 py-2 focus:border-violet-500 focus:ring-violet-400 focus:outline-none focus:ring focus:ring-opacity-40" isRequired />

        <Textarea label="Mensaje" placeholder="Indicar motivo del retiro" required className="w-full px-4 py-2 focus:border-violet-500 focus:ring-violet-400 focus:outline-none focus:ring focus:ring-opacity-40" isRequired />

        <Button className="w-[320px]" size="lg" color="secondary" onClick={handleSend}>Enviar aviso</Button>
      </form>
    </div>
  )
}

export default Withdrawals