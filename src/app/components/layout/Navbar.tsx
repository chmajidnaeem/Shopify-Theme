"use client";
import Image from "next/image";
import Logo from "/public/images/logo.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoSearchOutline } from "react-icons/io5";
import Banner1 from "/public/images/megabanner_1.webp";
import Banner2 from "/public/images/megabanner_2.webp";
import Banner3 from "/public/images/megabanner_3.jpg";
import { useState } from "react";
import Wrapper from "../shared/Wrapper";
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link'
import { usePathname } from "next/navigation";
import { FiMenu } from 'react-icons/fi'
import { EquipmentsLinks } from './EquipmentLinks'
import { GrClose } from 'react-icons/gr'

const Navbar = () => {
  const [togle, setTogle] = useState(false);
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();


  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <>
      <Wrapper>
        <div className="relative">
          <div className="fixed top-0 left-0 right-0 z-10 bg-white">
            <div className={"flex justify-between items-center p-3 "}>
              {/* LOGO */}
              <div>
                <Image src={Logo} alt="logo" width={150} height={150} />
              </div>
              {/* MENU */}
              <div className="invisible md:visible md:flex hidden font-semibold uppercase text-md justify-between gap-5 relative px-10">
                <Link href="/" className="">Home</Link>
                <div className="flex" onClick={() => {
                  setToggle(!toggle)
                }}>
                  <Link className="flex gap-2" href={'/products'}>Shop
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className={toggle ? 'rotate-180 mt-1.5 h-3 w-3 transform transition-transform duration-200 ease-in-out' : 'rotate-0 mt-1.5 h-3 w-3 transform transition-transform duration-200 ease-in-out'}>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="4"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link >
                </div>
                <Link href={"/Blog"} className="">Blog</Link>
                <Link href={"/Contactus"} className="">Contact</Link>

                <div onClick={handleNav} className='md:hidden'>
                  <FiMenu size='20' />
                </div>
              </div>





              {/* Humburger */}
              <div className="invisible md:visible flex items-center gap-5 text-3xl ">
                <IoSearchOutline />
                <LiaShoppingBagSolid />

                <div
                  className="text-3xl z-10 visible md:invisible "
                  onClick={() => {
                    setTogle(!togle);
                  }}
                >
                  {togle ? <RxHamburgerMenu /> : <RxCross2 />}
                </div>
              </div>
            </div>

            <div className="absolute">
              {toggle && (
                <div className="bg-slate-300 md:w-[90%] md:flex gap-10 relative z-10 ml-96 md:mx-16 mt-12 md:mt-0 pt-3 border-y-2 border-green bg-white px-5 pb-5">
                  {/* FIRST ROW */}
                  <div className="ml-5">
                    <h1 className="font-bold underline underline-offset-8 decoration-green text-xl pb-2">Equipments</h1>
                    {EquipmentsLinks.map((link: any) => (
                      <li key={link.id}>
                        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href={`/category/${link.slug}`}>{link.title}</Link>
                      </li>
                    ))}
                  </div>
                  {/* SECOND ROW */}
                  <div>
                    <h1 className="font-bold underline underline-offset-8 decoration-green text-xl">Workouts wear</h1>
                    <li><Link href={''} className="pt-4">Workout Tops</Link></li>
                    <li><Link href={''} className="pt-4">Track Pants</Link></li>
                    <li><Link href={''} className="pt-4">Yoga Pants</Link></li>
                    <li><Link href={''} className="pt-4">High Rise Tights</Link></li>
                    <li><Link href={''} className="pt-4">Stretchable Wear</Link></li>
                  </div>
                  {/* THIRD ROW */}
                  <div className="md:flex gap-10 m-y-10 hidden md:visible">
                    <Image
                      src={Banner1}
                      alt="Banner"
                      width={200}
                      height={200}
                    />
                    <Image
                      src={Banner2}
                      alt="Banner"
                      width={200}
                      height={200}
                    />
                    <Image
                      src={Banner3}
                      alt="Banner"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* ----------Overly Start here--------- */}
            <div className={`${nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ''}`}>
            <div className={`${nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}`}>
              <div className='flex w-full items-center justify-between'>
                <Link href={''}>
                  <Image className='w-16 h-16 rounded-full bg-pink-600' src={'/Images/mf.png'} alt='' width={100} height={100}></Image>
                </Link>
                <div onClick={handleNav} className='rounded-full shadow-lg shadow-pink-200 p-3 cursor-pointer'>
                  <GrClose />
                </div>
              </div>
              <div className='my-5'>
                <p className='w-[85%] md:w-[90%] py-4 text-3xl text-pink-600 font-bold'></p>
              </div>
              <div className='py-4'>
                <ul className='text-lg flex flex-col'>
                  <Link className='py-4' href={'/'}>Home</Link>
                  <Link className='py-4' href={'/products'}>Shop</Link>
                  <Link className='py-4' href={'/Blog'}>Blog</Link>
                  <Link className='py-4' href={'/Contactus'}>Contact</Link>
                </ul>
              </div>
            </div>
          </div>
            {/* ----------Overly End here--------- */}
          </div>
        </div>
      </Wrapper >
    </>
  );
};

export default Navbar;


