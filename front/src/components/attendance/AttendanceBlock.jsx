import { Button } from "@nextui-org/react"

const AttendanceBlock = ({ title, total, handleClick }) => {

  return (
    <>
      <h1 className="text-2xl font-semibold text-left mt-8 text-[#280058]">{title}</h1>

      <div id="attendance-block" className="border-1 rounded-md border-orange-300 shadow-md shadow-orange-300 mt-4 flex justify-between bg-[#FFFEF9]">
        <div className="p-4 text-sm text-[#280058]">
          <small>Acumulado 2024</small>
        </div>
        <div className="p-4 text-sm">
          <small className="text-[#280058]">{total} {title.toLowerCase()}</small>
        </div>
      </div>
      {title !== 'Asistencias' && <Button onClick={handleClick} variant="light" color="secondary" size="lg" className="mt-3 self-end font-semibold">{title === 'Ausencias' ? "Justificar" : "Ir al formulario"}</Button>
      }
    </>
  )
}

export default AttendanceBlock