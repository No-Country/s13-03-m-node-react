import { Radio, RadioGroup } from "@nextui-org/react"
import { useState } from "react";
import { countDaysInMonth, getCurrentMonth, getWorkingDaysSinceStartOfMonth, hasMonthPassed } from "../../utils/months";

const MonthSelection = ({ handleChange, month, data }) => {
  const [value, setValue] = useState("asistencias");
  const ausencias = data.data.document.filter((item) => item.status === 'ausencia').map((item) => item.date)
  const retiros = data.data.document.filter((item) => item.status === 'retiro').map((item) => item.date)
  const asistencias = hasMonthPassed(month) ? data.total_month - countDaysInMonth(ausencias, month) : getCurrentMonth() === month ? getWorkingDaysSinceStartOfMonth() - countDaysInMonth(ausencias, month) : 0

  const selectedDatesArray = value === "asistencias" ? asistencias : value === "ausencias" ? ausencias : retiros

  return (
    <>
      <h1 className="text-2xl font-semibold text-left mt-10 text-[#280058]">Historial</h1>
      <RadioGroup orientation="horizontal" className="flex justify-center items-center  gap-4 mt-4" value={value} onChange={(e) => setValue(e.target.value)}>
        <Radio size="sm" value="asistencias">Asistencias</Radio>
        <Radio size="sm" value="ausencias">Ausencias</Radio>
        <Radio size="sm" value="retiros">Retiros</Radio>
      </RadioGroup>
      <div className="border-1 rounded-md border-orange-300 shadow-md shadow-orange-300 p-2 m-2 flex justify-between bg-white">
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

      <div className="border-1 rounded-md border-orange-300 shadow-md shadow-orange-300 p-1 m-2 flex justify-between items-center mt-6">
        <div className="p-4 text-2xl w-10 font-bold flex text-center">
          <small>{month.toUpperCase()} 2024</small>
        </div>
        <div className="p-4 text-2xl">
          <small className="text-[#280058]">{value === 'asistencias' ? asistencias : countDaysInMonth(selectedDatesArray, month)} {value}</small>
        </div>
      </div>
    </>
  )
}

export default MonthSelection