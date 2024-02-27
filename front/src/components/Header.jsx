import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, Link, NavbarItem, Button } from "@nextui-org/react";
import { useState } from "react";
import Logo from "./Logo";
import ProfilePic from "./ProfilePic";
import { links } from "../utils/links";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="mb-4 border-none bg-gradient-to-br from-[#280058] to-[#fff]"
      aria-label="User"
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="gap-4" justify="center">
        <NavbarBrand>
          <NavLink to="/" className="font-bold text-inherit">
            <Logo />
          </NavLink>
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

      <NavbarMenu className="bg-gray-100 overflow-hidden w-[250px] rounded bg-gradient-to-tr from-[#280058] to-[#fff]" >
        {links.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>

            <NavLink
              className="w-full hover:font-semibold gap-2"
              color="foreground"
              to={`/${item.path}`}
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex gap-2">{item.icon} {item.text}</div>
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header