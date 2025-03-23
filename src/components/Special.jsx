import React from "react";
import DrinkList from "./DrinkList";
import blender from "/images/blender.png";
import { cocktails, wineBeer } from "../data/wins";

function Special() {
  return (
    <div className=" md:w-[71rem] md:h-[48rem] my-10">
      <div>
        <p className=" text-[1rem] md:text-[1.2rem] text-center text-white">
          Menu that fits you palatte
        </p>
        <h2 className="text-[#DCCA87] text-[2.4rem] md:text-[4rem] font-medium text-center">
          Today’s Special
        </h2>
      </div>
      <div className=" relative flex flex-col md:flex-row justify-center gap-4 my-10">
        <DrinkList title="Wine & Beer" drinks={wineBeer} />
        <div className="absolute top-1/2 left-1/2 -translate-1/2 md:translate-0 md:static w-[17rem] h-[31rem]">
          <img
            src={blender}
            alt="Image of a Blender"
            className=" w-full h-full"
          />
        </div>
        <DrinkList title="Cocktails" drinks={cocktails} />
      </div>
    </div>
  );
}

export default Special;
