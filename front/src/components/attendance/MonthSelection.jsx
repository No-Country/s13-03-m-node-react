import { Radio, RadioGroup } from "@nextui-org/react"
import { useState } from "react";

const MonthSelection = ({ handleChange, month, data }) => {
  const [value, setValue] = useState("asistencias");
  const selectedValue = value === "asistencias" ? 0 : value === "ausencias" ? 1 : 2;

  return (
    <>
      <h1 className="text-2xl font-semibold text-left mt-10 text-[#280058]">Historial</h1>
      <RadioGroup orientation="horizontal" className="flex justify-center items-center  gap-4 mt-4" value={value} onChange={(e) => setValue(e.target.value)}>
        <Radio size="sm" value="asistencias">Asistencias</Radio>
        <Radio size="sm" value="ausencias">Ausencias</Radio>
        <Radio size="sm" value="retiros">Retiros</Radio>
      </RadioGroup>
      <div className="border-1 rounded-md border-orange-500 shadow-lg shadow-orange-500 p-2 m-2 flex justify-between bg-white">
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

      <div className="border-1 rounded-md border-orange-500 shadow-lg shadow-orange-500 p-1 m-2 flex justify-between items-center mt-6">
        <div className="p-4 text-2xl w-10 font-bold flex text-center">
          <small>{month.toUpperCase()} 2024</small>
        </div>
        <div className="p-4 text-2xl">
          <small className="text-[#280058]">{data[selectedValue][month]} {value}</small>
        </div>
      </div>
    </>
  )
}

export default MonthSelection