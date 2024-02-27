import { useNavigate } from "react-router-dom";
import AttendanceCard from "../components/attendance/AttendanceCard";
import AttendanceChart from '../components/attendance/AttendanceChart';
import { data } from '../utils/data.js';

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