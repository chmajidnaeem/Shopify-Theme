import Image from "next/image";
import Logo from "/public/images/logo.jpg";
import Wrapper from "../shared/Wrapper";
import { FaLocationPin } from "react-icons/fa6";
import { AiTwotonePhone } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { BsFillSendFill } from "react-icons/bs";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { SiSkype } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black text-[#FFF]">
      <Wrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-x-36">
          {/* #1 */}
          <div className="mx-5 mt-5 sm:mt-[90px]">
          <Image className="" src={Logo} alt='' width={150} height={150}></Image>
          </div>
          {/* #2 */}
          <div className="text-center">
            <div className="lg:text-[24px] mt-5 sm:mt-[90px] text-[24px] font-bold">
              Useful-Links
            </div>
            <ul className="flex flex-col justify-start items-center self-start marker:text-green list-outside list-disc ml-6">
              <li className="hover:text-green mt-3 sm:mt-0 md:leading-10">
                Lifting weights
              </li>
              <li className="hover:text-green md:leading-10">Cardio Classes</li>
              <li className="hover:text-green md:leading-10">New To Fitness</li>
              <li className="hover:text-green md:leading-10">Muscle Builder</li>
              <li className="hover:text-green md:leading-10">Extra Energies</li>
            </ul>
          </div>
          {/* #3 */}
          <div className="text-center sm:text-left">
            <div className="text-[24px] font-bold mt-5 sm:mt-[90px]">
              Location
            </div>
            <div className="flex gap-2 justify-center md:justify-start items-center leading-10">
              <FaLocationPin size={20} className={"text-green"} />
              <p>Karachi, Sindh</p>
            </div>
            <div className="flex gap-2 justify-center md:justify-start items-center leading-10">
              <AiTwotonePhone size={20} className={"text-green"} />
              <p className="hover:text-green">Info@thm.Com</p>
            </div>
            <div className="flex gap-2 justify-center md:justify-start items-center leading-10">
              <HiMail size={20} className={"text-green"} />
              <p className="hover:text-green">+1800-001-658</p>
            </div>
          </div>
          {/* #4 */}
          <div className="text-center sm:text-left">
            <div className="text-[24px] font-bold mt-5 sm:mt-[90px]">
              Subscribe
            </div>
            <div className="flex justify-between items-center gap-x-20 mt-3 sm:mt-5 w-[450px]">
              <p className="hover:text-green">Your email address</p>
              <BsFillSendFill size={20} className={"text-green "} />
            </div>
            <div className="border-b border-green mt-4 w-[450px]"></div>
            <p className="mt-5 sm:mt-10 leading-8">
              It is a long established fact that a reader will be distracted by
              the readable
            </p>
            <div className="mb-5 sm:mb-[119px] flex gap-5 mt-5">
              <FaFacebookSquare size={20} className={"text-green"} />
              <FaInstagramSquare size={20} className={"text-green"} />
              <SiSkype size={20} className={"text-green"} />
              <FaSquareXTwitter size={20} className={"text-green"} />
            </div>
          </div>
        </div>
      </Wrapper>
      <hr className="text-green" />
      <p className="text-center p-4">
        Copyright 2023 fitsense All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
