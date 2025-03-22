import React from "react";
import DrinkList from "./DrinkList";
import blender from "/images/blender.png";
import { cocktails, wineBeer } from "../data/wins";

function Special() {
  return (
    <div className=" w-[71rem] h-[60rem] my-10">
      <div>
        <p className=" text-[1rem] md:text-[1.2rem] text-center text-white">
          Menu that fits you palatte
        </p>
        <h2 className=" text-primary text-[4rem] font-medium text-center">
          Today’s Special
        </h2>
      </div>
      <div className=" flex justify-center gap-4 my-10">
        <DrinkList title="Wine & Beer" drinks={wineBeer} />
        <div className=" w-[17rem] h-[31rem] bg-red-500">
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
