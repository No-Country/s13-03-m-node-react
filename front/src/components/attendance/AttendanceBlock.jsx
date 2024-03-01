import { Button } from "@nextui-org/react"

const AttendanceBlock = ({ title, total, handleClick }) => {

  return (
    <>
      <h1 className="text-2xl font-semibold text-left mt-8 text-[#280058]">{title}</h1>

      <div className="border-1 rounded-md border-orange-300 shadow-md shadow-orange-300 mt-4 flex justify-between">
        <div className="p-4 text-2xl">
          <small>Acumulado 2024</small>
        </div>
        <div className="p-4 text-2xl">
          <small className="text-[#280058]">{total} {title.toLowerCase()}</small>
        </div>
      </div>
      {title !== 'Asistencias' && <Button onClick={handleClick} variant="ghost" color="secondary" size="lg" className="mt-3 self-end font-semibold">{title === 'Ausencias' ? "Justificar" : "Ir al formulario"}</Button>
      }
    </>
  )
}

export default AttendanceBlock