import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { BiCopyright } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {Avatar} from "@nextui-org/react";

const Footer = () => {
  return (
    <footer className="flex justify-between relative  bottom-0  pt-4 pb-10 px-6 bg-[#FDFBFF] mt-4 border-t-2 border-[#28005880] text-[#280058]">
      <NavLink
        to="/home"
        className="flex flex-col items-center font-bold text-inherit "
      >
        <Logo footer={true} />
        <p className="font-bold text-inherit text-[#7222D3]">EduClass</p>
      </NavLink>
      <div className="  absolute  inset-x-24 bottom-0 pb-3 pl-2">
        <p className="flex items-center text-[10px] font-medium  gap-1">
          <span>
            <BiCopyright size={16} />
          </span>
          Todos los derechos reservados
        </p>
      </div>
      <ul className=" text-xs flex flex-col	gap-4">
       
        <ul >
          <li className="font-semibold	text-sm mb-1">Síguenos</li>
          <ul className="flex gap-2">
          <li><FaInstagram size={20} /></li>
          <li><FaFacebook size={20} /></li>
          </ul>
        </ul>
       
        <ul>
        <li className="font-semibold	text-sm mb-1">Contáctanos</li>
          <li className="flex items-center gap-1.5 mb-1">
            <span >
              <FiPhone size="1rem" />
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
      
        <ul>
        <li className="font-semibold	text-sm mb-1">Legal</li>
          <li>Políticas de seguridad</li>
        </ul>

      </ul>
    </footer>
  );
};

export default Footer;
