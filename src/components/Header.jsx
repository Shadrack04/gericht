import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function Header() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <header className=" flex items-center justify-between px-6 md:px-4 lg:px-16 py-2 bg-black">
      <Logo />
      <NavLinks openNav={openNav} setOpenNav={setOpenNav} />
      {openNav ? (
        <IoCloseSharp
          onClick={() => setOpenNav((openNav) => !openNav)}
          className=" text-white lg:hidden size-8 z-50"
        />
      ) : (
        <IoMenu
          onClick={() => setOpenNav((openNav) => !openNav)}
          className=" text-white lg:hidden size-8 z-50"
        />
      )}
    </header>
  );
}

export default Header;
