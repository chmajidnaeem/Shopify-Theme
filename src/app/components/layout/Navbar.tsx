// "use client";
// import Image from "next/image";
// import Logo from "/public/images/logo.jpg";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { LiaShoppingBagSolid } from "react-icons/lia";
// import { IoSearchOutline } from "react-icons/io5";
// import Banner1 from "/public/images/megabanner_1.webp";
// import Banner2 from "/public/images/megabanner_2.webp";
// import Banner3 from "/public/images/megabanner_3.jpg";
// import { useState } from "react";
// import Wrapper from "../shared/Wrapper";
// import { RxCross2 } from "react-icons/rx";
// import Link from 'next/link'
// import { usePathname } from "next/navigation";
// import { FiMenu } from 'react-icons/fi'
// import { EquipmentsLinks } from './EquipmentLinks'
// import { GrClose } from 'react-icons/gr'

// const Navbar = () => {
//   const [togle, setTogle] = useState(false);
//   const [toggle, setToggle] = useState(false);
//   const pathname = usePathname();


//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   }
//   return (
//     <>
//       <Wrapper>
//         <div className="relative">
//           <div className="fixed top-0 left-0 right-0 z-10 bg-white">
//             <div className={"flex justify-between items-center p-3 "}>
//               {/* LOGO */}
//               <div>
//                 <Image src={Logo} alt="logo" width={150} height={150} />
//               </div>
//               {/* MENU */}
//               <div className="invisible md:visible md:flex hidden font-semibold uppercase text-md justify-between gap-5 relative px-10">
//                 <Link href="/" className="">Home</Link>
//                 <div className="flex" onClick={() => {
//                   setToggle(!toggle)
//                 }}>
//                   <Link className="flex gap-2" href={'/'}>Shop
//                     <svg
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       className={toggle ? 'rotate-180 mt-1.5 h-3 w-3 transform transition-transform duration-200 ease-in-out' : 'rotate-0 mt-1.5 h-3 w-3 transform transition-transform duration-200 ease-in-out'}>
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="4"
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </Link >
//                 </div>
//                 <Link href={"/Blog"} className="">Blog</Link>
//                 <Link href={"/Contactus"} className="">Contact</Link>

//                 <div onClick={handleNav} className='md:hidden'>
//                   <FiMenu size='20' />
//                 </div>
//               </div>





//               {/* Humburger */}
//               <div className="invisible md:visible flex items-center gap-5 text-3xl ">
//                 <IoSearchOutline />
//                 <LiaShoppingBagSolid />

//                 <div
//                   className="text-3xl z-10 visible md:invisible "
//                   onClick={() => {
//                     setTogle(!togle);
//                   }}
//                 >
//                   {togle ? <RxHamburgerMenu /> : <RxCross2 />}
//                 </div>
//               </div>
//             </div>

//             <div className="absolute">
//               {toggle && (
//                 <div className="bg-slate-300 md:w-[90%] md:flex gap-10 relative z-10 ml-96 md:mx-16 mt-12 md:mt-0 pt-3 border-y-2 border-green bg-white px-5 pb-5">
//                   {/* FIRST ROW */}
//                   <div className="ml-5">
//                     <h1 className="font-bold underline underline-offset-8 decoration-green text-xl pb-2">Equipments</h1>
//                     {EquipmentsLinks.map((link: any) => (
//                       <li key={link.id}>
//                         <Link className={`link ${pathname === '/' ? 'active' : ''}`} href={`/category/${link.slug}`}>{link.title}</Link>
//                       </li>
//                     ))}
//                   </div>
//                   {/* SECOND ROW */}
//                   <div>
//                     <h1 className="font-bold underline underline-offset-8 decoration-green text-xl">Workouts wear</h1>
//                     <li><Link href={''} className="pt-4">Workout Tops</Link></li>
//                     <li><Link href={''} className="pt-4">Track Pants</Link></li>
//                     <li><Link href={''} className="pt-4">Yoga Pants</Link></li>
//                     <li><Link href={''} className="pt-4">High Rise Tights</Link></li>
//                     <li><Link href={''} className="pt-4">Stretchable Wear</Link></li>
//                   </div>
//                   {/* THIRD ROW */}
//                   <div className="md:flex gap-10 m-y-10 hidden md:visible">
//                     <Image
//                       src={Banner1}
//                       alt="Banner"
//                       width={200}
//                       height={200}
//                     />
//                     <Image
//                       src={Banner2}
//                       alt="Banner"
//                       width={200}
//                       height={200}
//                     />
//                     <Image
//                       src={Banner3}
//                       alt="Banner"
//                       width={200}
//                       height={200}
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* ----------Overly Start here--------- */}
//             {/* ----------Overly End here--------- */}
//           </div>
//         </div>
//       </Wrapper >
//     </>
//   );
// };

