/* eslint-disable react/prop-types */
import { NavbarContent, Dropdown, DropdownTrigger, Avatar, DropdownItem, DropdownMenu } from "@nextui-org/react";
import avatar from '../assets/icons/avatar.png';

const ProfilePic = ({ handleLogout }) => {
  return (
    <NavbarContent justify="end" aria-label="User" >
      <Dropdown placement="bottom-end" aria-label="User" >
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="default"
            name="Jason Hughes"
            size="md"
            src={avatar}
            aria-label="User"
          />
        </DropdownTrigger>

        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Usuario:</p>
            <p className="font-semibold">zoey@example.com</p>
          </DropdownItem>
          <DropdownItem key="settings" withDivider>
            Perfil
          </DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={handleLogout}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  )
}

export default ProfilePic