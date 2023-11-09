import Image from "next/image";
import Logo from "/public/images/logo.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoSearchOutline } from "react-icons/io5";
import Shop from "../shared/Shop";
import { RiArrowDropDownLine } from "react-icons/ri";
import Banner1 from "/public/images/megabanner_1.webp";
import Banner2 from "/public/images/megabanner_2.webp";
import Banner3 from "/public/images/megabanner_3.jpg";
import { useState } from "react";
import Wrapper from "../shared/Wrapper";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [togglePage, setTogglePage] = useState(false);

  const [togle, setTogle] = useState(true);
  return (
    
    <Wrapper>
    <div className="relative">
      <div className="fixed top-0 left-0 right-0  bg-white">
        <div
          className={`sm:flex justify-between items-center p-6 ${
            togglePage ? `flex` : `hidden`
          }`}
        >
          <div>
            <Image src={Logo} alt="logo" className="w-24" />
          </div>
          <div className="flex font-semibold text-lg justify-between uppercase gap-5 relative">
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
              <p className="hover:text-green">About</p>
            </div>

            <div>
              <p className="hover:text-green">Contact</p>
            </div>
          </div>

          {/* Humburger */}
          <div className="flex items-center gap-5 text-3xl">
            <IoSearchOutline />
            <LiaShoppingBagSolid />
            {togglePage && <RxHamburgerMenu />}
          </div>
        </div>
        <div className="absolute ">
          {toggle && (
            <div className="bg-slate-300 w-[90%] flex gap-10 relative z-10 mx-20 bg-white px-5 pb-5">
              <div>
                <h1 className="font-bold underline underline-offset-8 decoration-green">
                  Equipments
                </h1>

                <li className="mt-4">Threadmill</li>
                <li>Dumbbell</li>
                <li>Bench</li>
                <li>Fitness Ball</li>
                <li>Mini Hip Band</li>
                <li>Kettlebell</li>
              </div>
              <div>
                <h1 className="font-bold underline underline-offset-8 decoration-green">
                  Workouts wear
                </h1>

                <li className="mt-4">Workout Tops</li>
                <li>Track Pants</li>
                <li>Sports Bra</li>
                <li>Yoga Pants</li>
                <li>High Rise Tights</li>
                <li>Stretchable Wear</li>
              </div>
              <div className="flex gap-10 m-y-10">
                <Image src={Banner1} alt="Banner" width={200} height={200} />
                <Image src={Banner2} alt="Banner" width={200} height={200} />
                <Image src={Banner3} alt="Banner" width={200} height={200} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </Wrapper>
 
  );
};

export default Navbar;
