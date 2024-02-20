import { NavbarContent, NavbarItem, Button, Dropdown, DropdownTrigger, Avatar, DropdownItem, DropdownMenu, Link } from "@nextui-org/react";

const ProfilePic = () => {
  return (
    <NavbarContent justify="end">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            name="Jason Hughes"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>

        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">zoey@example.com</p>
          </DropdownItem>
          <DropdownItem key="settings" withDivider>
            Perfil
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <NavbarItem className="hidden md:flex">
        <Link href="/login">Login</Link>
      </NavbarItem>
      <NavbarItem className="hidden md:flex">
        <Button as={Link} color="warning" href="/sign-up" variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
    </NavbarContent>
  )
}

export default ProfilePic