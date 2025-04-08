import React from "react";
import Intro from "./Intro";
import chef from "/images/chef.png";
import quot from "/images/quot.png";

function Tribute() {
  return (
    <section className=" z-20 relative tribute flex flex-col md:flex-row items-center justify-center gap-18 w-full min-h-[58rem] md:h-[40rem] my-18 md:py-32">
      <div className="absolute inset-0 bg-black/55 -z-10"></div>
      <div className=" md:w-[26rem] min-h-[26rem] ">
        <img
          src={chef}
          alt="Image of a chef"
          className=" h-full w-full"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-center gap-2 md:w-[22rem] min-h-[29rem]">
        <div className=" my-1 md:-my-2">
          <Intro title="Chef’s Word" />
        </div>
        <h2 className=" text-[2.4rem] md:text-[2.6rem] font-medium text-primary md:mb-8 ">
          What We Believe In
        </h2>
        <div className=" relative -mb-2">
          <img
            src={quot}
            alt="Quotation mark"
            className=" absolute size-8 my-0 left-0 bottom-0"
          />
          <p className=" italic text-gray text-[.8rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          </p>
        </div>
        <p className="text-gray italic text-[0.8rem]">
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>

        <div className="flex flex-col gap-1 mt-8 mb-4">
          <p className="text-primary text-[1.2rem] tracking-wider">Kevin Luo</p>
          <p className="chef-p text-[.8rem] text-gray">Chef & Founder</p>
        </div>
        <div className=" mt-6">
          <p className="signature text-gray text-[3rem]">Kevin Luo</p>
        </div>
      </div>
    </section>
  );
}

export default Tribute;
