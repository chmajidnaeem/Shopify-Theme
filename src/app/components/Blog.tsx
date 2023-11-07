import React from "react";
import Image from "next/image";
import BlogCp from "../../../public/blog.jpeg";
import Blog201 from "../../../public/blog201.webp";
import Blog101 from "../../../public/blog101.webp";
import Link from "next/link";
import ImageCarousel from "./Slider";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { GoCommentDiscussion } from "react-icons/go";
import { FaGreaterThan } from "react-icons/fa6";

const Blog = () => {
  return (
    <div>
      {/* image section  */}
      <div className="">
        <div className="relative">
          <Image width={1370} src={BlogCp} alt="cp" className="mx-auto h-72" />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[90px] font-bold text-white">
            News
          </h1>
        </div>
        <div className="text-white text-xl flex items-center justify-center absolute top-48 font-bold left-[615px]">
          <Link href="/" className="hover:text-green duration-700">Home</Link>
          <span className="mx-2 "> <FaGreaterThan /> </span>
          <Link href="/">News</Link>
        </div>
      </div>
      <div className="flex mt-28">
        {/* left side  */}
        <div className="w-[500px] pl-12 ">
          <div>
            <div className="w-[300px] h-[60px] bg-gray flex justify-start items-center border-l-green mt-16 border-4 border-gray">
              <h4 className="text-xl font-bold pl-6">Tags</h4>
            </div>
            <div className="grid grid-cols-2 mt-5 pl-2 pr-24 gap-5">
              <button className="py-3 border-black bg-gray justify-center flex  text-lg font-semibold hover:bg-black hover:text-white">
                Equipments
              </button>
              <button className="py-3 border-black bg-gray justify-center flex  text-lg font-semibold hover:bg-black hover:text-white">
                Workout
              </button>
              <button className="py-3 border-black bg-gray justify-center flex text-lg font-semibold hover:bg-black hover:text-white">
                Tarining
              </button>
            </div>
            <div className="w-[300px] h-[60px] bg-gray flex justify-start items-center border-l-green mt-16 border-4 border-gray">
              <h4 className="text-xl font-bold pl-6">Recent Articles</h4>
            </div>
            <div className="pr-9">
              <div className="flex justify-start mt-8">
                <Image width={74} src={Blog201} alt="cp" className="h-[90px]" />
                <div className="pl-5 ">
                  <p className="text-green text-xl">July 20</p>
                  <p className="text-xl font-medium hover:text-green">
                    Make yourself more define
                  </p>
                </div>
              </div>
              <div className="flex justify-start mt-8">
                <Image width={74} src={Blog201} alt="cp" className="h-[90px]" />
                <div className="pl-5 mt-2">
                  <p className="text-green text-xl">July 20</p>
                  <p className="text-xl font-medium hover:text-green">
                    Aerobic exercise improves cardiovascu...
                  </p>
                </div>
              </div>
              <div className="flex justify-start mt-8">
                <Image width={74} src={Blog201} alt="cp" className="h-[90px]" />
                <div className="pl-5 mt-2">
                  <p className="text-green text-xl">July 20</p>
                  <p className="text-xl font-medium hover:text-green">
                    Push forward until you get what you need
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[300px] h-[60px] bg-gray flex justify-start items-center border-l-green mt-16 border-4 border-gray">
              <h4 className="text-xl font-bold pl-6">Hot Deals</h4>
            </div>

            <ImageCarousel />
            <div className="w-[300px] h-[60px] bg-gray flex justify-start items-center border-l-green mt-16 border-4 border-gray">
              <h4 className="text-xl font-bold pl-6">New Arrival</h4>
            </div>
            <div className="flex justify-start mt-8">
              <Image width={112} src={Blog201} alt="cp" className="h-[112px]" />
              <div className="pl-5 mt-8">
                <p className="text-xl font-medium hover:text-green">High Wasit Yoga Pants</p>
                <p className="text-green text-xl">$35.00</p>
              </div>
            </div>
            <div className="flex justify-start mt-8">
              <Image width={112} src={Blog201} alt="cp" className="h-[112px]" />
              <div className="pl-5 mt-8">
                <p className="text-xl font-medium hover:text-green">Sports Wear Set for Women</p>
                <p className="text-green text-xl">$35.00</p>
              </div>
            </div>
          </div>
        </div>
        {/* right side  */}
        <div className="w-[1130px] mt-16">
          <div className="grid grid-cols-2 gap-y-24 ">
            <div>
              <div className="relative">
                <Image
                  width={410}
                  src={Blog201}
                  alt="cp"
                  className="h-[250px] hover:opacity-80"
                />
                <div className="bg-green p-1 w-24 absolute top-48 right-48 flex gap-3">
                  <FaRegCalendarAlt />
                  <p className="font-medium">July 20</p>
                </div>
                <div className="flex space-x-4 mt-8 justify-center pr-10">
                  <span className="mt-1.5 pr-2">
                    <IoPersonCircleOutline />
                  </span>
                  John Mathew <span>|</span>
                  <span className="mt-1.5 pr-2">
                    <GoCommentDiscussion />
                  </span>
                  1 Comment
                </div>
                <p className="text-3xl font-bold text-center pr-10 hover:text-green mt-4">
                  Make yourself more define
                </p>
                <p className="text-center text-green pr-10 mt-4">
                  Rhoncus aenean feugiat ut eros et nisl sagittis vestibulum.
                  Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet
                  feugiat, pede....
                </p>
                <div className="text-xl underline-offset-2 underline hover:text-green text-center pr-10 mt-4">
                  READ MORE
                </div>
              </div>
            </div>
            {/* //////////////////////////////////////// */}
            <div>
              <div className="relative">
                <Image
                  width={410}
                  src={Blog201}
                  alt="cp"
                  className="h-[250px] hover:opacity-80"
                />
                <div className="bg-green p-1 w-24 absolute top-48 right-48 flex gap-3">
                  <FaRegCalendarAlt />
                  <p className="font-medium">July 20</p>
                </div>
                <div className="flex space-x-4 mt-8 justify-center pr-10">
                  <span className="mt-1.5 pr-2">
                    <IoPersonCircleOutline />
                  </span>
                  John Mathew <span>|</span>
                  <span className="mt-1.5 pr-2">
                    <GoCommentDiscussion />
                  </span>
                  1 Comment
                </div>
                <p className="text-3xl font-bold text-center pr-10 hover:text-green mt-4">
                  Make yourself more define
                </p>
                <p className="text-center text-green pr-10 mt-4">
                  Rhoncus aenean feugiat ut eros et nisl sagittis vestibulum.
                  Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet
                  feugiat, pede....
                </p>
                <div className="text-xl underline-offset-2 underline hover:text-green text-center pr-10 mt-4">
                  READ MORE
                </div>
              </div>
            </div>
            {/* //////////////////////////////////////// */}
            <div>
              <div className="relative">
                <Image
                  width={410}
                  src={Blog201}
                  alt="cp"
                  className="h-[250px] hover:opacity-80"
                />
                <div className="bg-green p-1 w-24 absolute top-48 right-48 flex gap-3">
                  <FaRegCalendarAlt />
                  <p className="font-medium">July 20</p>
                </div>
                <div className="flex space-x-4 mt-8 justify-center pr-10">
                  <span className="mt-1.5 pr-2">
                    <IoPersonCircleOutline />
                  </span>
                  John Mathew <span>|</span>
                  <span className="mt-1.5 pr-2">
                    <GoCommentDiscussion />
                  </span>
                  1 Comment
                </div>
                <p className="text-3xl font-bold text-center pr-10 hover:text-green mt-4">
                  Make yourself more define
                </p>
                <p className="text-center text-green pr-10 mt-4">
                  Rhoncus aenean feugiat ut eros et nisl sagittis vestibulum.
                  Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet
                  feugiat, pede....
                </p>
                <div className="text-xl underline-offset-2 underline hover:text-green text-center pr-10 mt-4">
                  READ MORE
                </div>
              </div>
            </div>
            {/* //////////////////////////////////////// */}
            <div>
              <div className="relative">
                <Image
                  width={410}
                  src={Blog201}
                  alt="cp"
                  className="h-[250px] hover:opacity-80"
                />
                <div className="bg-green p-1 w-24 absolute top-48 right-48 flex gap-3">
                  <FaRegCalendarAlt />
                  <p className="font-medium">July 20</p>
                </div>
                <div className="flex space-x-4 mt-8 justify-center pr-10">
                  <span className="mt-1.5 pr-2">
                    <IoPersonCircleOutline />
                  </span>
                  John Mathew <span>|</span>
                  <span className="mt-1.5 pr-2">
                    <GoCommentDiscussion />
                  </span>
                  1 Comment
                </div>
                <p className="text-3xl font-bold text-center pr-10 hover:text-green mt-4">
                  Make yourself more define
                </p>
                <p className="text-center text-green pr-10 mt-4">
                  Rhoncus aenean feugiat ut eros et nisl sagittis vestibulum.
                  Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet
                  feugiat, pede....
                </p>
                <div className="text-xl underline-offset-2 underline hover:text-green text-center pr-10 mt-4">
                  READ MORE
                </div>
              </div>
            </div>
            {/* //////////////////////////////////////// */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
