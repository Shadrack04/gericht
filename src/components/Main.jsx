import React from "react";
import Hero from "./Hero";
import About from "./About";
import Special from "./Special";
import Tribute from "./Tribute";
import VideoCard from "./VideoCard";
import Laurels from "./Laurels";
import PhotoGallery from "./PhotoGallery";
import FindUs from "./FindUs";

function Main({ mobileScreen }) {
  return (
    <main className="px-6 md:px-auto bg-black w-full">
      <Hero />
      <About mobileScreen={mobileScreen} />
      <Special />
      <Tribute />
      <VideoCard />
      <Laurels />
      <PhotoGallery />
      <FindUs />
    </main>
  );
}

export default Main;
