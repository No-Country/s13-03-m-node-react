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
            <div className="flex flex-col items-center">
                <Logo />
                <p className="font-bold text-inherit">EduClass</p>
            </div>
        </footer>
    )
}

export default Footer