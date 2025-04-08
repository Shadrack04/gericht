import React from "react";

function Button({ children }) {
  return (
    <button
      className={` bg-primary hover:bg-[#ebd173] cursor-pointer py-[4px] px-[20px] text-[.8rem] text-[#0C0B08]`}
    >
      {children}
    </button>
  );
}

export default Button;
