//import CardAcademicPath from "./CardAcademicPath";
import CardAttendance from "./CardAttendance";
import CardGrades from "./CardGrades";

/* const cardAcademicPathInfo = [
  {
    title: "Calificaciones",
    link: "/calificaciones",
    image: `${calificationsImage}`,
    backgroundColor: "#7222D3",
    backgroundOpacity: "rgba(114, 34, 211, 0.05)",
  },
  {
    title: "Asistencias",
    link: "/asistencias",
    image: `${attendancesImage}`,
    backgroundColor: "#f4d13d",
    backgroundOpacity: "rgba(254, 209, 61, 0.05)",
  },
];
 */
function AcademicPathContainer() {
  return (
    <div className="w-screen pl-[16px] pr-[16px] mt-12">
      <h2 className="text-[20px] font-bold text-[#280058]">
        Mi camino académico
      </h2>
      <div
        id="card-academicPath-container"
        className="flex flex-row gap-4 justify-between mt-5"
      >
        <CardGrades />
        <CardAttendance />
      </div>
    </div>
  );
}

export default AcademicPathContainer;
