import { Card, CardHeader, Image } from "@nextui-org/react";
import asistenciaPic from '../assets/images/asistencias.jpg';
import ausenciaPic from '../assets/images/ausencias.jpg';
import retirosPic from '../assets/images/retiros.jpg';
import { useNavigate } from "react-router-dom";

const Attendance = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card className="col-span-12 sm:col-span-4 h-[300px] cursor-pointer">
        <CardHeader className="absolute z-10 flex-col !items-start shadow-sm bg-gradient-to-tr from-[#8f6c50f1] to-[#e42e161a]">
          <p className="text-tiny text-white/60 uppercase font-bold">EduClass</p>
          <h4 className="text-white font-medium text-large">Asistencias</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="asistencias"
          className="z-0 w-full h-full object-cover"
          src={asistenciaPic}
          onClick={() => navigate("/asistencias/asistencias")}
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px] cursor-pointer">
        <CardHeader className="absolute z-10 flex-col !items-start shadow-sm bg-gradient-to-tr from-[#8f6c50f1] to-[#e42e161a]">
          <p className="text-tiny text-white/60 uppercase font-bold">EduClass</p>
          <h4 className="text-white font-medium text-large">Ausencias</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="ausencias"
          className="z-0 w-full h-full object-cover"
          src={ausenciaPic}
          onClick={() => navigate("/asistencias/ausencias")}
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px] cursor-pointer">
        <CardHeader className="absolute z-10 flex-col !items-start shadow-sm bg-gradient-to-tr from-[#8f6c50f1] to-[#e42e161a]">
          <p className="text-tiny text-white/60 uppercase font-bold">EduClass</p>
          <h4 className="text-white font-medium text-large">Retiros</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="retiros"
          className="z-0 w-full h-full object-cover"
          src={retirosPic}
          onClick={() => navigate("/asistencias/retiros")}
        />
      </Card>
    </div>
  );
}

export default Attendance