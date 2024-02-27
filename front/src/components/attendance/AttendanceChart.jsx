import { Radio, RadioGroup } from "@nextui-org/react";
import { useState } from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AttendanceChart = ({ data }) => {
  const [value, setValue] = useState("year");

  return (
    <>
      <h1 className="text-2xl font-semibold text-left mt-10 text-[#280058]">Métricas</h1>
      <p className="text-[#280058]">Sigue las asistencias a tiempo real</p>
      <RadioGroup orientation="horizontal" className="flex justify-center items-center  gap-4 mt-4" value={value} onChange={(e) => setValue(e.target.value)}>
        <Radio size="sm" value="year">Acumulado Anual</Radio>
        <Radio size="sm" value="month">Acumulado Mensual</Radio>
      </RadioGroup>

      <ResponsiveContainer width="100%" height={300} minWidth={360}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={value === "year" ? "acumulado_anual" : "acumulado_mensual"} fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey={value === "year" ? "total_anual" : "total_mensual"} fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default AttendanceChart