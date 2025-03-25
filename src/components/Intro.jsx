import React from "react";
import Spoon from "./Spoon";

function Intro({ title, align = "" }) {
  return (
    <div className={`${align}`}>
      <p className=" text-[1rem] md:text-[1.1rem] text-white">{title}</p>
      <Spoon />
    </div>
  );
}

export default Intro;
