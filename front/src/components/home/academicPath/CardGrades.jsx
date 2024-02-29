import { NavLink } from "react-router-dom";
import calificationsImage from "../../../assets/images/calificaciones.svg";

function CardGrades() {
  return (
    <NavLink to={"/calificaciones"}>
    <div
      className="py-4 border rounded-lg shadow-sm shadow-[#7222D3]  flex flex-col justify-center items-center"
      style={{
        backgroundColor: "rgba(114, 34, 211, 0.05)",
        height: "250px",
        width: "150px",
      }}
    >
      <div className="pb-0 pt-2 px-2 flex flex-col items-start">
        <h4 className="font-bold text-large text-[#280058]">
          Calificaciones
        </h4>
      </div>
      <div className="overflow-visible py-2 pt-5">
        <img
          alt="Card background"
          className="object-cover rounded-xl min-w-[136px]"
          src={calificationsImage}
          width={136}
        />
      </div>
    </div>
  </NavLink>
  )
}

export default CardGrades