import { Radio, RadioGroup } from "@nextui-org/react";
import asistenciaPic from '../assets/images/asistencias.jpg';
import ausenciaPic from '../assets/images/ausencias.jpg';
import retirosPic from '../assets/images/retiros.jpg';
import { useNavigate } from "react-router-dom";
import graph from '../assets/icons/graph.png';
import AttendanceCard from "../components/attendance/AttendanceCard";

const links = [
  {
    name: "Asistencias",
    link: "/asistencias/asistencias",
    image: asistenciaPic
  },
  {
    name: "Ausencias",
    link: "/asistencias/ausencias",
    image: ausenciaPic
  },
  {
    name: "Retiros",
    link: "/asistencias/retiros",
    image: retirosPic
  },
];

const Attendance = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[900px] gap-2 flex flex-col px-8">
      {
        links.map((link) => (
          <AttendanceCard
            key={link.name}
            name={link.name}
            image={link.image}
            handleNavigate={() => navigate(link.link)}
          />
        ))
      }

      <h1 className="text-2xl font-semibold text-center mt-10">Métricas</h1>
      <RadioGroup orientation="horizontal" className="flex justify-center items-center  gap-4 mt-4 ">
        <Radio size="md" value="asistencias">Asistencias</Radio>
        <Radio size="md" value="ausencias">Ausencias</Radio>
        <Radio size="md" value="retiros">Retiros</Radio>
      </RadioGroup>

      <div>
        <img src={graph} alt="graph" />
      </div>
    </div>
  );
}

export default Attendance