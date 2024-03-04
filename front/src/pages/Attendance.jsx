/* eslint-disable react-refresh/only-export-components */
import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import AttendanceChart from '../components/attendance/AttendanceChart';
import { data as mockData } from '../utils/data.js';
import AttendanceBlock from "../components/attendance/AttendanceBlock.jsx";
import MonthSelection from "../components/attendance/MonthSelection.jsx";
import { useState } from "react";
import axios from "axios";
import { countDaysInMonth, getCurrentMonth, getWorkingDaysSinceStartOfMonth, hasMonthPassed, getTotalAsistencias } from "../utils/months";


export const loader = async () => {
  try {
    const data = await axios.get('https://educlass-2024.onrender.com/api/attendance');
    return data
  } catch (error) {
    return redirect('/')
  }
}
const Attendance = () => {
  const { data } = useLoaderData();
  const [month, setMonth] = useState("enero")
  const navigate = useNavigate();

  const ausencias = data.data.document.filter((item) => item.status === 'ausencia').map((item) => item.date)
  const retiros = data.data.document.filter((item) => item.status === 'retiro').map((item) => item.date)
  const asistencias = hasMonthPassed(month) ? data.total_month - countDaysInMonth(ausencias, month) : getCurrentMonth() === month ? getWorkingDaysSinceStartOfMonth() - countDaysInMonth(ausencias, month) : 0

  const chartData = [
    {
      name: 'Asistencias',
      total_anual: getTotalAsistencias(data.total_month),
      acumulado_anual: getTotalAsistencias(data.total_month) - ausencias.length,
      total_mensual: getWorkingDaysSinceStartOfMonth(),
      acumulado_mensual: getWorkingDaysSinceStartOfMonth() - countDaysInMonth(ausencias, getCurrentMonth()),
    },
    {
      name: 'Ausencias',
      acumulado_anual: ausencias.length,
      acumulado_mensual: countDaysInMonth(ausencias, getCurrentMonth()),
      total_anual: 10,
    },
    {
      name: 'Retiros',
      acumulado_anual: retiros.length,
      acumulado_mensual: countDaysInMonth(retiros, getCurrentMonth()),
    }
  ]

  return (
    <div className="max-w-[900px] gap-2 flex flex-col px-4">
      {mockData.map((link) => (
        <AttendanceBlock key={link.name} title={link.name} total={link.acumulado_mensual} handleClick={() => navigate(link.link, { state: link })} />
      ))}

      <MonthSelection handleChange={(e) => setMonth(e.target.value)} month={month} asistencias={asistencias} ausencias={ausencias} retiros={retiros} />

      <AttendanceChart chartData={chartData} />
    </div>
  );
}

export default Attendance