import { Button, Input, Textarea } from "@nextui-org/react"
import { useState } from "react"
import { useLocation } from "react-router-dom"

const Withdrawals = () => {
  const { state } = useLocation()
  // const { enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre } = state
  // const acumulado_anual = enero + febrero + marzo + abril + mayo + junio + julio + agosto + septiembre + octubre + noviembre + diciembre
  const [month, setMonth] = useState("enero")

  return (
    <div className="text-3xl h-screen w-full flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold text-center mt-10">Retiros</h1>
      <p className="text-sm p-4">Para retirar a tu hijo o hija, completa el siguiente formulario, por favor. </p>

      <form className="flex flex-col gap-4 justify-center items-center">
        <Input label="Nombre y apellido del padre" type="text" required className="w-full px-4 py-2 focus:border-violet-500 focus:ring-violet-400 focus:outline-none focus:ring focus:ring-opacity-40" isRequired />

        <Input label="Identificación" placeholder="Ingresar DNI del tutor" type="text" required className="w-full px-4 py-2 focus:border-violet-500 focus:ring-violet-400 focus:outline-none focus:ring focus:ring-opacity-40" isRequired />

        <Textarea label="Mensaje" placeholder="Indicar motivo del retiro" required className="w-full px-4 py-2 focus:border-violet-500 focus:ring-violet-400 focus:outline-none focus:ring focus:ring-opacity-40" isRequired />

        <Button className="w-[200px]" size="lg" color="secondary">Enviar aviso</Button>
      </form>

      <h1 className="text-2xl font-semibold text-center mt-10">Historial</h1>
      {/* <RadioGroup orientation="horizontal" className="flex justify-center items-center  gap-1 mt-4 ">
        <Radio size="md" value="mes">Mes pasado</Radio>
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
      </div> */}
      <div className="border-1 rounded-md border-gray-800 p-2 m-2 flex justify-between">
        <select className="w-full" onChange={(e) => setMonth(e.target.value)} value={month}>
          <option value="enero">1 - Enero</option>
          <option value="febrero">2 - Febrero</option>
          <option value="marzo">3 - Marzo</option>
          <option value="abril">4 - Abril</option>
          <option value="mayo">5 - Mayo</option>
          <option value="junio">6 - Junio</option>
          <option value="julio">7 - Julio</option>
          <option value="agosto">8 - Agosto</option>
          <option value="septiembre">9 - Septiembre</option>
          <option value="octubre">10 - Octubre</option>
          <option value="noviembre">11 - Noviembre</option>
          <option value="diciembre">12 - Diciembre</option>
        </select>
      </div>

      <div className="border-1 rounded-md border-gray-800 p-2 m-2 flex justify-between">
        <div className="p-4">
          <small>{month.toUpperCase()} 2024</small>
        </div>
        <div className="p-4">
          <small>{state[month]} retiro{state[month] === 1 ? "" : "s"}</small>
        </div>
      </div>
    </div>
  )
}

export default Withdrawals