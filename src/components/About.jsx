import React from "react";
import G from "/images/G.png";
import knife from "/images/knife.png";

import AboutCard from "./AboutCard";

function About() {
  return (
    <article className="about z-20 relative flex flex-col md:flex-row items-center justify-between md:justify-center md:gap-16 py-12 min-h-[40rem]">
      <div className="absolute inset-0 bg-black/55 -z-10"></div>
      <AboutCard
        // mobileScreen={mobileScreen}
        containerClassName="md:text-end"
        title="About Us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
        adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet
        eu proin mauris et."
        // align="end"
      />
      <div className="relative h-[26rem] mt-8 md:static flex items-center justify-center">
        <img
          src={G}
          alt="An svg image of G"
          className=" mx-auto left-1/2 md:translate-x-[-50%] md:absolute size-[10rem] md:size-[18rem] z-0"
          loading="lazy"
        />
        <img
          src={knife}
          alt="An image of a knife"
          className=" absolute md:top-1/2 md:translate-y-[-50%] w-12 h-[22rem] md:h-[30rem] z-10"
        />
      </div>
      <AboutCard
        // mobileScreen={mobileScreen}
        containerClassName="md:text-start"
        title="Our History"
        description="Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet."
        // align="start"
      />
    </article>
  );
}

export default About;
