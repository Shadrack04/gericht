import React from "react";
import glass from "/images/glass.png";
import Intro from "./Intro";
import Button from "./Button";

function FindUs() {
  return (
    <section className="findus relative flex flex-col-reverse md:flex-row items-center justify-center gap-10 py-10 z-20">
      <div className="absolute inset-0 bg-black/55 -z-10"></div>
      <div className=" text-center md:text-start">
        <div className=" my-4 flex flex-col items-center md:items-start">
          <Intro title="Contact" />
          <p className=" text-primary text-[3rem] pb-10">Find Us</p>
        </div>
        <p className=" text-gray text-[1rem] my-4">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <div className=" my-4">
          <p className=" text-primary text-[1.4rem]">Opening Hours</p>
          <p className=" text-gray text-[1rem]">
            Mon - Fri: 10:00 am - 02:00 am
          </p>
          <p className=" text-gray text-[1rem]">
            Sat - Sun: 10:00 am - 03:00 am
          </p>
        </div>
        <div className=" my-8">
          <Button>Visit Us</Button>
        </div>
      </div>
      <div className=" w-[20rem] h-[24rem]">
        <img
          src={glass}
          alt="image of a wine glass"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}

export default FindUs;
