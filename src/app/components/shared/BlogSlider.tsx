"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import BLOG1 from "/public/images/blog1.jpg";
import BLOG2 from "/public/images/blog2.jpg";
import BLOG3 from "/public/images/blog3.jpg";
import BLOG4 from "/public/images/blog4.jpg";
import BLOG5 from "/public/images/blog5.jpg";
import BLOG6 from "/public/images/blog6.jpg";
import BLOG7 from "/public/images/blog7.jpg";
import BLOG8 from "/public/images/blog8.jpg";
import { FaStar } from "react-icons/fa6";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
          // when window width is <= 767px
          768:{
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <div className="-mb-8 sm:mb-[135px] sm:uppercase mt-20 ">
            <Image src={BLOG1} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
              Acrobatics
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10 invisible sm:visible">
              workout with Get six-pack
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6 invisible sm:visible">
              abs ‘Magic Mike’
            </p>
            <div className="lg:flex  items-center gap-5 text-[14px] lg:leading-10 invisible sm:visible">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-20">
            <Image src={BLOG2} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
              Gymnastics
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10 invisible sm:visible">
              Workout Condition For All
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6 invisible sm:visible">
              Around Fitness
            </p>
            <div className="lg:flex items-center gap-5 text-[14px] lg:leading-10 invisible sm:visible">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-20">
            <Image src={BLOG3} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">Yoga</p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10 invisible sm:visible">
              Meet our professional
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6 invisible sm:visible">
              Gymster Trainer’
            </p>
            <div className="lg:flex items-center gap-5 text-[14px] lg:leading-10 invisible sm:visible">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-20">
            <Image src={BLOG4} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
              Boot camps
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10 invisible sm:visible">
              Condition for all around
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6 invisible sm:visible">
              fitness classes
            </p>
            <div className="lg:flex items-center gap-5 text-[14px] lg:leading-10 invisible sm:visible">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-20">
            <Image src={BLOG5} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
              Crossfit
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10 invisible sm:visible">
              Our organized Training
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6 invisible sm:visible">
              center & workshop
            </p>
            <div className="lg:flex items-center gap-5 text-[14px] lg:leading-10 invisible sm:visible">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-20">
            <Image src={BLOG6} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
              Training Gyms
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10 invisible sm:visible">
              Meet our fitness
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6 invisible sm:visible">
              ambassador grace
            </p>
            <div className="lg:flex items-center gap-5 text-[14px] lg:leading-10 invisible sm:visible">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-20">
            <Image src={BLOG7} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
              Gymastics
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10 invisible sm:visible">
              Common workout mistakes
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6 invisible sm:visible">
              to avoid
            </p>
            <div className="lg:flex items-center gap-5 text-[14px] lg:leading-10 invisible sm:visible">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-20">
            <Image src={BLOG8} alt="blog" />
            <div>
              <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
                Crossfit
              </p>
              <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10 invisible sm:visible">
                Why you should go to yoga
              </p>
              <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6 invisible sm:visible">
                then gym
              </p>
              <div className="lg:flex items-center gap-5 text-[14px] lg:leading-10 invisible sm:visible">
                <p>October 19, 2022</p>
                <div className="flex gap-2">
                  <FaStar size={20} className="text-green" />
                  <FaStar size={20} className="text-green" />
                  <FaStar size={20} className="text-green" />
                  <FaStar size={20} className="text-green" />
                  <FaStar size={20} className="text-green" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-20">
            <Image src={BLOG6} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
              Training Gyms
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10 invisible sm:visible">
              Meet our fitness
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6 invisible sm:visible">
              ambassador grace
            </p>
            <div className="lg:flex items-center gap-5 text-[14px] lg:leading-10 invisible sm:visible">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-20">
            <Image src={BLOG7} alt="blog" />
            <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
              Gymastics
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10 invisible sm:visible">
              Common workout mistakes
            </p>
            <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6 invisible sm:visible">
              to avoid
            </p>
            <div className="lg:flex items-center gap-5 text-[14px] lg:leading-10 invisible sm:visible">
              <p>October 4, 2022</p>
              <div className="flex gap-2">
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
                <FaStar size={20} className="text-green" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-20">
            <Image src={BLOG8} alt="blog" />
            <div>
              <p className="text-xl sm:text-lg font-bold mt-4 sm:mt-8">
                Crossfit
              </p>
              <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-10 invisible sm:visible">
                Why you should go to yoga
              </p>
              <p className="font-semibold text-[16px] xl:text-[20px] lg:leading-6 invisible sm:visible">
                then gym
              </p>
              <div className="lg:flex items-center gap-5 text-[14px] lg:leading-10 invisible sm:visible">
                <p>October 19, 2022</p>
                <div className="flex gap-2">
                  <FaStar size={20} className="text-green" />
                  <FaStar size={20} className="text-green" />
                  <FaStar size={20} className="text-green" />
                  <FaStar size={20} className="text-green" />
                  <FaStar size={20} className="text-green" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
