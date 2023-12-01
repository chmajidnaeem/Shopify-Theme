"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
import BLOG1 from "/public/images/blog1.jpg";
import BLOG2 from "/public/images/blog2.jpg";
import BLOG3 from "/public/images/blog3.jpg";
import BLOG4 from "/public/images/blog4.jpg";
import BLOG5 from "/public/images/blog5.jpg";
import BLOG6 from "/public/images/blog6.jpg";
import BLOG7 from "/public/images/blog7.jpg";
import BLOG8 from "/public/images/blog8.jpg";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="-mb-8 sm:mb-[135px] sm:uppercase mt-10 lg:mt-20">
            <Image src={BLOG1} alt="blog" width={700} height={500} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 lg:mt-20">
            <Image src={BLOG2} alt="blog" width={700} height={500} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 lg:mt-20">
            <Image src={BLOG3} alt="blog" width={700} height={500} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 lg:mt-20">
            <Image src={BLOG4} alt="blog" width={700} height={500} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 lg:mt-20">
            <Image src={BLOG5} alt="blog" width={700} height={500} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 lg:mt-20">
            <Image src={BLOG6} alt="blog" width={700} height={500} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 lg:mt-20">
            <Image src={BLOG7} alt="blog" width={700} height={500} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 lg:mt-20">
            <Image src={BLOG8} alt="blog" width={700} height={500} />
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
