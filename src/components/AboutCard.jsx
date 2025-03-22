import React from "react";
import Button from "./Button";

function AboutCard({ title, description, containerClassName }) {
  // const style = mobileScreen ? { textAlign: "center" } : { textAlign: align };
  return (
    <div
      className={` text-center md:w-[25rem] h-[12rem] md:h-[18rem] z-30 ${containerClassName}`}
    >
      <h2 className="text-[#DCCA87] text-[2rem] md:text-[4rem] font-bold">
        {title}
      </h2>
      <p className=" backdrop-blur-sm text-white md:text-[1rem]/[175%] font-medium">
        {description}
      </p>
      <div className=" my-4">
        <Button>Know More</Button>
      </div>
    </div>
  );
}

export default AboutCard;
