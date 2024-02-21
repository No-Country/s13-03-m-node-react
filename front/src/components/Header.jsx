import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, Link, NavbarItem, Button } from "@nextui-org/react";
import { useState } from "react";
import Logo from "./Logo";
import ProfilePic from "./ProfilePic";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const menuItems = [
    "Notificaciones",
    "Actividades",
    "Calendario",
    "Chat",
    "Asistencias",
    "Calificaciones",
    "Ayuda",
    "Perfil",
    "Login",
    "Sign-Up",
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="mb-4"
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="gap-4" justify="center">
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      {isLoggedIn ? <ProfilePic handleLogout={() => setIsLoggedIn(false)} /> : <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="/sign-up" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>}

      <NavbarMenu className="bg-gray-100 overflow-hidden w-[250px] rounded">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full hover:bg-gray-200 hover:font-semibold"
              color="foreground"
              href={`/${item.toLowerCase()}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header