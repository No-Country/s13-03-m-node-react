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
    enero: 18,
    febrero: 17,
    marzo: 0,
    abril: 0,
    mayo: 0,
    junio: 0,
    julio: 0,
    agosto: 0,
    septiembre: 0,
    octubre: 0,
    noviembre: 0,
    diciembre: 0,
    total_mensual: 20,
    total_anual: 200
  },
  {
    name: "Ausencias",
    link: "/asistencias/ausencias",
    image: ausenciaPic,
    acumulado_mensual: 2,
    acumulado_anual: 3,
    total_anual: 10,
    enero: 1,
    febrero: 2,
    marzo: 0,
    abril: 0,
    mayo: 0,
    junio: 0,
    julio: 0,
    agosto: 0,
    septiembre: 0,
    octubre: 0,
    noviembre: 0,
    diciembre: 0,
  },
  {
    name: "Retiros",
    link: "/asistencias/retiros",
    image: retirosPic,
    acumulado_mensual: 3,
    acumulado_anual: 4,
    enero: 1,
    febrero: 3,
    marzo: 0,
    abril: 0,
    mayo: 0,
    junio: 0,
    julio: 0,
    agosto: 0,
    septiembre: 0,
    octubre: 0,
    noviembre: 0,
    diciembre: 0,
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
            handleNavigate={() => navigate(link.link, { state: link })}
          />
        ))
      }

      <h1 className="text-2xl font-semibold text-center mt-10">Métricas</h1>
      <AttendanceChart data={data} />
    </div>
  );
}

export default Attendance