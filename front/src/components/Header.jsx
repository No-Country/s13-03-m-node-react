import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, Link, NavbarItem, Button, link } from "@nextui-org/react";
import { useState } from "react";
import Logo from "./Logo";
import ProfilePic from "./ProfilePic";
import { links } from "../utils/links";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
          <p className="font-bold text-inherit">EduClass</p>
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
        {links.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>

            <Link
              className="w-full hover:bg-gray-200 hover:font-semibold gap-2"
              color="foreground"
              href={`/${item.path}`}
              size="lg"
            >
              {item.icon} {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header