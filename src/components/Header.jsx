import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function Header() {
  return (
    <header className=" flex items-center justify-between px-6 py-4 bg-black">
      <Logo />
      <NavLinks />
    </header>
  );
}

export default Header;
