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
      <div className="border-1 rounded-md border-gray-800 p-2 m-2 flex justify-between">
        <div className="p-4">
          <small>Febrero 2024</small>
        </div>
        <div className="p-4">
          <small>{state.febrero} asistencias</small>
        </div>
      </div>

      <div className="border-1 rounded-md border-gray-800 p-2 m-2 flex justify-between">
        <div className="p-4">
          <small>Acumulado 2024</small>
        </div>
        <div className="p-4">
          <small>{acumulado_anual} asistencias</small>
        </div>
      </div>

      <h1 className="text-2xl font-semibold text-center mt-10">Historial</h1>

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
          <small>{state[month]} asistencias</small>
        </div>
      </div>
    </div>

  )
}

export default Attendances