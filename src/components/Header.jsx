import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function Header() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <header className=" flex items-center justify-between px-6 py-4 bg-black">
      <Logo />
      <NavLinks openNav={openNav} setOpenNav={setOpenNav} />
      {openNav ? (
        <IoCloseSharp
          onClick={() => setOpenNav((O) => !O)}
          className=" text-white md:hidden size-8 z-50"
        />
      ) : (
        <IoMenu
          onClick={() => setOpenNav((O) => !O)}
          className=" text-white md:hidden size-8 z-50"
        />
      )}
    </header>
  );
}

export default Header;
