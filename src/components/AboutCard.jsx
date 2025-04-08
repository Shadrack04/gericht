import React from "react";
import Button from "./Button";
import Intro from "./Intro";

function AboutCard({ title, description, containerClassName }) {
  let align;
  if (containerClassName === "md:text-end") {
    align = "rightAlign";
  }
  if (containerClassName === "md:text-start") {
    align = "leftAlign";
  }
  return (
    <div
      className={` text-center md:px-2 md:w-[25rem] h-[12rem] md:h-[18rem] z-30 ${containerClassName}`}
    >
      <div className=" mb-8">
        <h2 className="text-[#DCCA87] text-[2rem] md:text-[3rem] font-bold">
          {title}
        </h2>
        <Intro align={align} />
      </div>
      <p className=" text-gray md:text-[1rem]/[140%]">{description}</p>
      <div className=" my-4">
        <Button>Know More</Button>
      </div>
    </div>
  );
}

export default AboutCard;
