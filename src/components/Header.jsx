import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function Header() {
  return (
    <header className=" flex items-center justify-between py-[32px] px-[120px] bg-black">
      <Logo />
      <NavLinks />
    </header>
  );
}

export default Header;
