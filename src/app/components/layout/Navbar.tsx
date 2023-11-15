"use client";
import Image from "next/image";
import Logo from "/public/images/logo.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoSearchOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import Banner1 from "/public/images/megabanner_1.webp";
import Banner2 from "/public/images/megabanner_2.webp";
import Banner3 from "/public/images/megabanner_3.jpg";
import { useState } from "react";
import Wrapper from "../shared/Wrapper";
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link'
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [togle, setTogle] = useState(false);
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  const EquipmentsLinks = [
    {
      id: 1,
      slug: 'threadmill',
      title: 'Threadmill'
    },
    {
      id: 2,
      slug: 'dumbbell',
      title: 'Dumbbell',
      Link:'/product'
    }, {
      id: 3,
      slug: 'bench',
      title: 'Bench'
    },
    {
      id: 4,
      slug: 'fitness_ball',
      title: 'Fitness Ball'
    },
    {
      id: 5,
      slug: 'mini_hip_band',
      title: 'Mini Hip Band'
    },
    {
      id: 6,
      slug: 'kettlebell',
      title: 'Kettlebell'
    }
    // Add more posts as needed...
  ];
  return (
    <>
      <Wrapper>
        <div className="relative">
          <div className="fixed top-0 left-0 right-0 z-10 bg-white">
            <div className={"flex justify-between items-center p-6 "}>
              <div>
                <Image src={Logo} alt="logo" className="w-24" />
              </div>
              <div className="invisible md:visible md:flex hidden font-semibold text-lg justify-between uppercase gap-5 relative">
                <div>
                <Link href="/"className="hover:text-green">Home</Link>
                </div>
                <div className="flex justify-center hover:z-50 group hover:text-green">
                  <p>Shop</p>
                  <span className="mt-1 group-hover:text-green">
                    <button
                      onClick={() => {
                        setToggle(!toggle);
                      }}
                    >
                      <RiArrowDropDownLine />
                    </button>
                  </span>
                </div>
                <div>
              <Link href={"/Blog"} className="hover:text-green">Blog</Link>
                </div>

                <div>
                                   <Link href={"/Contactus"} className="hover:text-green">Contact</Link>
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

            <div className="absolute ">
              {toggle && (
                <div className="bg-slate-300 md:w-[90%] md:flex gap-10 relative z-10 ml-96 md:mx-20 mt-12 md:mt-0 pt-3 border-y-2  border-green bg-white px-5 pb-5">
                  <div>
                    <h1 className="font-bold underline underline-offset-8 decoration-green">
                      Equipments
                    </h1>
                    {EquipmentsLinks.map((link) => (
                      <li key={link.id}>
                        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href={`/category/${link.slug}`}>{link.title}</Link>
                      </li>
                    ))}
                  </div>
                  <div>
                    <h1 className="font-bold underline underline-offset-8 decoration-green">
                      Workouts wear
                    </h1>

                    <li className="mt-4">Workout Tops</li>
                    <li>Track Pants</li>

                    <li>Yoga Pants</li>
                    <li>High Rise Tights</li>
                    <li>Stretchable Wear</li>
                  </div>
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
            {!togle && (
              <div className="fixed top-0 left-0 bg-[#EEE] h-screen sm:w-full lg:invisible">
                <div>
                  <Image
                    src={Logo}
                    alt="logo"
                    className="w-48 mx-auto  flex justify-center items-center p-5"
                  />
                </div>
                <div className=":flex text-center font-semibold text-lg uppercase relative">
                  <div>
                    <p className="hover:text-green">Home</p>
                  </div>
                  <div className="flex justify-center hover:z-50 group hover:text-green">
                    <p>Shop</p>
                    <span className="mt-1 group-hover:text-green">
                      <button
                        onClick={() => {
                          setToggle(!toggle);
                        }}
                      >
                        <RiArrowDropDownLine />
                      </button>
                    </span>
                  </div>
                  <div>
                  <Link href={"/Blog"} className="hover:text-green">Blog</Link>
                  </div>

                  <div>
                  <Link href={"/Contactus"} className="hover:text-green">Contact</Link>
                  </div>
                </div>
              </div>
            )}
            {/* ----------Overly End here--------- */}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Navbar;


