import { NavLink } from "react-router-dom";

function CardAcademicPath({ academicPathInfo }) {
  return (
    <NavLink to={academicPathInfo.link}>
      <div
        className={`py-4 border rounded-lg shadow-sm shadow-[${academicPathInfo.backgroundColor}]`}
        style={{ backgroundColor: academicPathInfo.backgroundOpacity }}
      >
        <div className="pb-0 pt-2 px-2 flex flex-col items-start">
          <h4 className="font-bold text-large text-[#280058]">
            {academicPathInfo.title}
          </h4>
        </div>
        <div className="overflow-visible py-2 pt-5">
          <img
            alt="Card background"
            className="object-cover rounded-xl"
            src={academicPathInfo.image}
            width={136}
          />
        </div>
      </div>
    </NavLink>
  );
}

export default CardAcademicPath;
