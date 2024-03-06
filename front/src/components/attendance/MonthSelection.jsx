import { Radio, RadioGroup } from "@nextui-org/react"
import { useState } from "react";
import { countDaysInMonth } from "../../utils/months";

const MonthSelection = ({ handleChange, month, asistencias, ausencias, retiros }) => {
  const [value, setValue] = useState("asistencias");
  const selectedDatesArray = value === "asistencias" ? asistencias : value === "ausencias" ? ausencias : retiros

  return (
    <>
      <h1 className="text-2xl font-semibold text-left mt-9 text-[#280058]">Historial</h1>
      <RadioGroup orientation="horizontal" className="flex justify-between items-center mt-4" value={value} onChange={(e) => setValue(e.target.value)}>
        <Radio className="px-2" color="warning" size="sm" value="asistencias">Asistencias</Radio>
        <Radio className="px-2" color="warning" size="sm" value="ausencias">Ausencias</Radio>
        <Radio className="px-2" color="warning" size="sm" value="retiros">Retiros</Radio>
      </RadioGroup>
      <div className="border-1 rounded-md border-orange-300 shadow-md shadow-orange-300 p-2 m-2 flex justify-between bg-white h-11">
        <select className="w-full text-xl bg-white" onChange={handleChange} value={month}>
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

      <div className="border-1 rounded-md border-orange-300 shadow-md shadow-orange-300 m-2 flex justify-between items-center mt-4 h-11 text-[#280058]">
        <div className="p-4 text-2xl font-bold flex text-center">
          <small>{month.toUpperCase().slice(0, 3)} - 2024</small>
        </div>
        <div className="p-4 text-2xl">
          <small>{value === 'asistencias' ? asistencias : countDaysInMonth(selectedDatesArray, month)} {value}</small>
        </div>
      </div>
    </>
  )
}

export default MonthSelection