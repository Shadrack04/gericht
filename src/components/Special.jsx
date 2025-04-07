import React from "react";
import DrinkList from "./DrinkList";
import blender from "/images/blender.png";
import { cocktails, wineBeer } from "../data/wins";
import Intro from "./Intro";
import Button from "./Button";

function Special() {
  return (
    <div className=" md:max-w-[71rem] md:min-h-[48rem] my-10 mx-auto">
      <div className=" flex flex-col items-center">
        <Intro title="Menu that fits you palatte" />
        <h2 className="text-[#DCCA87] text-[2.4rem] md:text-[4rem] font-medium text-center">
          Today’s Special
        </h2>
      </div>
      <div className=" relative flex flex-col md:flex-row justify-center gap-4 my-10">
        <DrinkList title="Wine & Beer" drinks={wineBeer} />
        <div className=" mx-auto md:mx-0 w-[17rem] h-[31rem]">
          <img
            src={blender}
            alt="Image of a Blender"
            className=" w-full h-full"
          />
        </div>
        <DrinkList title="Cocktails" drinks={cocktails} />
      </div>
      <div className=" flex items-center justify-center">
        <Button>View More</Button>
      </div>
    </div>
  );
}

export default Special;
