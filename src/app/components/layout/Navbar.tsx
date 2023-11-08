import Image from "next/image";
import Logo from "/public/images/logo.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoSearchOutline } from "react-icons/io5";
import Wrapper from "../shared/Wrapper";
import Shop from "../shared/Shop";
import { RiArrowDropDownLine } from "react-icons/ri";
import Banner1 from "/public/images/megabanner_1.webp";
import Banner2 from "/public/images/megabanner_2.webp";
import Banner3 from "/public/images/megabanner_3.jpg";


const Navbar = () => {
  return (
    <Wrapper>
      <div className="flex justify-between items-center p-4 bg-slate-300">
        {/* Logo */}
        <div>
          <Image src={Logo} alt="logo" className="w-20" />
        </div>
        {/* Main */}
        <div className="flex gap-8 font-[500px] list-none uppercase">
          <li>Home</li>
          <li>Shop</li>
          <div className="relative">
      <div className="flex items-center w-full">
        <li><Shop/></li>
        <RiArrowDropDownLine />
      </div>
      <div className="flex gap-8 rounded border-gray-500 bg-green p-4 w-[800px] h-[500px] absolute">
        <div>Equipments</div>
        <p>Workout Wears</p>
        <div className="lg:flex gap-1">
          <Image src={Banner1} alt="banner" className="w-52" />
          <Image src={Banner3} alt="banner" className="w-52" />
          <Image src={Banner3} alt="banner" className="w-52" />
        </div>
      </div>
    </div>
          <li>Blog</li>
          <li>Contact Us</li>
          
        </div>

        {/* Humburger */}
        <div className="flex items-center gap-5 text-3xl">
          <IoSearchOutline />
          <LiaShoppingBagSolid />
          <RxHamburgerMenu />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
