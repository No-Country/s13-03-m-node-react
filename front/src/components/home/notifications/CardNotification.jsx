import activitiesImage from "../../../assets/images/notificaciones.svg";
import { NavLink } from "react-router-dom";

function CardNotification() {
  return (
    <NavLink to={"/notificaciones"}>
      <div
        className="py-4 border rounded-lg shadow-sm shadow-[#FCA044]  flex flex-col justify-center items-center"
        style={{
          backgroundColor: "rgba(252, 200, 68, 0.1)",
          height: "250px",
          width: "150px",
        }}
      >
        <div className="pb-0 pt-2 px-2 flex flex-col items-start">
          <p className="text-[7.2px] uppercase font-bold text-[#280058]">19/02</p>
          <small className="text-[8.7px]  text-[#FF6969]">3 mensajes nuevos</small>
          <h4 className="font-bold text-[12.7px] text-[#280058]">Notificaciones</h4>
        </div>
        <div className="overflow-visible py-2 pt-5">
          <img
            alt="Card background"
            className="object-cover rounded-xl"
            src={activitiesImage}
            width={136}
          />
        </div>
      </div>
    </NavLink>
  );
}

export default CardNotification;
