import React from "react";
import heroImage from "/images/hero.png";

function Hero() {
  return (
    <section className=" flex flex-col md:flex-row items-center justify-center gap-10 max-w-[61.2rem] h-[46rem] pt-8 mx-auto">
      <div className=" w-full md:w-[28rem] md:h-[30rem] flex flex-col justify-center gap-4">
        <p className=" text-[1rem] md:text-[1.2rem] text-white">
          Chase the new Flavour
        </p>
        <h1 className="dining text-4xl md:text-[5.6rem] text-primary font-bold">
          The key to Fine dining
        </h1>
        <p className=" text-sm md:text-[1rem] font-sans text-[#AAAAAA] md:w-[25rem]">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <div className=" flex w-full justify-center md:justify-start">
          <button className=" bg-[#DCCA87] py-[8px] px-[32px] text-[1rem] font-bold text-[#0C0B08]">
            Explore Menu
          </button>
        </div>
      </div>
      <div className="relative w-full md:w-[41rem] h-full">
        <img src={heroImage} alt="Hero image" className=" absolute inset-0" />
      </div>
    </section>
  );
}

export default Hero;
