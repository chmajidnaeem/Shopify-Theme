"use client"
import {  AiFillAmazonCircle, AiFillCiCircle, AiFillHome, AiFillSlackCircle  } from "react-icons/ai";
import React from "react";
import Image from "next/image";
import { Phone,MapPin, Mail, Circle } from 'lucide-react';
import Link from "next/link";
import Blg2 from "../../../public/blog2.jpg";
export default function ContactUs() {
  return (
    <>



    





<div className="relative w-full pb-[30%]">
  <Image
    src={Blg2}
    alt="heroimg"
    layout="fill"
    objectFit="cover"
  />
  <div className="absolute top-[50%] left-[20%] transform translate(-50%, -50%) text-white text-center">
    <h1 className="text-2xl md:text-5xl font-heebo">Contact Us</h1>
    <ol className="flex flex-row mt-5">
      <li className="flex">
        <AiFillHome style={{ color: "white" }} 
        className="w-9 h-9" />
      </li>
      <li>
        <Link href={"/"} className="flex h-2 w-3 breadcrumb-item active text-white text-2xl m-3">
          Home
        </Link>
      </li>
      &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;&nbsp;&nbsp;
      <li className="p-4">
        <Circle className="h-5 w-5 fill-green" />
      </li>
      <li>
        <Link href={"/"} className= "flex h-2 w-3 breadcrumb-item active text-green text-2xl m-3">
          ContactUs
        </Link>
      </li>
    </ol>
  </div>
</div>



      <div className="bg-gray-200">
        <div className="mx-auto max-w-9xl max-h-9xl px-6 sm:px-4 lg:px-6">
          <div className="mx-auto max-w-9xl py-20 sm:py-24 lg:max-w-none lg:py-32">


            <div className="mt-8 space-y-6 lg:grid lg:grid-cols-3 sm:grid-col-1 lg:gap-x-4 lg:space-y-0">
              
           
              <div className="group relative">
  <div className="relative h-140 w-full contrast-125 scale-100 p-20 overflow-hidden bg-white">
    <div className="h-40 w-40 p-8 bg-green rounded-full flex justify-center">
      <Phone className="h-20 w-20 fill-gray-300" />
    </div>

    <h2 className="text-center font-bold text-4xl mt-6 leading-8">OUR LOCATION</h2>
    <p className="text-lg text-center mt-6 mb-3">The Queen's Walk, Bishop's,London SE1<br /> 7PB, United Kingdom</p>
  </div>
</div>
              <div className="group relative">
  <div className="relative h-140 w-full contrast-125 scale-100 p-20 overflow-hidden bg-white">
    <div className="h-40 w-40 p-8 bg-green rounded-full flex justify-center">
      <MapPin className="h-20 w-20 fill-gray-300" />
    </div>

    <h2 className="text-center font-bold text-4xl mt-6 leading-8">OUR CONTACT</h2>
    <p className="text-lg text-center mt-6 mb-3">+(1235)-1234-567-8900<br /> +(1235)-1234-567-8900</p>
  </div>
</div>

<div className="group relative">
  <div className="relative h-140 w-full contrast-125 scale-100 p-20 overflow-hidden bg-white">
    <div className="h-40 w-40 p-8 bg-green rounded-full flex justify-center">
      <Mail className="h-20 w-20 fill-gray-300" />
    </div>

    <h2 className="text-center font-bold text-4xl mt-6 leading-8">MAIL US</h2>
    <p className="text-lg text-center mt-6 mb-3">info@peacefulthemes.com<br />
                    info2@peacefulthemes.com</p>
  </div>
</div>
           


              






</div>

          </div></div></div>
       

          <section className="mb-32">

<div id="map" className="relative w-[475px] woverflow-hidden bg-cover bg-[50%] bg-no-repeat"> 
  <iframe
    src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&amp;t=m&amp;z=5&amp;output=embed&amp;iwloc=near"
    width="400%" height="600" loading="lazy"></iframe>
</div>


<div className=" sm:p-6 md:p-20 md:ml-40 md:right-[500px]">
  
    <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] sm:right-0 md:right-[240px] py-8 sm:py-20 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:px-4 md:py-16 md:px-12 -ml-[200p] -mt-[200px] backdrop-blur-[60px] border border-gray-300">
 



    <div className="flex flex-wrap">


      <div className="mb-12 bg-gray-300 sm:top-[1500px] sm:left-[0] sm:w-full sm:-[652.72px] Top-[1500px] Left[322px] W-[638px] h-[652.72px] shrink-0 grow-0 basis-auto md:px-5 lg:mb-0 lg:w-5/12 lg:px-6">
      
        
      <h2 className=" font-semibold  text-gray-900 md:text-center">REQUEST A QUOTE</h2>
      <p className="mt-1 md:text-center text-gray-600"> Lorem Ipsum iLorem Ipsum is simply dummy text of the printing and typesetting industry.s simply dummy text of the and typesetting industry</p>

      <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-6">
      

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
       
       <input
              type="text"
              id="myInput"
              placeholder="* Enter Subject"
              className="bg-gray h-12 px-5 hover:border-green border outline-none border-gray"
            />
    
             <div className="col-span-full p-3">

             
                <textarea id="about" name="about" rows={6} className="block w-full border outline-none hover:border-green py-1.5"></textarea>
              
                

            

  <button
    className="bg-green text-white text-lg w-52 h-14 mt-10 hover:bg-gray-500 hover:text-white font-bold"
    
  >SendMessage
   
  </button> </div>
          </div>

  


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