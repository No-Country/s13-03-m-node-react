import activitiesImage from "../../../assets/images/actividades.svg";
import { NavLink } from "react-router-dom";

function CardActivities() {
  return (
    <NavLink to={"/actividades"}>
      <div
        className="py-4 border rounded-lg shadow-sm shadow-[#67B7B3]  flex flex-col justify-center items-center"
        style={{
          backgroundColor: "rgba(103, 183, 179, 0.05)",
          height: "350px",
          width: "180px",
        }}
      >
        <div className="pb-0 pt-2 px-2 flex flex-col items-start">
          <p className="text-xs uppercase font-bold text-[#280058]">19/02</p>
          <small className="text-sm text-[#FF6969]">3 mensajes nuevos</small>
          <h4 className="font-bold text-xl text-[#280058]">
            Actividades Escolares
          </h4>
        </div>
        <div>
          <div className="overflow-visible py-2 pt-5">
            <img
              alt="Card background"
              className="object-cover rounded-xl"
              src={activitiesImage}
              width={136}
            />
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default CardActivities;
