import React from "react";
import Intro from "./Intro";
import chef from "/images/chef.png";
import quot from "/images/quot.png";

function Tribute() {
  return (
    <section className=" z-20 relative tribute flex flex-col md:flex-row items-center justify-center gap-10 w-full h-[58rem] md:h-[40rem] my-12 md:my-0">
      <div className="absolute inset-0 bg-black/55 -z-10"></div>
      <div className=" flex items-center justify-center z-10 relative w-[20rem] h-[26rem] md:h-[28rem]">
        <img src={chef} alt="Image of a chef" className=" h-full w-full z-20" />
      </div>
      <div className="flex flex-col justify-center gap-2 md:w-[26rem] h-[29rem]">
        <div className=" my-2 md:my-1">
          <Intro title="Chef’s Word" />
        </div>
        <h2 className=" text-[2.4rem] md:text-[3rem] text-primary md:mb-4 ">
          What we believe in
        </h2>
        <p className=" my-12 md:my-0 inline float-left text-white text-[1rem]">
          <span className="">
            <img src={quot} alt="Quotation mark" className=" inline size-8 " />
          </span>
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
        <div>
          <p className="text-primary text-[2rem]">Kevin Luo</p>
          <p className="chef-p text-[1rem] text-gray">Chef & Founder</p>
        </div>
        <div className=" mt-6">
          <p className="signature text-white text-[4rem]">Kevin Luo</p>
        </div>
      </div>
    </section>
  );
}

export default Tribute;
