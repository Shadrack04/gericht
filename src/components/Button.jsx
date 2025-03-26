import React from "react";

function Button({ children, paddingY = "8px" }) {
  return (
    <button
      className={` bg-primary hover:bg-[#ebd173] cursor-pointer py-[${paddingY}] px-[32px] text-[1rem] font-bold text-[#0C0B08]`}
    >
      {children}
    </button>
  );
}

export default Button;
