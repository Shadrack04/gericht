import React from "react";
import G from "/images/G.png";
import knife from "/images/knife.png";

import AboutCard from "./AboutCard";

function About({ mobileScreen }) {
  return (
    <article className="about relative flex flex-col md:flex-row items-center justify-center md:gap-16 h-[40rem]">
      <AboutCard
        mobileScreen={mobileScreen}
        title="About Us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
        adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet
        eu proin mauris et."
        align="end"
      />
      <div className=" flex items-center justify-center">
        <img
          src={G}
          alt="An svg image of G"
          className=" mx-auto left-1/2 translate-x-[-50%] absolute size-[24rem] z-0"
        />
        <img
          src={knife}
          alt="An image of a knife"
          className=" absolute top-1/2 translate-y-[-50%] w-12 h-[30rem] z-10"
        />
      </div>
      <AboutCard
        mobileScreen={mobileScreen}
        title="Our History"
        description="Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet."
        align="start"
      />
    </article>
  );
}

export default About;
