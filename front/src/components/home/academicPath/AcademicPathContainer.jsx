import CardAcademicPath from "./CardAcademicPath";

const cardAcademicPathInfo = [
  {
    title: "Calendario",
  },
  {
    title: "Asistencias",
  },
];

function AcademicPathContainer() {
  return (
    <div className="w-screen pl-[16px] pr-[16px] mt-12">
      <h2 className="text-[20px] font-bold">Mi camino académico</h2>
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
