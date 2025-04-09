import React from "react";
import heroImage from "/images/hero.png";
import barInverted from "/images/bar-inverted.png";
import gerictInverted from "/images/gericht-inverted.png";
import Button from "./Button";
import Intro from "./Intro";

function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 py-6  mb-12 md:mb-18  w-full h-[44rem] md:h-[36rem] mx-auto">
      <img
        src={gerictInverted}
        alt="Gericht text"
        className="hidden lg:block absolute top-50 left-[5%]"
        loading="lazy"
      />
      <img
        src={barInverted}
        alt="Bar text"
        className="hidden lg:block absolute top-74 left-[5%]"
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
        <div className=" flex w-full justify-start mt-4">
          <Button>Explore Menu</Button>
        </div>
      </div>
      <div className=" w-full md:w-[28rem] h-full md:h-[31rem]">
        <img src={heroImage} alt="Hero image" className=" w-full h-full" />
      </div>
      <div className=" absolute bottom-0 mt-8">
        <p className=" text-white">
          01 <span className="">-</span> 02 03 04
        </p>
      </div>
    </section>
  );
}

export default Hero;
