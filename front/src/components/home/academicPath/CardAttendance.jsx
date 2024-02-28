import { NavLink } from "react-router-dom";
import attendancesImage from "../../../assets/images/asistencias.svg";

function CardAttendance() {
  return (
    <NavLink to={"/asistencias"}>
      <div
        className="py-4 border rounded-lg shadow-sm shadow-[#f4d13d]  flex flex-col justify-center items-center"
        style={{
          backgroundColor: "rgba(254, 209, 61, 0.05)",
          height: "350px",
          width: "180px",
        }}
      >
        <div className="pb-0 pt-2 px-2 flex flex-col items-start">
          <h4 className="font-bold text-large text-[#280058]">Asistencias</h4>
        </div>
        <div className="overflow-visible py-2 pt-5">
          <img
            alt="Card background"
            className="object-cover rounded-xl min-w-[136px]"
            src={attendancesImage}
            width={136}
          />
        </div>
      </div>
    </NavLink>
  );
}

export default CardAttendance;
