


"use client";
// import React, {useRef, useState} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
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

const Hero = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper bg-[url('/images/bg.png')] h-auto py-10">
        <SwiperSlide>
          <div>
            <div className="h-screen flex  justify-center items-center pt-28">
              <Image alt="equip" height={800} width={800} src={mainnew} />
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="h-screen flex  justify-center items-center pt-36 pb-10">
              <Image alt="equip" height={600} width={600} src={worknew} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="h-screen flex  justify-center items-center pt-24">
              <Image alt="equip" height={700} width={700} src={girl} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </>
  );
};

export default Hero;
