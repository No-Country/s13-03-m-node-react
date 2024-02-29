import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { BiCopyright } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="flex justify-between pt-4 pb-16 px-6 bg-[#FDFBFF] mt-4 border-t-2 border-[#28005880] text-[#280058]">
      <NavLink
        to="/"
        className="flex flex-col items-center font-bold text-inherit "
      >
        <Logo />
        <p className="font-bold text-inherit">EduClass</p>
      </NavLink>
      <div className="flex items-end ">
        <p className="flex items-center text-[10px] font-medium  gap-1">
          <span>
            <BiCopyright />
          </span>
          Todos los derechos reservados
        </p>
      </div>
      <ul className=" text-xs	">
        <li className="font-semibold	text-sm">Contáctanos</li>
        <ul>
          <li className="flex items-center gap-1.5">
            <span >
              <FiPhone  size="1rem" />
            </span>
            (011) 4812-9843
          </li>
          <li className="flex items-center gap-1.5">
            <span>
              <MdOutlineEmail size="1rem" />
            </span>{" "}
            info@colegiosanpedro.com
          </li>
        </ul>
        <li className="font-semibold	text-sm">Legal</li>
        <ul>
          <li>Políticas de seguridad</li>
        </ul>
        <li className="font-semibold	text-sm">Ayuda</li>
      </ul>
    </footer>
  );
};

export default Footer;
