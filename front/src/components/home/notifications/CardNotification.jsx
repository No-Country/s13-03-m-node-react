import activitiesImage from "../../../assets/images/notificaciones.svg";
import { NavLink } from "react-router-dom";

function CardNotification() {
  return (
    <NavLink to={"/notificaciones"}>
      <div
        className="py-4 border rounded-lg shadow-sm shadow-[#FCA044]  flex flex-col justify-center items-center"
        style={{
          backgroundColor: "rgba(252, 200, 68, 0.1)",
          height: "180px",
          width: "154px",
        }}
      >
        <div className="flex flex-col items-start">
          <p className="text-[12px] font-semibold text-[#280058] mb-[-20px]">
            19/02
          </p>
          <small className="text-[12px] font-regular text-[#FF6969]  mb-[-20px]">
            3 mensajes nuevos
          </small>
          <h4 className="text-[18px] font-bold text-[#280058]">
            Notificaciones
          </h4>
        </div>
        <div className="overflow-visible">
          <img
            alt="Card background"
            className="object-cover rounded-xl"
            src={activitiesImage}
            width={89}
          />
        </div>
      </div>
    </NavLink>
  );
}

export default CardNotification;
