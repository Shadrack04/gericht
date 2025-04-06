import React from "react";

function NavLinks({ openNav, setOpenNav }) {
  return (
    <nav
      className={`${
        !openNav && "-translate-y-[100%]"
      } fixed inset-0  transform md:translate-0 transition-transform duration-600 md:static bg-black md:bg-transparent text-white flex flex-col items-center pt-30 md:pt-0 md:flex-row md:items-center md:justify-between md:w-4/6 z-30`}
    >
      <ul className=" flex flex-col md:flex-row items-center gap-4">
        <li className="nav-list text-2xl md:text-[0.9rem] font-medium">
          <a href="#">Home</a>
        </li>
        <li className="nav-list text-2xl md:text-[0.9rem] font-medium">
          <a href="#">Pages</a>
        </li>
        <li className="nav-list text-2xl md:text-[0.9rem] font-medium">
          <a href="#">Contact Us</a>
        </li>
        <li className="nav-list text-2xl md:text-[0.9rem] font-medium">
          <a href="#">Blog</a>
        </li>
        <li className="nav-list text-2xl md:text-[0.9rem] font-medium">
          <a href="#">Landing</a>
        </li>
      </ul>
      <div className=" flex items-center gap-8 h-full">
        <div>
          <a className="login text-[0.9rem]" href="#">
            Login/Registration
          </a>
        </div>
        <div className=" border-1 h-4 border-gray-500"></div>
        <div>
          <a className="book-table text-[0.9rem]" href="#">
            Book Table
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavLinks;
