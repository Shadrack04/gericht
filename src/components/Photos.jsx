import React, { useState } from "react";
import noodleEgg from "/images/noodle-egg.png";
import tumbler from "/images/tumbler.png";
import pancake from "/images/pancake.png";
import soup from "/images/soup.png";
import instagram from "/images/instagram.svg";

const images = [noodleEgg, tumbler, pancake, soup];

function Photos({ isHover, setIsHover }) {
  return (
    <div className=" grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4  gap-2 md:gap-x-8 md:gap-y-4  lg:gap-4">
      {images.map((image, index) => (
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          key={index}
          className={`relative hover:before:absolute hover:before:w-full hover:before:h-full hover:before:bg-black/70 hover:before:z-20`}
        >
          <img
            src={image}
            alt="Slider image"
            className=" h-[8rem] w-[12rem] md:min-h-[18rem] md:max-w-[16rem] border-0.5 border-primary"
          />
          {isHover && (
            <img
              src={instagram}
              alt=""
              className=" absolute inset-0 m-auto z-20"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Photos;
