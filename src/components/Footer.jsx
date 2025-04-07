import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import Intro from "./Intro";
import Button from "./Button";
import footerLogo from "/images/footerLogo.svg";

function Footer() {
  return (
    <footer className="footer relative flex flex-col items-center gap-14 min-h-[42rem] w-full pb-18 z-20">
      <div className="absolute inset-0 bg-black/55 -z-10"></div>
      <div className=" flex flex-col items-center justify-center border-1 border-t-0 border-[#DCCA8733] w-full md:w-[70%] bg-[#0C0C0C] shadow-4xl py-8 mx-auto">
        <Intro title="Newsletter" />
        <p className=" text-primary text-[2.6rem] font-medium tracking-wide">
          Subscribe To Our Newsletter
        </p>
        <p className=" text-white text-[1rem] leading-14">
          And never miss latest Updates!
        </p>
        <div className=" flex items-center justify-center gap-4 w-full py-4">
          <input
            type="text"
            placeholder="Email Address"
            className="border-1 border-white outline-none focus:border-2 focus:border-[#DCCA8733] w-[10rem] md:w-[50%] placeholder:text-gray placeholder:text-sm px-4 py-2 rounded-sm"
          />
          <Button>Subscribe</Button>
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-3 items-center justify-center mx-auto gap-4 md:gap-16">
        <div className=" text-center">
          <h3 className=" text-white text-2xl my-4">Contact Us</h3>
          <p className=" text-gray text-[0.8rem]">
            9 W 53rd St, New York, NY 10019, USA
          </p>
          <p className=" text-gray text-[0.8rem]">
            +1 212-344-1230 <br />
            +1 212-555-1230
          </p>
        </div>
        <div className=" text-center md:mt-4">
          <img src={footerLogo} alt="Logo" className="w-40 h-12 my-6 mx-auto" />
          <p className=" text-white w-[16rem] md:w-[18rem] text-[0.8rem]">
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <div className=" flex items-center justify-center my-4">
            <Intro />
          </div>
          <div className=" flex items-center justify-center gap-6">
            <FaFacebookF className=" text-white size-4" />
            <FiTwitter className=" text-white size-4" />
            <FaInstagram className=" text-white size-4" />
          </div>
        </div>
        <div>
          <h3 className=" text-white text-2xl text-center my-4">
            Working Hours
          </h3>
          <p className=" text-gray text-center text-[0.8rem]">
            Monday-Friday: <br />
            08:00 am -12:00 am
          </p>
          <p className=" text-gray text-center text-[0.8rem]">
            Saturday-Sunday: <br />
            07:00am -11:00 pm
          </p>
        </div>
      </div>
      <div className="">
        <p className=" text-gray text-center text-[0.8rem]">
          2021 Gerícht. All Rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
