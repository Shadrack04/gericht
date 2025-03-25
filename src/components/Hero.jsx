import React from "react";
import heroImage from "/images/hero.png";
import Spoon from "./Spoon";
import barInverted from "/images/bar-inverted.png";
import gerictInverted from "/images/gericht-inverted.png";
import Button from "./Button";

function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center  gap-16 w-full h-[46rem] md:h-[36rem] mx-auto">
      <img
        src={gerictInverted}
        alt="Gericht text"
        className=" absolute top-50 left-10"
      />
      <img
        src={barInverted}
        alt="Bar text"
        className=" absolute top-74 left-10"
      />
      <div className=" w-full md:w-[28rem] md:h-[30rem] flex flex-col gap-2 mt-16">
        <div>
          <p className=" text-[1rem] md:text-[1.1rem] text-white">
            Chase the new Flavour
          </p>
          <Spoon />
        </div>
        <h1 className="dining text-4xl md:text-[5rem] text-primary font-bold">
          The key to Fine dining
        </h1>
        <p className=" text-sm md:text-[.8rem] font-sans text-[#AAAAAA] md:w-[20rem] tracking-wide">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <div className=" flex w-full justify-center md:justify-start mt-4">
          <Button>Explore Menu</Button>
        </div>
      </div>
      <div className="relative w-full md:w-[24rem] h-full md:h-[30rem]">
        <img src={heroImage} alt="Hero image" className=" absolute inset-0" />
      </div>
    </section>
  );
}

export default Hero;
