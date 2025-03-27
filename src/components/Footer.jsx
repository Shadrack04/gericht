import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import Intro from "./Intro";
import Button from "./Button";
import footerLogo from "/images/footerlogo.png";

function Footer() {
  return (
    <footer className="footer relative flex flex-col items-center justify-between gap-14 min-h-[42rem] w-full pb-4 z-20">
      <div className="absolute inset-0 bg-black/55 -z-10"></div>
      <div className=" flex flex-col items-center justify-center border-1 border-t-0 border-[#DCCA8733] w-full md:w-[50%] bg-[#0C0C0C] shadow-4xl py-6 mx-auto">
        <Intro title="Newsletter" />
        <p className=" text-primary text-[1.6rem] font-medium">
          Subscribe to Our Newsletter
        </p>
        <p className=" text-gray text-[1rem] leading-14">
          And never miss latest Updates!
        </p>
        <div className=" flex items-center justify-center gap-4 w-full">
          <input
            type="text"
            placeholder="Email Address"
            className=" border-2 border-[#DCCA8733] w-[10rem] md:w-[15rem] placeholder:text-gray placeholder:text-sm px-4 py-1"
          />
          <Button>Subscribe</Button>
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-3 items-center justify-center mx-auto gap-4 md:gap-4">
        <div className=" text-center">
          <h3 className=" text-white text-2xl my-4">Contact Us</h3>
          <p className=" text-gray">9 W 53rd St, New York, NY 10019, USA</p>
          <p className=" text-gray">
            +1 212-344-1230 <br />
            +1 212-555-1230
          </p>
        </div>
        <div className=" text-center">
          <img src={footerLogo} alt="Logo" className="w-40 h-12 my-6 mx-auto" />
          <p className=" text-white w-[16rem] md:w-[22rem]">
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <div className=" flex items-center justify-center my-4">
            <Intro />
          </div>
          <div className=" flex items-center justify-center gap-6 my-4">
            <FaFacebookF className=" text-white size-8" />
            <FiTwitter className=" text-white size-8" />
            <FaInstagram className=" text-white size-8" />
          </div>
        </div>
        <div>
          <h3 className=" text-white text-2xl text-center my-4">
            Working Hours
          </h3>
          <p className=" text-gray text-center">
            Monday-Friday: <br />
            08:00 am -12:00 am
          </p>
          <p className=" text-gray text-center">
            Saturday-Sunday: <br />
            07:00am -11:00 pm
          </p>
        </div>
      </div>
      <div className=" my-2">
        <p className=" text-gray text-center">
          2021 Gerícht. All Rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
