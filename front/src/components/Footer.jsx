import { NavLink } from "react-router-dom";
import Logo from "./Logo"

const Footer = () => {
    return (
        <footer className="flex justify-between pt-4 pb-16 px-6 bg-[#1400ff1a] mt-4">
            <ul className="font-medium text-xs	">
                <li>Contacto</li>
                <li>Teléfono</li>
                <li>E-mail</li>
            </ul>
            <p className="flex items-end text-[10px] font-medium">Todos los derechos reservados</p>
            <NavLink to="/" className="flex flex-col items-center font-bold text-inherit ">
                <Logo />
                <p className="font-bold text-inherit">EduClass</p>
            </NavLink>
        </footer>
    )
}

export default Footer