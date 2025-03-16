import React from "react";

function NavLinks() {
  return (
    <nav className=" text-white flex items-center justify-between w-4/6">
      <ul className=" flex items-center gap-4">
        <li className="nav-list">
          <a href="#">Home</a>
        </li>
        <li className="nav-list">
          <a href="#">Pages</a>
        </li>
        <li className="nav-list">
          <a href="#">Contact Us</a>
        </li>
        <li className="nav-list">
          <a href="#">Blog</a>
        </li>
        <li className="nav-list">
          <a href="#">Landing</a>
        </li>
      </ul>
      <div className=" flex items-center gap-4 h-full">
        <div>
          <a className="login" href="#">
            Login/Registration
          </a>
        </div>
        <div className=" border-1 h-4 border-gray-500"></div>
        <div>
          <a className="book-table" href="#">
            Book Table
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavLinks;
