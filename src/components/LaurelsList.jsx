import React from "react";
import { laurels } from "../data/laurels";

export default function LaurelsList() {
  return (
    <ul className=" grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10">
      {laurels.map((laurel) => (
        <Laurel key={laurel.name} laurel={laurel} />
      ))}
    </ul>
  );
}

function Laurel({ laurel }) {
  const { name, description, image } = laurel;
  return (
    <li className=" flex items-center gap-4">
      <img src={image} alt={name} className=" size-12" />
      <div className="flex flex-col justify-center">
        <p className=" text-primary text-[1rem]">{name}</p>

        <p className=" text-gray text-[0.7rem] leading-5 font-openSan w-36">
          {description}
        </p>
      </div>
    </li>
  );
}
