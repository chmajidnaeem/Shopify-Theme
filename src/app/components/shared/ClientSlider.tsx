"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Symbol from "../../../../public/images/Symbol.png"
import JL from "/public/images/cl1.jpg";
import AS from "/public/images/FT.jpg";
import SA from "/public/images/YM.jpg"
import CEO from "/public/images/CEO.jpg"



export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div>
            <Image src={Symbol} alt="symbol" className="w-14 mx-auto mt-16" />
            <p className="mx-auto  lg:w-[1000px] leading-8 text-center mt-10">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn’t anything embarrassing
              hidden in the middle of some form, by injected humour, or
              randomised words which don’t look even slightly believable text.
            </p>
          </div>
          <div className="text-center mx-auto mt-10 uppercase mb-[135px]">
            <p>James Lives</p>
            <p className="text-green">Personal Tranier</p>
            <Image
              src={JL}
              alt="img"
              className="mt-5 text-center mx-auto rounded-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="">
            <Image src={Symbol} alt="symbol" className="w-14 mx-auto mt-16" />
            <p className="mx-auto  lg:w-[1000px] leading-8 text-center mt-10">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn’t anything embarrassing
              hidden in the middle of some form, by injected humour, or
              randomised words which don’t look even slightly believable text.
            </p>
          </div>
          <div className="text-center mx-auto mt-10 uppercase mb-[135px]">
            <p>Alex Snax</p>
            <p className="text-green">Fitness Tranier</p>
            <Image
              src={AS}
              alt="img"
              className="mt-5 text-center mx-auto rounded-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="">
            <Image src={Symbol} alt="symbol" className="w-14 mx-auto mt-16" />
            <p className="mx-auto  lg:w-[1000px] leading-8 text-center mt-10">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn’t anything embarrassing
              hidden in the middle of some form, by injected humour, or
              randomised words which don’t look even slightly believable text.
            </p>
          </div>
          <div className="text-center mx-auto mt-10 uppercase mb-[135px]">
            <p>Stive Alex</p>
            <p className="text-green">Yoga Mentor</p>
            <Image
              src={SA}
              alt="img"
              className="mt-5 text-center mx-auto rounded-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="">
            <Image src={Symbol} alt="symbol" className="w-14 mx-auto mt-16" />
            <p className="mx-auto  lg:w-[1000px] leading-8 text-center mt-10">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn’t anything embarrassing
              hidden in the middle of some form, by injected humour, or
              randomised words which don’t look even slightly believable text.
            </p>
          </div>
          <div className="text-center mx-auto mt-10 uppercase mb-[135px]">
            <p>James Lives</p>
            <p className="text-green">CEO</p>
            <Image
              src={CEO}
              alt="img"
              className="mt-5 text-center mx-auto rounded-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
