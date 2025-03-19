import React from "react";
import Hero from "./Hero";
import About from "./About";

function Main({ mobileScreen }) {
  return (
    <main className=" px-6 bg-black min-h-screen w-full">
      <Hero />
      <About mobileScreen={mobileScreen} />
    </main>
  );
}

export default Main;
