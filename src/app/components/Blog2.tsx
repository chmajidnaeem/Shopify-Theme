import React from "react";
import Image from "next/image";
import Blg2 from "../../../public/blog2.jpg";
import Blog201 from "../../../public/blog201.webp";
import { AiOutlineSearch } from "react-icons/ai";
import { FaGreaterThan } from "react-icons/fa6";

const Blog2 = () => {
  return (
    <div className="flex mt-28 mb-40 relative">
      {/* left side  */}
      <div className="w-[1060px] px-8">
        <Image width={836} src={Blg2} alt="cp" className="mx-auto h-[478px]" />
        <div className="bg-black w-40 h-10 flex items-center justify-center  absolute top-[450px] left-[70px]">
          <p className="text-white text-lg font-bold ">GYMNASTICS</p>
        </div>
        <div className="bg-gray pt-16 px-9">
          <p className="flex gap-8">
            SEPTEMBER 19, 2022{" "}
            <span>
              <li>0 COMMENTS</li>
            </span>
          </p>
          <p className="mt-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text
          </p>
          <h4 className="text-3xl font-bold mt-8">WHY DO WE FITSENSE.</h4>
          <p className="mt-6">
            fitsense storage system is designed to deliver a power output of 10
            MW for the operational life of the project. Wärtsilä also providing
            a long-term service agreement, including maintenance, spare parts,
            repairs, remote monitoring and performance guarantees.The order was
            placed in November 2020. This contract in Mexico marks an expansion
            of Wärtsilä’s smart storage technology to the region.
          </p>
          <div className="text-xl font-bold px-8 bg-white border-l-green mt-16 border-4 border-gray py-10">
            <p className="font-thin text-base">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <p className="text-green font-medium mt-3">– Michal Smart</p>
          </div>
          <p className="my-12 pr-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              width={350}
              src={Blg2}
              alt="cp"
              className="mx-auto h-[284px]"
            />
            <Image
              width={350}
              src={Blg2}
              alt="cp"
              className="mx-auto h-[284px]"
            />
          </div>
          <h4 className="text-3xl font-extrabold mt-8">
            WHERE CAN I GET SOME?
          </h4>
          <p className="text-black mt-4">
            The fitsense storage system is designed to deliver a power output of
            10 MW for the operational life of the project. Wärtsilä also
            providing a long-term service agreement, including maintenance,
            spare parts, repairs, remote monitoring and performance
            guarantees.The order was placed in November 2020. This contract in
            Mexico marks an expansion of Wärtsilä’s smart storage technology to
            the region.
          </p>
          <div className="px-8 mt-8 ">
            <ul> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ul>
            <ul> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ul>
            <ul> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ul>
            <ul> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ul>
          </div>
          <p className="text-black mt-8 pb-8">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text
          </p>
        </div>
        <div className="bg-white mt-24">
          <h4 className="text-3xl font-extrabold">WRITE A REPLY OR COMMENT</h4>
          <p className="mt-3">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-8">
            <input
              type="text"
              id="myInput"
              placeholder="* Enter Name"
              className="bg-gray h-12 px-5 hover:border-green border outline-none border-gray"
            />

            <input
              type="text"
              id="myInput"
              placeholder="* Enter Email"
              className="bg-gray h-12 px-5 hover:border-green border outline-none border-gray"
            />

            <input
              type="text"
              id="myInput"
              placeholder="* Enter URL"
              className="bg-gray h-12 px-5 hover:border-green border outline-none border-gray"
            />
          </div>
          <div className="mt-7 relative w-full ">
            <input
              type="text"
              id="commentInput"
              placeholder="Enter Your Comment"
              className="bg-gray w-full px-7 hover:border-green border outline-none border-gray py-2 h-56"
            />
          </div>
          <button
            className="bg-green text-black
           text-lg w-52 h-14 mt-10 hover:text-white hover:bg-black
            "
          >
            POST COMMENT
          </button>
        </div>
      </div>

      {/* ////////////////////// */}
      {/* right side  */}
      <div className="w-[570px] pr-10 bg-white ">
        <div className="relative w-full bg-gray h-32  flex items-center">
          <input
            type="text"
            placeholder="Search ..."
            className="bg-white hover:border-green border outline-none border-gray py-4 px-4 w-[316px] absolute top-9 mx-6 "
          />
          <div className="ml-[340px] justify-center flex items-center bg-black h-14 w-14">
            <AiOutlineSearch color="white" fontSize="1.7em" />
          </div>
        </div>
        <div className="p-8 mt-7 bg-gray">
          <h4 className="text-xl font-extrabold">CATEGORIES</h4>
          <div className="flex items-center mt-8">
            <FaGreaterThan
              className="text-black text-1.7em transform hover:scale-125 transition-transform"
              fontSize="0.8em"
            />
            <p className="ml-2 font-xl">Acrobatics</p>
          </div>
          <div className="flex items-center mt-8">
            <FaGreaterThan
              className="text-black text-1.7em transform hover:scale-125 transition-transform"
              fontSize="0.8em"
            />
            <p className="ml-2 font-xl">Boot Camps</p>
          </div>
          <div className="flex items-center mt-8">
            <FaGreaterThan
              className="text-black text-1.7em transform hover:scale-125 transition-transform"
              fontSize="0.8em"
            />
            <p className="ml-2 font-xl">Training Gyms</p>
          </div>
          <div className="flex items-center mt-8">
            <FaGreaterThan
              className="text-black text-1.7em transform hover:scale-125 transition-transform"
              fontSize="0.8em"
            />
            <p className="ml-2 font-xl">Crossfit</p>
          </div>
          <div className="flex items-center mt-8">
            <FaGreaterThan
              className="text-black text-1.7em transform hover:scale-125 transition-transform"
              fontSize="0.8em"
            />
            <p className="ml-2 font-xl">Gymnastics</p>
          </div>
          <div className="flex items-center mt-8">
            <FaGreaterThan
              className="text-black text-1.7em transform hover:scale-125 transition-transform"
              fontSize="0.8em"
            />
            <p className="ml-2 font-xl">Yoga</p>
          </div>
        </div>
        <div className="py-8 pl-8 pr-3 mt-7 bg-gray">
          <h4 className="text-xl font-extrabold">RECENT POST</h4>
          <div className="pr-9">
            <div className="flex justify-start mt-8">
              <Image width={90} src={Blog201} alt="cp" className="h-[90px]" />
              <div className="pl-5 ">
                <p className="font-medium">
                  WORKOUT WITH GET SIX-PACK ABS ‘MAGIC MIKE
                </p>
                <p className="font-thin mt-2">October 04, 2022</p>
              </div>
            </div>

            <div className="flex justify-start mt-8">
              <Image width={90} src={Blog201} alt="cp" className="h-[90px]" />
              <div className="pl-5 ">
                <p className="font-medium">
                  WORKOUT WITH GET SIX-PACK ABS ‘MAGIC MIKE
                </p>
                <p className="font-thin mt-2">October 04, 2022</p>
              </div>
            </div>

            <div className="flex justify-start mt-8">
              <Image width={90} src={Blog201} alt="cp" className="h-[90px]" />
              <div className="pl-5 ">
                <p className="font-medium">
                  WORKOUT WITH GET SIX-PACK ABS ‘MAGIC MIKE
                </p>
                <p className="font-thin mt-2">October 04, 2022</p>
              </div>
            </div>
          </div>
        </div>
        {/* ////////////////// */}
        <div className="p-8 mt-7 bg-gray">
          <h4 className="text-xl font-extrabold">META</h4>
        
          <div className="flex items-center mt-8">
            <FaGreaterThan
              className="text-black text-1.7em transform hover:scale-125 transition-transform"
              fontSize="0.8em"
            />
            <p className="ml-2 font-xl">Log In</p>
          </div>
          <div className="flex items-center mt-8">
            <FaGreaterThan
              className="text-black text-1.7em transform hover:scale-125 transition-transform"
              fontSize="0.8em"
            />
            <p className="ml-2 font-xl">Entries Feed</p>
          </div>
          <div className="flex items-center mt-8">
            <FaGreaterThan
              className="text-black text-1.7em transform hover:scale-125 transition-transform"
              fontSize="0.8em"
            />
            <p className="ml-2 font-xl">Comments Feed</p>
          </div>
          <div className="flex items-center mt-8">
            <FaGreaterThan
              className="text-black text-1.7em transform hover:scale-125 transition-transform"
              fontSize="0.8em"
            />
            <p className="ml-2 font-xl">WrodPress.org</p>
          </div>
        </div>
        {/* //////////////////// */}
        <div className="p-8 mt-7 bg-gray">
        <h4 className="text-xl font-extrabold">TAGS</h4>
        <div className="grid grid-cols-4 mt-4 gap-5">
        <button className="bg-white p-2 font-extralight text-sm hover:bg-green">Fitness</button>
        <button className="bg-white p-2 font-extralight text-sm hover:bg-green">Fitness</button>
        <button className="bg-white p-2 font-extralight text-sm hover:bg-green">Fitness</button>
        <button className="bg-white p-2 font-extralight text-sm hover:bg-green">Fitness</button>
        <button className="bg-white p-2 font-extralight text-sm hover:bg-green">Fitness</button>
        <button className="bg-white p-2 font-extralight text-sm hover:bg-green">Fitness</button>
        <button className="bg-white p-2 font-extralight text-sm hover:bg-green">Fitness</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Blog2;
