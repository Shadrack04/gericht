import React from "react";
import G from "/images/G.png";
import knife from "/images/knife.png";

import AboutCard from "./AboutCard";

function About() {
  return (
    <article className=" bg-[#040404] relative flex items-center justify-center gap-16 md:h-[30rem]">
      <AboutCard
        title="About Us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
        adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet
        eu proin mauris et."
        align="end"
      />
      {/* <div className=" absolute top-1/2 left-1/2 transform translate-[-50%]"> */}
      <img
        src={G}
        alt="An svg image of G"
        className=" mx-auto left-1/2 translate-x-[-50%] absolute size-[24rem]"
      />
      <img
        src={knife}
        alt="An image of a knife"
        className=" w-12 h-[30rem] z-50"
      />
      {/* </div> */}
      <AboutCard
        title="Our History"
        description="Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet."
        align="start"
      />
    </article>
  );
}

export default About;
