import React from "react";
import DrinkList from "./DrinkList";
import blender from "/images/blender.png";

const wineBeer = [
  { name: "Chapel Hill Shiraz", subName: "AU | Bottle", price: 56 },
  { name: "Catena Malbec", subName: "AR | Bottle", price: 59 },
  { name: "La Vieille Rosé", subName: "FR | 750 ml", price: 44 },
  { name: "Rhino Pale Ale", subName: "CA | 750 ml", price: 31 },
  { name: "Irish Guinness", subName: "IE | 750 ml", price: 26 },
];

const cocktails = [
  {
    name: "Aperol Spritz",
    subName: "Aperol | Villa Marchesi prosecco | soda | 30ml",
    price: 20,
  },
  {
    name: "Dark 'N' Stormy",
    subName: "Dark rum | Ginger beer | Slice of lime. ",
    price: 16,
  },
  { name: "Daiquiri", subName: "Rum | Citrus juice | Sugar", price: 10 },
  {
    name: "Old Fashioned",
    subName: "Bourbon | Brown sugar | Angostura Bitters",
    price: 31,
  },
  {
    name: "Negroni",
    subName: "Gin | Sweet Vermouth | Campari | Orange garnish",
    price: 26,
  },
];

function Special() {
  return (
    <div className=" md:w-[71rem] md:h-[60rem] my-10">
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
        <div className="absolute top-1/2 left-1/2 -translate-1/2 md:translate-0 md:static w-[17rem] h-[31rem] bg-red-500">
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
