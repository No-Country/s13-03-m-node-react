import { useNavigate } from "react-router-dom";
import AttendanceChart from '../components/attendance/AttendanceChart';
import { data } from '../utils/data.js';
import AttendanceBlock from "../components/attendance/AttendanceBlock.jsx";
import MonthSelection from "../components/attendance/MonthSelection.jsx";
import { useState } from "react";

const Attendance = () => {
  const [month, setMonth] = useState("enero")
  const navigate = useNavigate();

  return (
    <div className="max-w-[900px] gap-2 flex flex-col px-2">
      {data.map((link) => (
        <AttendanceBlock key={link.name} title={link.name} total={link.acumulado_mensual} handleClick={() => navigate(link.link, { state: link })} />
      ))}

      <MonthSelection handleChange={(e) => setMonth(e.target.value)} month={month} data={data} />

      <AttendanceChart data={data} />
    </div>
  );
}

export default Attendance