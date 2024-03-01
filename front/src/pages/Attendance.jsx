/* eslint-disable react-refresh/only-export-components */
import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import AttendanceChart from '../components/attendance/AttendanceChart';
import { data as mockData } from '../utils/data.js';
import AttendanceBlock from "../components/attendance/AttendanceBlock.jsx";
import MonthSelection from "../components/attendance/MonthSelection.jsx";
import { useState } from "react";
import axios from "axios";

export const loader = async () => {
  try {
    const { data } = await axios.get('https://educlass-2024.onrender.com/api/attendance');
    return data
  } catch (error) {
    return redirect('/')
  }
}
const Attendance = () => {
  const { data } = useLoaderData();
  console.log(data.document)
  const [month, setMonth] = useState("enero")
  const navigate = useNavigate();

  return (
    <div className="max-w-[900px] gap-2 flex flex-col px-4">
      {mockData.map((link) => (
        <AttendanceBlock key={link.name} title={link.name} total={link.acumulado_mensual} handleClick={() => navigate(link.link, { state: link })} />
      ))}

      <MonthSelection handleChange={(e) => setMonth(e.target.value)} month={month} data={mockData} />

      <AttendanceChart data={mockData} />
    </div>
  );
}

export default Attendance