import React from "react";
import noodleEgg from "/images/noodle-egg.png";
import tumbler from "/images/tumbler.png";
import pancake from "/images/pancake.png";
import soup from "/images/soup.png";

const images = [noodleEgg, tumbler, pancake, soup];

function Photos() {
  return (
    <div className=" grid grid-cols-4 gap-2 md:gap-4">
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt="Slider image"
            className=" h-[8rem] w-[12rem] md:min-h-[18rem] md:max-w-[16rem] border-0.5 border-primary"
          />
        </div>
      ))}
    </div>
  );
}

export default Photos;
