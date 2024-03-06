import activitiesImage from "../../../assets/images/notificaciones.svg";
import { NavLink } from "react-router-dom";

function CardNotification() {
  return (
    <NavLink to={"/notificaciones"}>
      <div
        className="pt-2 border rounded-lg shadow-sm shadow-[#FCA044]  flex flex-col justify-center items-center"
        style={{
          backgroundColor: "rgba(252, 200, 68, 0.1)",
          height: "180px",
          width: "154px",
        }}
      >
        <div className="flex flex-col items-start justify-start pr-5">
          <p className="text-[12px] font-semibold text-[#280058]  mb-[-20px] text-start">
            Ayer
          </p>
          <small className="text-[12px] font-regular text-[#FF6969]  mb-[-10px]">
            3 mensajes nuevos
          </small>
          <h4 className="text-[18px] font-bold text-[#280058] leading-none">
            Notificaciones
          </h4>
        </div>
        <div className="overflow-visible py-2 pt-5 flex justify-center w-full">
          <img
            alt="Card background"
            className="object-cover rounded-xl text-center justify-center object-center align-middle"
            src={activitiesImage}
            width={89}
          />
        </div>
      </div>
    </NavLink>
  );
}

export default CardNotification;
