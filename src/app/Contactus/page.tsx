"use client"
import { AiFillCiCircle, AiFillHome } from "react-icons/ai";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactUs() {
  return (
    <>
 
<div className="relative w-full h-0 pb-[50%]">
  <Image
    src="/image.jpg"
    alt="heroimg"
    layout="fill"
    objectFit="cover"
    
    
  />
</div>




      <div className="md:px-18 absolute top-[520px] md:left-[60px] md:text-[120px] text-2xl font-averia-sans text-center inline-block md:w-[806px] md:h-[204px] w-[400px] h-[400px] text-white">
        ContactUs
        <span>{`  `}</span>

        <div className="flex flex-row mt-5 p-3 items-center">
          <AiFillHome
            className="h-12 w-12"
            style={{ color: "white" }} />
          <Link href={"/"} className=" flex h-2 w-3 text-white text-2xl m-3">Home</Link>
          <span>{`  `}</span>
          <AiFillCiCircle className="h-7 ps-8 w-3 m-7"

            style={{ color: "green-200" }}
          />
          <Link href={"/"} className=" flex h-2 w-3 text-green-300 text-2xl m-3">Contactus</Link>
        </div></div>







      <div className="bg-gray-200">
        <div className="mx-auto max-w-9xl max-h-9xl px-0 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-8xl  py-16 sm:py-24 lg:max-w-none lg:py-32">


            <div className="mt-8 space-y-8 lg:grid lg:grid-cols-3 sm:grid-col-1 lg:gap-x-4 lg:space-y-0">
              <div className="group relative  bg-gray-200">
                <div className=" h-200 w-full contrast-125 scale-100 overflow-hidden rounded-lg bg-white">

                  <h2 className="text-center font-bold text-4xl mt-6 leading-8 ">OUR LOCATION</h2>
                  <p className="text-lg  text-center mt-6 ">The Queen's Walk, Bishop's, London SE1<br /> 7PB, United Kingdom</p>
                </div>
              </div>


              <div className="group relative">
                <div className="relative h-200 w-full contrast-125 scale-100 overflow-hidden rounded-lg bg-white">
                  <i className="ion ion-ios-location"></i>

                  <h2 className="text-center font-bold text-4xl mt-6 leading-8">OUR CONTACT</h2>
                  <p className="text-lg  text-center mt-6 ">+(1235)-1234-567-8900<br />
                    +(1235)-1234-567-8900</p>
                </div>



              </div>
              <div className="group relative">
                <div className="relative h-180 contrast-125 scale-100 w-full overflow-hidden rounded-lg bg-white">
                  <h1 className="text-center font-bold text-4xl mt-6 leading-8 ">MAIL US</h1>
                  <p className="text-lg  text-center mt-6 ">info@peacefulthemes.com<br />
                    info2@peacefulthemes.com</p>

                </div>


              </div></div>








          </div></div></div>

      <section className="mb-32">
        <div id="map" className="relative w-[475px] woverflow-hidden bg-cover bg-[50%] bg-no-repeat">
          <iframe
            src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=5&amp;output=embed&amp;iwloc=near"
            width="400%" height="600" loading="lazy"></iframe>
        </div>


        <div className="container  p-8 px-3 md:px-12">
          
           <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">



            <div className="flex flex-wrap">


              <div className="mb-12 bg-gray-300 w-full shrink-0 grow-0 basis-auto md:px-5 lg:mb-0 lg:w-5/12 lg:px-6">
                <form >

                  <h2 className=" text-center font-bold text-4xl mt-8">REQUEST A QUOTE</h2>
                  <p className="p-4 text-justify text-lg  text-center mt-6 "> Lorem Ipsum iLorem Ipsum is simply dummy text of the printing and typesetting industry.s simply dummy text of the and typesetting industry</p>
                  <div className="mt-10 grid grid-cols-1 gap-1 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900"></label>
                      <div className="mt-2 p-3">
                        <input type="text" name="first-name" id="first-name" autoComplete="given-name" placeholder="Enter Name" className="block w-full p-2 text-gray-900 border-double border-4 hover:border-green-300 py-1.5 placeholder:text-gray-400  sm:text-sm sm:leading-6" />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900"></label>
                      <div className="mt-2 p-3">
                        <input type="text" name="first-name" id="first-name" autoComplete="given-name" placeholder="Enter Email" className="block w-full p-2 text-gray-900 border-double border-4 hover:border-green-300  placeholder:text-gray-400  sm:text-sm sm:leading-6" />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900"></label>
                      <div className="mt-2 p-3">
                        <input type="text" name="first-name" id="first-name" autoComplete="given-name" placeholder="EnterSubject" className="block w-full p-2 text-gray-900 border-double border-4 hover:border-green-300  placeholder:text-gray-400  sm:text-sm sm:leading-6" />
                      </div>
                    </div>
                    <div className="sm:col-span-3 p-3">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900"></label>
                      <div className="mt-2">
                        <input type="text" name="first-name" id="first-name" autoComplete="given-name" placeholder="Enter Number" className="block w-full p-2 text-gray-900 border-double border-4 hover:border-green-300  placeholder:text-gray-400  sm:text-sm sm:leading-6" />
                      </div>
                    </div>
                    <div className="col-span-full p-3">

                      <div className="mt-2 p-3">
                        <textarea id="about" name="about" rows={6} className="block w-full rounded-md border-double border-4 hover:border-green-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-start gap-x-6 p-3">

                      <button type="submit" className="rounded-md bg-green-400 px-6 py-4 border-double border-4 hover:border-white text-sm font-semibold text-white shadow-sm hover:bg-gray-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">SendMessage</button>
                    </div>

                  </div>

                </form>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <Image src={"/image1.jpg"} alt="" height={600} width={800} />

              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

