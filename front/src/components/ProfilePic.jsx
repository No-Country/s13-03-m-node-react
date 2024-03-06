/* eslint-disable react/prop-types */
import { NavbarContent, Dropdown, DropdownTrigger, Avatar, DropdownItem, DropdownMenu } from "@nextui-org/react";
import avatar from '../assets/icons/avatar.png';
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const ProfilePic = ({ handleLogout }) => {
  const { user } = useAuth();

  return (
    <NavbarContent justify="end" aria-label="User">
      <Dropdown placement="bottom-end" aria-label="User" className="rounded-lg bg-gradient-to-tr from-[#8f6db8] to-[#fff] mt-[6px]" >
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="default"
            name="Jason Hughes"
            size="md"
            src={user.picture || avatar}
            aria-label="User"
          />
        </DropdownTrigger>

        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2" textValue="user">
            <p className="font-semibold">Usuario:</p>
            <p className="font-semibold">{user.email}</p>
          </DropdownItem>
          <DropdownItem key="settings" withDivider textValue="settings">
            <NavLink className="font-semibold" to="/perfil">Perfil</NavLink>
          </DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={handleLogout} textValue="logout">
            <NavLink className="font-semibold" to="/login">Cerrar sesión</NavLink>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  )
}

export default ProfilePic