import React from "react";
import HeroSlider from "../shared/HeroSlider";
import Image from "next/image";
import BG from "/public/images/bg.png";
import BlogSlider from "../shared/BlogSlider"

const Hero = () => {
  return (
    <>
      <div
        className="bg-cover bg-center relative h-100 mt-20"
        style={{ backgroundImage: 'url("/images/bg.png")' }}
      >
        
        <div className="absolute z-0 inset-0 bg-black opacity-50">
        
        </div>
       
        <div className="relative z-0 h-screen flex flex-col justify-center items-center text-white">
        <Image className="absolute" alt="equip" height={200} width={300}src="/images/WO.png" />
        <Image className="relative object-right" alt="equip" height={200} width={240}src="/images/workout.png" />
        
        <h1 className="text-white text-9xl  flex items-center justify-center absolute font-extrabold">Workout</h1>
       
          <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
          {/* <HeroSlider /> */}
          {/* <BlogSlider/> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
