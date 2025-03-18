import React from "react";

function Button({ children }) {
  return (
    <button className=" bg-[#DCCA87] py-[8px] px-[32px] text-[1rem] font-bold text-[#0C0B08]">
      {children}
    </button>
  );
}

export default Button;
