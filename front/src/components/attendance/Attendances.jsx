import { useState } from "react"
import { useLocation } from "react-router-dom"

const Attendances = () => {
  const { state } = useLocation()
  const { enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre } = state
  const acumulado_anual = enero + febrero + marzo + abril + mayo + junio + julio + agosto + septiembre + octubre + noviembre + diciembre
  const [month, setMonth] = useState("enero")

  return (
    <div className="text-3xl h-screen w-full flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold text-center mt-10">Asistencias</h1>
      <div className="border-1 border-orange-500 rounded-md flex justify-between shadow-lg shadow-orange-500 m-2">
        <div className="p-4 text-2xl">
          <small>Febrero 2024</small>
        </div>
        <div className="p-4 border-y-secondary text-2xl">
          <small className="text-[#280058]">{state.febrero} asistencias</small>
        </div>
      </div>

      <div className="border-1 rounded-md border-orange-500 shadow-lg shadow-orange-500 mt-6 flex justify-between m-2">
        <div className="p-4 text-2xl">
          <small>Acumulado 2024</small>
        </div>
        <div className="p-4 text-2xl">
          <small className="text-[#280058]">{acumulado_anual} asistencias</small>
        </div>
      </div>

      <h1 className="text-2xl font-semibold text-center mt-10">Historial</h1>

      <div className="border-1 rounded-md border-orange-500 shadow-lg shadow-orange-500 p-1 m-2 flex justify-between bg-white">
        <select className="w-full text-xl bg-white" onChange={(e) => setMonth(e.target.value)} value={month}>
          <option value="enero">Enero</option>
          <option value="febrero">Febrero</option>
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

      <div className="border-1 rounded-md border-orange-500 shadow-lg shadow-orange-500 p-1 m-2 flex justify-between mt-6">
        <div className="p-4 text-2xl">
          <small>{month.toUpperCase()} 2024</small>
        </div>
        <div className="p-4 text-2xl">
          <small className="text-[#280058]">{state[month]} asistencias</small>
        </div>
      </div>
    </div>

  )
}

export default Attendances