import { NavLink } from "react-router-dom";
import attendancesImage from "../../../assets/images/asistencias.svg";

function CardAttendance() {
  return (
    <NavLink to={"/asistencias"}>
      <div
        className="border rounded-lg shadow-sm shadow-[#f4d13d]  flex flex-col justify-center items-start"
        style={{
          backgroundColor: "rgba(254, 209, 61, 0.05)",
          height: "180px",
          width: "154px",
        }}
      >
        <div className="flex flex-col items-start justify-start pl-2">
          <p className="text-[12px] font-semibold text-[#280058]  mb-[-20px] text-start">
            Hoy
          </p>
          <small className="text-[12px] font-regular text-[#FF6969] mb-[-10px]">
            1 mensaje nuevo
          </small>
          <h4 className="text-[18px] font-bold text-[#280058] leading-none">
            Asistencias
          </h4>
        </div>
        <div className="overflow-visible py-2 pt-5 flex justify-center w-full">
          <img
            alt="Card background"
            className="object-cover rounded-xl text-center justify-center object-center align-middle"
            src={attendancesImage}
            width={89}
          />
        </div>
      </div>
    </NavLink>
  );
}

export default CardAttendance;
