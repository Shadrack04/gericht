import React from "react";
import chef from "/images/chef.png";
import quot from "/images/quot.png";

function Tribute() {
  return (
    <section className=" relative tribute flex items-center justify-center gap-10 w-full h-[40rem]">
      <div className="absolute inset-0 bg-black/55"></div>
      <div className=" flex items-center justify-center z-10 relative w-[21rem] h-[29rem] bg-black">
        <img
          src={chef}
          alt="Image of a chef"
          className=" h-[95%] w-[95%] z-20"
        />
        <div className=" -z-10 absolute top-0 right-0 bg-[#DCCA87] size-[16rem]"></div>
        <div className=" -z-10 absolute bottom-0 left-0 bg-[#DCCA87] size-[16rem]"></div>
      </div>
      <div className="flex flex-col justify-center gap-2 w-[26rem] h-[29rem]">
        <p className=" text-[1rem] md:text-[1.2rem] text-white">Chef’s Word</p>
        <h2 className=" text-[3rem] text-[#DCCA87] mb-4 ">
          What we believe in
        </h2>
        <p className=" inline float-left text-white text-[1rem]">
          <span className="">
            <img src={quot} alt="Quotation mark" className=" inline " />
          </span>
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
        <div>
          <p className="text-[#DCCA87] text-[2rem]">Kevin Luo</p>
          <p className="chef-p text-[1rem] text-[#aaaaaa]">Chef & Founder</p>
        </div>
        <div className=" mt-6">
          <p className="signature text-white text-[4rem]">Kevin Luo</p>
        </div>
      </div>
    </section>
  );
}

export default Tribute;
