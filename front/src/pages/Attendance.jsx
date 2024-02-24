import asistenciaPic from '../assets/images/asistencias.jpg';
import ausenciaPic from '../assets/images/ausencias.jpg';
import retirosPic from '../assets/images/retiros.jpg';
import { useNavigate } from "react-router-dom";
import AttendanceCard from "../components/attendance/AttendanceCard";
import AttendanceChart from '../components/attendance/AttendanceChart';

const data = [
  {
    name: "Asistencias",
    link: "/asistencias/asistencias",
    image: asistenciaPic,
    acumulado_mensual: 15,
    acumulado_anual: 35,
    total_mensual: 20,
    total_anual: 200
  },
  {
    name: "Ausencias",
    link: "/asistencias/ausencias",
    image: ausenciaPic,
    acumulado_mensual: 2,
    acumulado_anual: 3,
    total_anual: 10
  },
  {
    name: "Retiros",
    link: "/asistencias/retiros",
    image: retirosPic,
    acumulado_mensual: 1,
    acumulado_anual: 2
  },
];

const Attendance = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[900px] gap-2 flex flex-col px-8">
      {
        data.map((link) => (
          <AttendanceCard
            key={link.name}
            name={link.name}
            image={link.image}
            handleNavigate={() => navigate(link.link)}
          />
        ))
      }

      <h1 className="text-2xl font-semibold text-center mt-10">Métricas</h1>
      <AttendanceChart data={data} />
    </div>
  );
}

export default Attendance