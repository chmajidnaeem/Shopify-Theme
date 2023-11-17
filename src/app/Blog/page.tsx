import React from "react";
import Image from "next/image";
import BlogCp from "../../../public/blog.jpeg";
import Blg2 from "../../../public/blog2.jpg";
import Blog201 from "../../../public/blog201.webp";
import Link1 from "../../../public/Link → 1.jpg.png";
import Link2 from "../../../public/Link → 2.jpg.png";
import One from "../../../public/1.jpg.png";
import Two from "../../../public/2.jpg.png";
import Link3 from "../../../public/Link → 2.jpg.png";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { FaGreaterThan } from "react-icons/fa6";
import Wrapper from "../components/shared/Wrapper";
import { GiHouse } from "react-icons/gi";

const Blog2 = () => {
  return (
    <>
      {/* image section  */}
      <div className="">
        <div className="relative">
          <Image
            src={BlogCp}
            alt="cover photo"
            className="mx-auto md:h-72 h-[189px] md:w-full w-full"
          />
          <h1 className="absolute md:top-1/2 top-28 md:left-40 left-8 md:text-5xl text-base font-['Heebo'] font-bold tracking-[1] md:leading-[60px] uppercase text-white ">
            Common Workout Mistakes To Avoid
          </h1>
        </div>
        <div className="text-white text-xl flex items-center justify-center absolute md:top-48 top-28 font-bold md:left-[170px] left-[40px] mt-6">
          <GiHouse fontSize="1.5em" />
          <Link
            href="/"
            className="hover:text-green duration-700 pl-2 font-['Heebo'] md:leading-[32px] text-white text-sm md:text-xl"
          >
            Home
          </Link>
          <div className="bg-[#c1e502] md:w-2 w-2 md:h-2 h-1 rounded-full mx-4 mt-2" />
          <div className="font-['Heebo'] md:leading-[32px] text-green md:text-xl text-sm w-full duration-700">
            Common Workout Mistakes To Avoid
          </div>
        </div>
      </div>
      <Wrapper>
        <div className=" md:mt-28 mt-16 mb-40 justify-center relative md:flex md:px-24 ">
          {/* left side  */}
          <div className="md:w-[1060px] w-full md:px-8 px-3">
            <Image
              src={Blg2}
              alt="cp"
              className="mx-auto md:h-[478px] h-[200px] md:w-[880px] w-[403px]"
            />
            <div className="bg-black w-36 pl-2 h-10 flex items-center justify-center absolute md:top-[450px] top-[180px] md:left-[190px] left-[40px] ">
              <p className="font-['Heebo'] font-medium tracking-[1] leading-[32px] uppercase text-white w-5/6 mt-1 mb-0 absolute">
                GYMNASTICS
              </p>
            </div>
            <div className="bg-gray pt-16 md:px-6 px-3">
              <p className="flex gap-8 text-text-gray md:font-bold md:text-base text-sm font-['Heebo'] leading-[32px]">
                SEPTEMBER 19, 2022{" "}
                <span>
                  <li>0 COMMENTS</li>
                </span>
              </p>
              <p className="mt-6 text-text-gray  font-['Heebo'] leading-[32px]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using ‘Content
                here, content here’, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text
              </p>
              <h4 className="text-3xl font-['Heebo'] font-bold tracking-[1] leading-[40px] uppercase text-[#1d1d1d]  mt-8">
                WHY DO WE FITSENSE.
              </h4>
              <p className="mt-6 text-text-gray font-['Heebo'] leading-[32px]">
                fitsense storage system is designed to deliver a power output of
                10 MW for the operational life of the project. Wärtsilä also
                providing a long-term service agreement, including maintenance,
                spare parts, repairs, remote monitoring and performance
                guarantees.The order was placed in November 2020. This contract
                in Mexico marks an expansion of Wärtsilä’s smart storage
                technology to the region.
              </p>
              <div className="text-xl font-bold px-8 bg-white border-l-green mt-16 border-4 border-gray py-10">
                <p className="font-thin text-base text-text-gray font-['Heebo'] leading-[32px]">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <p className="text-green font-medium mt-3 font-['Heebo'] leading-[32px]">
                  – Michal Smart
                </p>
              </div>
              <p className="my-12 pr-10 text-text-gray font-['Heebo'] leading-[32px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4">
                <Image
                  // width={350}
                  src={One}
                  alt="cp"
                  className=" md:h-[304px] h-[220px] w-[276px] md:w-[390px] relative"
                />
                <Image
                  // width={350}
                  src={Two}
                  alt="cp"
                  className=" md:h-[304px] h-[220px] w-[276px] md:w-[390px] relative"
                />
              </div>
              <h4 className="text-3xl font-['Heebo'] font-bold tracking-[1] leading-[40px] mt-8">
                WHERE CAN I GET SOME?
              </h4>
              <p className="text-text-gray mt-4 font-['Heebo'] leading-[32px]">
                The fitsense storage system is designed to deliver a power
                output of 10 MW for the operational life of the project.
                Wärtsilä also providing a long-term service agreement, including
                maintenance, spare parts, repairs, remote monitoring and
                performance guarantees.The order was placed in November 2020.
                This contract in Mexico marks an expansion of Wärtsilä’s smart
                storage technology to the region.
              </p>
              <div className="px-8 mt-7 text-text-gray text-lg font-['Heebo'] leading-[36px] ">
                <ul className="my-2">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ul>
                <ul className="my-2">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ul>{" "}
                <ul className="my-2">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ul>{" "}
                <ul className="my-2">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ul>
              </div>
              <p className="text-text-gray mt-8 pb-8 font-['Heebo'] leading-[32px] ">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using ‘Content
                here, content here’, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text
              </p>
            </div>
            <div className="bg-white mt-24">
              <h4 className="text-3xl font-['Heebo'] font-bold tracking-[1] leading-[38px] uppercase">
                WRITE A REPLY OR COMMENT
              </h4>
              <p className="mt-3 text-text-gray font-['Heebo'] leading-[32px]">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-8">
                <input
                  type="text"
                  id="myInput"
                  placeholder="* Enter Name"
                  className="font-['Heebo'] bg-gray h-12 px-5 hover:border-green border outline-none border-gray"
                />

                <input
                  type="text"
                  id="myInput"
                  placeholder="* Enter Email"
                  className="font-['Heebo'] bg-gray h-12 px-5 hover:border-green border outline-none border-gray"
                />

                <input
                  type="text"
                  id="myInput"
                  placeholder="* Enter URL"
                  className="font-['Heebo'] bg-gray h-12 px-5 hover:border-green border outline-none border-gray"
                />
              </div>
              <div className="mt-7 relative w-full ">
                <input
                  type="text"
                  id="commentInput"
                  placeholder="Enter Your Comment"
                  className="font-['Heebo'] bg-gray w-full px-7 hover:border-green border outline-none border-gray py-2 h-56"
                />
              </div>
              <button
                className="bg-green text-black
           text-lg w-52 h-14 mt-10 hover:text-white hover:bg-black font-['Heebo'] font-medium tracking-[1] leading-[32px] uppercase
            "
              >
                POST COMMENT
              </button>
            </div>
          </div>

          {/* ////////////////////// */}
          {/* right side  */}
          <div className="md:w-[570px] w-full md:pr-10 px-3 mt-14 md:mt-0 md:px-0 bg-white  ">
            <div className="bg-[#eeeeee] relative flex flex-row justify-end w-full items-start p-5 px-12">
              <div className="border-solid border-white w-5/6 h-12 bg-white absolute top-8 left-8 flex flex-row justify-end items-start border">
                <button className="bg-[#1d1d1d] w-12 h-12 cursor-pointer" />
              </div>
              <div className="font-['Heebo'] text-[#757575] absolute top-12 left-12 h-12 w-1/6">
                Search...
              </div>
              <div className="text-center text-xl font-['Inter'] tracking-[1] leading-[54px] uppercase text-white relative w-1/6 mt-6 mb-3 pl-6">
                <AiOutlineSearch color="white" fontSize="1.4em" />
              </div>
            </div>

            <div className="p-8 mt-7 bg-gray">
              <h4 className="font-bold tracking-[1] leading-[32px] uppercase text-[#1d1d1d] text-2xl font-['Heebo']">
                CATEGORIES
              </h4>
              <div className="flex items-center mt-8">
                <FaGreaterThan
                  className="text-black text-1.7em transform hover:scale-125 transition-transform"
                  fontSize="0.8em"
                />
                <p className="ml-2 text-xl text-text-gray font-['Heebo'] ">
                  Acrobatics
                </p>
              </div>
              <div className="flex items-center mt-8">
                <FaGreaterThan
                  className="text-black text-1.7em transform hover:scale-125 transition-transform"
                  fontSize="0.8em"
                />
                <p className="ml-2 text-xl text-text-gray font-['Heebo'] ">
                  Boot Camps
                </p>
              </div>
              <div className="flex items-center mt-8">
                <FaGreaterThan
                  className="text-black text-1.7em transform hover:scale-125 transition-transform"
                  fontSize="0.8em"
                />
                <p className="ml-2 text-xl text-text-gray font-['Heebo'] ">
                  Training Gyms
                </p>
              </div>
              <div className="flex items-center mt-8">
                <FaGreaterThan
                  className="text-black text-1.7em transform hover:scale-125 transition-transform"
                  fontSize="0.8em"
                />
                <p className="ml-2 text-xl text-text-gray font-['Heebo'] ">
                  Crossfit
                </p>
              </div>
              <div className="flex items-center mt-8">
                <FaGreaterThan
                  className="text-black text-1.7em transform hover:scale-125 transition-transform"
                  fontSize="0.8em"
                />
                <p className="ml-2 text-xl text-text-gray font-['Heebo'] ">
                  Gymnastics
                </p>
              </div>
              <div className="flex items-center mt-8">
                <FaGreaterThan
                  className="text-black text-1.7em transform hover:scale-125 transition-transform"
                  fontSize="0.8em"
                />
                <p className="ml-2 text-xl text-text-gray font-['Heebo'] ">
                  Yoga
                </p>
              </div>
            </div>
            <div className="py-8 md:pl-8 pl-3 pr-3 mt-7 bg-gray">
              <h4 className="text-2xl font-['Heebo'] font-bold tracking-[1] leading-[32px] uppercase text-[#1d1d1d] w-full">
                RECENT POST
              </h4>
              <div className="pr-9">
                <div className="flex justify-start mt-8">
                  <Image
                    src={Link1}
                    alt="cp"
                    className="md:h-[90px] md:w-[90px] h-[120px] w-[110px] "
                  />
                  <div className="pl-5 ">
                    <p className="font-['Heebo'] font-bold tracking-[1] leading-[24px] uppercase text-[#1d1d1d] ">
                      WORKOUT WITH GET SIX-PACK ABS ‘MAGIC MIKE
                    </p>
                    <p className="font-thin mt-2 text-text-gray text-sm font-['Heebo'] leading-[22px]">
                      October 04, 2022
                    </p>
                  </div>
                </div>

                <div className="flex justify-start mt-8">
                  <Image
                    src={Link2}
                    alt="cp"
                    className="md:h-[90px] md:w-[90px] h-[120px] w-[110px] "
                  />
                  <div className="pl-5 ">
                    <p className="font-['Heebo'] font-bold tracking-[1] leading-[24px] uppercase text-[#1d1d1d] ">
                      WORKOUT WITH GET SIX-PACK ABS ‘MAGIC MIKE
                    </p>
                    <p className="font-thin mt-2 text-text-gray text-sm font-['Heebo'] leading-[22px]">
                      October 04, 2022
                    </p>
                  </div>
                </div>

                <div className="flex justify-start mt-8">
                  <Image
                    src={Link3}
                    alt="cp"
                    className="md:h-[90px] md:w-[90px] h-[120px] w-[110px] "
                  />
                  <div className="pl-5 ">
                    <p className="font-['Heebo'] font-bold tracking-[1] leading-[24px] uppercase text-[#1d1d1d] ">
                      WORKOUT WITH GET SIX-PACK ABS ‘MAGIC MIKE
                    </p>
                    <p className="font-thin mt-2 text-text-gray text-sm font-['Heebo'] leading-[22px]">
                      October 04, 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ////////////////// */}
            <div className="p-8 mt-7 bg-gray">
              <h4 className="text-2xl font-['Heebo'] font-bold tracking-[1] leading-[32px] uppercase text-[#1d1d1d] w-min">
                META
              </h4>

              <div className="flex items-center mt-8">
                <FaGreaterThan
                  className="text-black text-1.7em transform hover:scale-125 transition-transform"
                  fontSize="0.8em"
                />
                <p className="ml-2  font-['Heebo'] leading-[32px] text-black/60 w-full text-text-gray text-xl">
                  Log In
                </p>
              </div>
              <div className="flex items-center mt-8">
                <FaGreaterThan
                  className="text-black text-1.7em transform hover:scale-125 transition-transform"
                  fontSize="0.8em"
                />
                <p className="ml-2  font-['Heebo'] leading-[32px] text-black/60 w-full text-text-gray text-xl">
                  Entries Feed
                </p>
              </div>
              <div className="flex items-center mt-8">
                <FaGreaterThan
                  className="text-black text-1.7em transform hover:scale-125 transition-transform"
                  fontSize="0.8em"
                />
                <p className="ml-2  font-['Heebo'] leading-[32px] text-black/60 w-full text-text-gray text-xl">
                  Comments Feed
                </p>
              </div>
              <div className="flex items-center mt-8">
                <FaGreaterThan
                  className="text-black text-1.7em transform hover:scale-125 transition-transform"
                  fontSize="0.8em"
                />
                <p className="ml-2  font-['Heebo'] leading-[32px] text-black/60 w-full text-text-gray text-xl">
                  WrodPress.org
                </p>
              </div>
            </div>
            {/* //////////////////// */}
            <div className="md:p-8 p-5 mt-7 bg-gray">
              <h4 className="text-2xl font-['Heebo'] font-bold tracking-[1] leading-[32px] uppercase text-[#1d1d1d]">
                TAGS
              </h4>
              <div className="grid md:grid-cols-4 grid-cols-3 mt-4 gap-5">
                <button className="bg-white p-2 font-extralight text-sm hover:bg-green font-['Heebo'] leading-[22px] text-[#1d1d1d] border-solid border-white flex flex-row w-16 h-8 items-start pt-1 px-2 border">
                  Fitness
                </button>
                <button className="bg-white p-2 font-extralight text-sm hover:bg-green font-['Heebo'] leading-[22px] text-[#1d1d1d] border-solid border-white flex flex-row w-16 h-8 items-start pt-1 px-2 border">
                  Gym
                </button>
                <button className="bg-white p-2 font-extralight text-sm hover:bg-green font-['Heebo'] leading-[22px] text-[#1d1d1d] border-solid border-white flex flex-row w-16 h-8 items-start pt-1 px-2 border">
                  Sport
                </button>
                <button className="bg-white p-2 font-extralight text-sm hover:bg-green font-['Heebo'] leading-[22px] text-[#1d1d1d] border-solid border-white flex flex-row w-16 h-8 items-start pt-1 px-2 border">
                  Success
                </button>
                <button className="bg-white p-2 font-extralight text-sm hover:bg-green font-['Heebo'] leading-[22px] text-[#1d1d1d] border-solid border-white flex flex-row w-16 h-8 items-start pt-1 px-2 border">
                  Wild
                </button>
                <button className="bg-white p-2 font-extralight text-sm hover:bg-green font-['Heebo'] leading-[22px] text-[#1d1d1d] border-solid border-white flex flex-row w-16 h-8 items-start pt-1 px-2 border">
                  Yoga
                </button>
                <button className="bg-white p-2 font-extralight text-sm hover:bg-green font-['Heebo'] leading-[22px] text-[#1d1d1d] border-solid border-white flex flex-row w-16 h-8 items-start pt-1 px-2 border">
                  Fitness
                </button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Blog2;
