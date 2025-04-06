import React from "react";
import heroImage from "/images/hero.png";
import Spoon from "./Spoon";
import barInverted from "/images/bar-inverted.png";
import gerictInverted from "/images/gericht-inverted.png";
import Button from "./Button";
import Intro from "./Intro";

function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center py-6  w-full h-[44rem] md:h-[36rem] mx-auto">
      <img
        src={gerictInverted}
        alt="Gericht text"
        className="hidden md:block absolute top-50 left-10"
        loading="lazy"
      />
      <img
        src={barInverted}
        alt="Bar text"
        className="hidden md:block absolute top-74 left-10"
      />
      <div className=" w-full md:w-[24rem] md:min-h-[30rem] flex flex-col gap-2 md:mt-16">
        <Intro title="Chase the new Flavour" />
        <h1 className="dining text-4xl md:text-[4rem] text-primary font-extrabold md:w-[20rem]">
          The key to Fine Dining
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
      <div className="relative w-full md:w-[28rem] h-full md:h-[32rem]">
        <img src={heroImage} alt="Hero image" className=" absolute inset-0" />
      </div>
    </section>
  );
}

export default Hero;
