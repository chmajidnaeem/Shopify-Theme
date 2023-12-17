


"use client";
// import React, {useRef, useState} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
// import Image from "next/image";
import Symbol from "/public/images/symbol.png";
import JL from "/public/images/cl1.jpg";
import AS from "/public/images/FT.jpg";
import SA from "/public/images/YM.jpg"
import CEO from "/public/images/CEO.jpg"
import React from "react";
import HeroSlider from "../shared/HeroSlider";
import Image from "next/image";
import BG from "/public/images/bg.png";
import BlogSlider from "../shared/BlogSlider"
import mainnew from '../../../../public/images/mainnew.png'
import worknew from '../../../../public/images/worknew.png'
import girl from '../../../../public/images/girl.png'
import Hero01 from '../../../../public/images/Hero01.png'
import Hero02 from '../../../../public/images/Hero02.png'
import Hero03 from '../../../../public/images/Fitsense - Gym and Fitness HTML Template_files/2.png'

const Hero = () => {
  return (
    <>
      <Swiper pagination={{
        dynamicBullets: true,
      }}
        modules={[Pagination]} className="mySwiper bg-[url('/images/bg.png')] h-auto py-10">
        <SwiperSlide>
          <div>
            <div className="h-screen flex justify-center gap-10 items-center pt-28">
              <div className="align-start">
                <p className="text-white text-2xl"><span className="text-[#FAFF00]">|</span> ARE YOU READY TO</p>
                <h1 className="text-7xl font-semibold text-white"><span className="text-[#FAFF00]">GET FIT</span>, STRONG<br />& MOTIVATED!</h1>
              </div>
              <Image alt="equip" height={450} width={450} src={Hero01} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="h-screen flex items-center">
              <Image alt="equip" height={900} width={900} src={Hero02} className="mt-32" />
              <div className="">
                <h1 className="text-6xl font-semibold text-white text-8xl">BUILD <span className="text-[#FAFF00]"><br />YOUR BODY</span></h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="h-screen flex  justify-center items-center pt-24">
              <div className="align-start">
                <h1 className="text-9xl font-semibold text-white"><span className="text-[#FAFF00]">WORKOUT</span><br />WITH ME</h1>
              </div>
              <Image alt="equip" height={600} width={600} src={Hero03} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </>
  );
};

export default Hero;
