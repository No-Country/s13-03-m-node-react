import { Card, CardHeader, Image, Radio, RadioGroup } from "@nextui-org/react";
import asistenciaPic from '../assets/images/asistencias.jpg';
import ausenciaPic from '../assets/images/ausencias.jpg';
import retirosPic from '../assets/images/retiros.jpg';
import { useNavigate } from "react-router-dom";
import graph from '../assets/icons/graph.png';

const Attendance = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[900px] gap-2 flex flex-col px-8">
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

      <h1 className="text-2xl font-semibold text-center mt-10">Métricas</h1>
      <RadioGroup orientation="horizontal" className="flex justify-center items-center  gap-4 mt-4 ">
        <Radio size="md" value="mes">Asistencias</Radio>
        <Radio size="md" value="week">Ausencias</Radio>
      </RadioGroup>

      <div>
        <img src={graph} alt="graph" />
      </div>
    </div>
  );
}

export default Attendance