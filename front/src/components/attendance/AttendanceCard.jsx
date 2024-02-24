import { Card, CardHeader, Image } from "@nextui-org/react";

const AttendanceCard = ({ name, image, handleNavigate }) => {
  return (
    <Card className="col-span-12 sm:col-span-4 h-[300px] cursor-pointer">
      <CardHeader className="absolute z-10 flex-col !items-start shadow-sm bg-gradient-to-tr from-[#8f6c50f1] to-[#e42e161a]">
        <p className="text-tiny text-white/60 uppercase font-bold">EduClass</p>
        <h4 className="text-white font-medium text-large">{name}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="asistencias"
        className="z-0 w-full h-full object-cover"
        src={image}
        onClick={handleNavigate}
      />
    </Card>
  )
}

export default AttendanceCard