// export default Navbar;


























'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { FaFacebook, FaGithub, FaLinkedin, FaShoppingCart, FaTwitter } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import Wrapper from '../shared/Wrapper'
import Logo from "/public/images/logo.jpg";
import { usePathname } from 'next/navigation'
import { IoSearch } from 'react-icons/io5'
import { MdOutlineMenu } from "react-icons/md";
import Banner1 from "/public/images/megabanner_1.webp";
import Banner2 from "/public/images/megabanner_2.webp";
import Banner3 from "/public/images/megabanner_3.jpg";
import { EquipmentsLinks } from './EquipmentLinks'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }


  const [togle, setTogle] = useState(false);
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <Wrapper>
        <div className='stricky top-0 bg-white fixed left-0 right-0 z-10 py-2 sm:px-10 px-3'>
          <div className='flex justify-between items-center'>
            <Image className='' src={Logo} alt='' width={150} height={150}></Image>
            <div>
              <ul className='hidden md:flex items-center text-xl gap-5'>
                <Link href="/" className="">Home</Link>
                <div className="flex" onClick={() => {
                  setToggle(!toggle)
                }}>
                  <Link className="flex gap-2" href={'/'}>Shop
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className={toggle ? 'rotate-180 mt-2 h-3 w-3 transform transition-transform duration-200 ease-in-out' : 'rotate-0 mt-2 h-3 w-3 transform transition-transform duration-200 ease-in-out'}>
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
              </ul>
              {/* Mobile Nav Hamburger */}
              <div onClick={handleNav} className='md:hidden'>
                <FiMenu size='30' />
              </div>
            </div>
            <div className='md:flex hidden gap-5 align-center'>
              <form action="" className="relative w-max">
                <input type="search"
                  className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-[#c1e502] focus:pl-16 focus:pr-4" />
                <svg xmlns="http://www.w3.org/2000/svg" className="font-bold absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-[#c1e502] peer-focus:stroke-[#c1e502]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </form>
              <div className='pt-2'>
                <FaShoppingCart size={30} />
              </div>
            </div>
            {/* Mobile Navbar */}

          </div>





          <div className="absolute">
            {toggle && (
              <div className="bg-slate-300 md:w-[90%] md:flex gap-10 relative z-10 ml-96 md:mx-16 mt-12 md:mt-0 pt-3 border-y-2 border-green bg-white px-5 pb-5">
                {/* FIRST ROW */}
                <div className="ml-5">
                  <h1 className="font-bold underline underline-offset-8 decoration-green text-xl pb-2 text-green">Equipments</h1>
                  {EquipmentsLinks.map((link: any) => (
                    <li key={link.id}>
                      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href={`/category/${link.slug}`}>{link.title}</Link>
                    </li>
                  ))}
                </div>
                {/* SECOND ROW */}
                <div>
                  <h1 className="text-green font-bold underline underline-offset-8 decoration-green text-xl">Workouts wear</h1>
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








          <div className={`${nav ? "md:hidden fixed  w-auto h-screen bg-black/70" : ''}`}>
            <div className={`${nav ? 'fixed top-0 w-auto h-screen bg-white p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}`}>
              <div className='flex w-full items-center justify-'>
                <Link href={''}>
                  <Image className='' src={Logo} alt='' width={150} height={150}></Image>
                </Link>
                <div onClick={handleNav} className='rounded-full shadow-lg shadow-pink-200 p-3 cursor-pointer'>
                  <GrClose />
                </div>
              </div>
              <div className='py-6'>
                <ul className='text-lg flex flex-col text-start'>
                  <Link href="/" className="">Home</Link>
                  <Link className="flex gap-2" href={'/'}>Shop
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className='rotate-0 mt-2 h-3 w-3 transform transition-transform duration-200 ease-in-out'>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="4"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link >
                  <Link href={"/Blog"} className="">Blog</Link>
                  <Link href={"/Contactus"} className="">Contact</Link>
                </ul>
              </div>
              <div className='md:hidden align-center'>
                <form action="" className="relative w-max">
                  <input type="search"
                    className="peer cursor-pointer relative z-10 h-12 w-12 rounded-2xl border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-[#c1e502] focus:pl-16 focus:pr-4" />
                  <svg xmlns="http://www.w3.org/2000/svg" className="font-bold absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-[#c1e502] peer-focus:stroke-[#c1e502]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}