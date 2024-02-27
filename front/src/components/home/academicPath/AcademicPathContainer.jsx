import CardAcademicPath from "./CardAcademicPath";
import calificationsImage from "../../../assets/images/calificaciones.svg";
import attendancesImage from "../../../assets/images/asistencias.svg";

const cardAcademicPathInfo = [
  {
    title: "Calificaciones",
    link: "/calificaciones",
    image: `${calificationsImage}`,
    backgroundColor: "#7222D3",
    backgroundOpacity: "rgba(114, 34, 211, 0.05)"
  },
  {
    title: "Asistencias",
    link: "/asistencias",
    image: `${attendancesImage}`,
    backgroundColor: "#F4D13D",
    backgroundOpacity: "rgba(244, 209, 61, 0.05)"
  },
];

function AcademicPathContainer() {
  return (
    <div className="w-screen pl-[16px] pr-[16px] mt-12">
      <h2 className="text-[20px] font-bold text-[#280058]">
        Mi camino académico
      </h2>
      <div
        id="card-academicPath-container"
        className="flex flex-row space-x-[20px] justify-between mt-5"
      >
        {cardAcademicPathInfo.map((academicPathInfo, index) => (
          <CardAcademicPath key={index} academicPathInfo={academicPathInfo} />
        ))}
      </div>
    </div>
  );
}

export default AcademicPathContainer;
