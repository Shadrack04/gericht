import React, { useState } from "react";
import Intro from "./Intro";
import Button from "./Button";
import Photos from "./Photos";

function PhotoGallery() {
  const [isHover, setIsHover] = useState(false);
  return (
    <section className=" flex flex-col-reverse md:flex-row items-center justify-end gap-0 py-24">
      <div className=" md:w-[24rem] ">
        <div className=" mb-4">
          <Intro title="Instagram" />
          <p className=" text-primary text-[2.6rem] font-bold tracking-wide">
            Photo Gallery
          </p>
        </div>
        <p className=" text-gray text-[.8rem] md:w-[20rem] tracking-wide ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <div className=" my-4">
          <Button>View More</Button>
        </div>
      </div>
      <Photos isHover={isHover} setIsHover={setIsHover} />
    </section>
  );
}

export default PhotoGallery;
