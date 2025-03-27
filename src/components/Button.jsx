import React from "react";

function Button({ children }) {
  return (
    <button
      className={` bg-primary hover:bg-[#ebd173] cursor-pointer py-[8px] px-[28px] text-[1rem] font-bold text-[#0C0B08]`}
    >
      {children}
    </button>
  );
}

export default Button;
