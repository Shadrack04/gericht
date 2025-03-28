import React from "react";
import Intro from "./Intro";
import Button from "./Button";
import Photos from "./Photos";

function PhotoGallery() {
  return (
    <section className=" flex flex-col-reverse md:flex-row items-center justify-end gap-4 py-12">
      <div className=" md:w-[24rem]">
        <Intro title="Instagram" />
        <p className=" text-primary text-[3rem] font-bold my-4">
          Photo Gallery
        </p>
        <p className=" text-gray text-[1rem] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <div className=" my-4">
          <Button>View More</Button>
        </div>
      </div>
      <Photos />
    </section>
  );
}

export default PhotoGallery;
