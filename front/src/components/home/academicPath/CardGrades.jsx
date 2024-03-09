import { NavLink } from "react-router-dom";
import calificationsImage from "../../../assets/images/calificaciones.svg";

function CardGrades() {
  return (
    <NavLink to={"/calificaciones"}>
      <div
        className="pt-2 border rounded-lg shadow-sm shadow-[#7222D3]  flex flex-col justify-center items-center"
        style={{
          backgroundColor: "rgba(114, 34, 211, 0.05)",
          height: "180px",
          width: "154px",
        }}
      >
        <div className="flex flex-col items-start justify-start pr-5">
          <p className="text-[12px] font-semibold text-[#280058]  mb-[-20px] text-start">
            Hace 2 días
          </p>
          <small className="text-[12px] font-regular text-[#FF6969] mb-[-10px]">
            0 mensajes nuevos
          </small>
          <h4 className="text-[18px] font-bold text-[#280058] leading-none">
            Calificaciones
          </h4>
        </div>
        <div className="overflow-visible py-2 pt-5 flex justify-center w-full">
          <img
            alt="Card background"
            className="object-cover rounded-xl text-center justify-center object-center align-middle"
            src={calificationsImage}
            width={89}
          />
        </div>
      </div>
    </NavLink>
  );
}

export default CardGrades;
