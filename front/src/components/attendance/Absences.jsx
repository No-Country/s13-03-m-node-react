import { useLocation } from "react-router-dom";
import AbsenceBlock from "./AbsenceBlock";

const Absences = () => {
  const { state } = useLocation()

  return (
    <div className="text-3xl h-100  w-full flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold text-left mt-8 text-[#280058] p-4">Ausencias</h1>

      {state.ausencias.map((date) => (
        <AbsenceBlock key={date} date={date} />
      ))}
    </div>
  )
}

export default Absences