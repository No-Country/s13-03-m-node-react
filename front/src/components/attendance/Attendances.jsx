import { Checkbox, Radio, RadioGroup } from "@nextui-org/react"

const Attendances = () => {
  return (
    <div className="text-3xl h-screen w-full flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold text-center mt-10">Asistencias</h1>
      <div className="border-1 rounded-md border-gray-800 p-2 m-2 flex justify-between">
        <div className="p-4">
          <small>20/02/2024</small>
        </div>
        <div className="p-4">
          <small>Febrero</small>
        </div>
        <Checkbox size="md" />
      </div>

      <div className="border-1 rounded-md border-gray-800 p-2 m-2 flex justify-between">
        <div className="p-4">
          <small>21/02/2024</small>
        </div>
        <div className="p-4">
          <small>Febrero</small>
        </div>
        <Checkbox size="md" />
      </div>

      <div className="border-1 rounded-md border-gray-800 p-2 m-2 flex justify-between">
        <div className="p-4">
          <small>22/02/2024</small>
        </div>
        <div className="p-4">
          <small>Febrero</small>
        </div>
        <Checkbox size="md" />
      </div>

      <h1 className="text-2xl font-semibold text-center mt-10">Historial</h1>

      <div className="border-1 rounded-md border-gray-800 p-2 m-2 flex justify-between">
        <select>
          <option value="marzo">Marzo</option>
          <option value="abril">Abril</option>
          <option value="mayo">Mayo</option>
          <option value="junio">Junio</option>
          <option value="julio">Julio</option>
          <option value="agosto">Agosto</option>
          <option value="septiembre">Septiembre</option>
          <option value="octubre">Octubre</option>
          <option value="noviembre">Noviembre</option>
          <option value="diciembre">Diciembre</option>
        </select>
      </div>
    </div>
  )
}

export default Attendances