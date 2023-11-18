"use client"
import { AiFillCiCircle, AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import React from "react";
import Image from "next/image";
import { Phone,MapPin, Mail } from 'lucide-react';
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
      <li>
        <AiFillHome style={{ color: "white" }} />
      </li>
      <li>
        <Link href={"/"} className="flex h-2 w-3 breadcrumb-item active text-white text-2xl m-3">
          Home
        </Link>
      </li>
      <li>
        <AiFillCiCircle className="h-7 w-3 m-7" style={{ color: "green" }} />
      </li>
      <li>
        <Link href={"/"} className="flex h-2 w-3 breadcrumb-item active text-green text-2xl m-3">
          Contact Us
        </Link>
      </li>
    </ol>
  </div>
</div>



      <div className="bg-gray-200">
        <div className="mx-auto max-w-9xl max-h-9xl px-0 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-8xl  py-16 sm:py-24 lg:max-w-none lg:py-32">


            <div className="mt-8 space-y-8 lg:grid lg:grid-cols-3 sm:grid-col-1 lg:gap-x-4 lg:space-y-0">
              
              <div className="group relative  bg-gray-200">
                <div className=" h-180 w-full contrast-125 scale-100 overflow-hidden bg-white">
                <div className="h-40 w-40 p-8 bg-green rounded-full flex justify-center items-center">
          <MapPin className="h-20 w-20" />
        </div>
                  <h2 className="text-center font-bold text-4xl mt-6 leading-8 ">OUR LOCATION</h2>
                  <p className="text-lg  text-center mt-6 mb-40">The Queen's Walk, Bishop's, London SE1<br /> 7PB, United Kingdom</p>
                </div>
              </div>


              <div className="group relative">
                <div className="relative h-200 w-full contrast-125 scale-100 overflow-hidden  bg-white">
                <div className="h-40 w-40 p-8 bg-green rounded-full flex justify-center items-center">
          <Phone className="h-20 w-20"/>
        </div>

                  <h2 className="text-center font-bold text-4xl mt-6 leading-8">OUR CONTACT</h2>
                  <p className="text-lg text-center mt-6 mb-40">+(1235)-1234-567-8900<br />
                    +(1235)-1234-567-8900</p>
                </div>



              </div>
              <div className="group relative items-center">
                 <div className="relative h-180 contrast-125 scale-100 w-full overflow-hidden  bg-white">
                <div className="h-40 w-40 p-8 bg-green rounded-full flex justify-center relative items-center">
          <Mail className="h-20 w-20" />
        </div> 
                  <h1 className="text-center font-bold text-4xl mt-6 leading-8 ">MAIL US</h1>
                  <p className="text-lg  text-center mt-6 mb-40">info@peacefulthemes.com<br />
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


        <div className="container md:p-20 md:ml-40 md:right-[500px]">
          
            <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] md:right-[240px] py-20 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -ml-[200p] -mt-[200px] backdrop-blur-[60px] border border-gray-300">
         



            <div className="flex flex-wrap">


              <div className="mb-12 bg-gray-300 Top-[1500px] Left[322px] W-[638px] h-[652.72px] shrink-0 grow-0 basis-auto md:px-5 lg:mb-0 lg:w-5/12 lg:px-6">
                 <form >

                  <h2 className=" text-center font-bold text-4xl mt-8">REQUEST A QUOTE</h2>
                  <p className="p-4 text-justify text-lg  text-center mt-6 "> Lorem Ipsum iLorem Ipsum is simply dummy text of the printing and typesetting industry.s simply dummy text of the and typesetting industry</p>
                  <div className="mt-10 grid grid-cols-1 gap-1 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900"></label>
                      <div className="mt-2 p-3">
                        <input type="text" name="first-name" id="first-name" autoComplete="given-name" placeholder="Enter Name" className="block w-full p-2 text-gray-900 border-double border-4 hover:border-green py-1.5 placeholder:text-gray-400  sm:text-sm sm:leading-6" />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900"></label>
                      <div className="mt-2 p-3">
                        <input type="text"
                         name="first-name"
                          id="first-name" 
                          autoComplete="given-name" 
                          placeholder="Enter Email"
                          className="block w-full p-2 text-gray-900 border-double border-4 hover:border-green placeholder:text-gray-400  sm:text-sm sm:leading-6" />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900"></label>
                      <div className="mt-2 p-3">
                        <input type="text" name="first-name" id="first-name" autoComplete="given-name" placeholder="EnterSubject" className="block w-full p-2 text-gray-900 border-double border-4 hover:border-green placeholder:text-gray-400  sm:text-sm sm:leading-6" />
                      </div>
                    </div>
                    <div className="sm:col-span-6 md:col-span-3">
   ...


                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900"></label>
                      <div className="mt-2">
                        <input type="text" name="first-name" id="first-name" autoComplete="given-name" placeholder="Enter Number" className="block w-full p-2 text-gray-900 border-double border-4 hover:border-green placeholder:text-gray-400  sm:text-sm sm:leading-6" />
                      </div>
                    </div>
                     <div className="col-span-full p-3">

                     
                        <textarea id="about" name="about" rows={6} className="block w-full rounded-md border-double border-4 hover:border-green py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                      
                   

                    
 
          <button
            className="bg-green text-white text-lg w-52 h-14 mt-10 hover:bg-gray-500 hover:text-white font-bold"
            
          >SendMessage
           
          </button> </div>
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