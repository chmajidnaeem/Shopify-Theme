import React from "react";
import HeroSlider from "../shared/HeroSlider";
import Image from "next/image";
import BG from "/public/images/bg.png";
import BlogSlider from "../shared/BlogSlider"
const Hero = () => {
  return (
    <>
      <div
        className="bg-cover bg-center relative h-96"
        style={{ backgroundImage: 'url("/images/bg.png")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 h-screen flex flex-col justify-center items-center text-white">
          {/* <HeroSlider /> */}
          {/* <BlogSlider/> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
