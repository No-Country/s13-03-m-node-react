import { Button } from "@nextui-org/react"

const AttendanceBlock = ({ title, total, handleClick }) => {

  return (
    <>
      <h1 className="text-2xl font-semibold text-left text-[#280058] mt-4">{title}</h1>

      <div className="border-1 rounded-md border-orange-200 shadow-md shadow-orange-200 mt-4 flex justify-between bg-[#FFFEF9]">
        <div className="p-4 text-xl text-[#280058]">
          <small>Acumulado 2024</small>
        </div>
        <div className="p-4 text-xl">
          <small className="text-[#280058]">{total} {title.toLowerCase()}</small>
        </div>
      </div>
      {title !== 'Asistencias' && <Button onClick={handleClick} variant="light" size="lg" className="self-end font-medium text-[#3FA3EB]">{title === 'Ausencias' ? "Justificar" : "Ir al formulario"}</Button>
      }
    </>
  )
}

export default AttendanceBlock