import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent } from "@nextui-org/react";
import { useState } from "react";
import Logo from "./Logo";
import ProfilePic from "./ProfilePic";
import { links } from "../utils/links";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="mb-4 border-none shadow-inner navbar"
      aria-label="User"
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="gap-4" justify="center">
        <NavbarBrand>
          <NavLink to="/home" className="font-bold text-inherit">
            <Logo />
          </NavLink>
        </NavbarBrand>
      </NavbarContent>

      <ProfilePic />

      <NavbarMenu className="bg-gray-100 overflow-hidden w-[250px] rounded navbar" >
        {links.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NavLink
              className="w-full hover:font-semibold"
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