import activitiesImage from "../../../assets/images/actividades.svg";
import { NavLink } from "react-router-dom";

function CardActivities() {
  return (
    <NavLink to={"/actividades"}>
      <div
        className="border rounded-lg shadow-sm shadow-[#67B7B3]  flex flex-col justify-center items-center"
        style={{
          backgroundColor: "rgba(103, 183, 179, 0.05)",
          height: "180px",
          width: "154px",
        }}
      >
        <div className="flex flex-col items-start justify-start pl-2">
          <p className="text-[12px] font-semibold text-[#280058]  mb-[-20px] text-start">
            Hace 2 días
          </p>
          <small className="text-[12px] font-regular text-[#FF6969] mb-[-10px]">
            1 actividad nueva
          </small>
          <h4 className="text-[18px] font-bold text-[#280058] leading-none">
            Actividades Escolares
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

export default CardActivities;
