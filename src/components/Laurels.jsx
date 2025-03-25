import React from "react";
import bite from "/images/bite.png";
import stakewithG from "/images/stakewithG.png";
import Intro from "./Intro";
import LaurelsList from "./LaurelsList";

function Laurels() {
  return (
    <section className=" relative laurels w-full h-[36rem] z-20 p-8">
      <div className="absolute inset-0 bg-black/55 -z-10"></div>
      <div className=" size-18">
        <img src={bite} alt="Delight in every bite" className=" size-full" />
      </div>
      <div className=" flex items-center justify-center gap-12">
        <div>
          <Intro
            title="Awards & recognition"
            align="flex flex-col items-start"
          />

          <h2 className=" text-[3rem] text-primary mb-4 ">Our Laurels</h2>
          <LaurelsList />
        </div>
        <div className=" h-[24rem] w-[18rem]">
          <img
            src={stakewithG}
            alt="image of a stake with a letter g"
            className=" w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Laurels;
