import React from "react";
import Hero from "./Hero";
import About from "./About";
import Special from "./Special";
import Tribute from "./Tribute";

function Main({ mobileScreen }) {
  return (
    <main className=" px-6 bg-black min-h-screen w-full">
      <Hero />
      <About mobileScreen={mobileScreen} />
      <Special />
      <Tribute />
    </main>
  );
}

export default Main;
