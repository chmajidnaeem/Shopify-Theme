import Image from "next/image";
import Logo from "/public/images/logo.jpg";
import Wrapper from "../shared/Wrapper";
import { FaLocationPin } from "react-icons/fa6";
import { AiTwotonePhone } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { BsSend } from "react-icons/bs";
import {BiLogoFacebook} from "react-icons/bi"
import {SlSocialInstagram} from "react-icons/sl"
import {SiSkype} from "react-icons/si"
import {IoLogoTwitter} from "react-icons/io"
const Footer = () => {
  return (
    <div className="bg-black text-[#FFF]">
      <Wrapper>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-18 ">
          <div>
            <Image src={Logo} alt={"log"} className="w-40 mt-[90px]" />
            <p className="mt-10 leading-7">
              It helps designers plan out where the content will sit, the
              content to be written and approved content will sit.
            </p>
          </div>
          {/* #2 */}
          <div>
            <div className="lg:text-[24px] font-bold mt-[90px]">Useful-Links</div>
            <ul className="marker:text-green list-outside list-disc ml-6">
              <li className="hover:text-green lg:mt-10 leading-10">Lifting weights</li>
              <li className="hover:text-green leading-10">Cardio Classes</li>
              <li className="hover:text-green leading-10">New To Fitness</li>
              <li className="hover:text-green leading-10">Muscle Builder</li>
              <li className="hover:text-green leading-10">Extra Energy</li>
            </ul>
          </div>
          {/* #3 */}
          <div>
            <div className="text-[24px] font-bold mt-[90px]">Location</div>
            <div className="flex gap-2 lg:mt-10 leading-10">
              <FaLocationPin className={"text-green mt-3"} />
              <p>Karachi, Sindh</p>
            </div>
            <div className="flex gap-2 leading-10 invisible sm:visible">
              <AiTwotonePhone className={"text-green mt-3"} />
              <p className=" hover:text-green">Info@Peacefulthemes.Com</p>
            </div>
            <div className="flex gap-2 leading-10 invisible sm:visible">
              <HiMail className={"text-green mt-3"} />
              <p className=" hover:text-green">+1800-001-658</p>
            </div>
          </div>
          {/* #4 */}
          <div>
            <div className="text-[24px] font-bold mt-[90px]">Subscribe</div>
            <div className="flex lg:gap-32 lg:mt-10">
              <p className=" hover:text-green ">Your email address</p>
              <BsSend className={"text-green mt-1"} />
            </div>
            <div className="border-b border-green mt-4"></div>
            <p className="lg:mt-10 leading-8">
              It is a long established fact that a reader will be distracted by
              the readable
            </p>
            <div className="mb-[119px] flex gap-5 mt-5">
            <BiLogoFacebook className={"hover:text-green"}/>
            <SlSocialInstagram className={"hover:text-green"}/>
            <SiSkype className={"hover:text-green"}/>
            <IoLogoTwitter className={"hover:text-green"}/>
          </div>
          </div>
        </div>
      </Wrapper>
      <hr className="text-green"/>
      <p className="text-center p-4">Copyright 2023 fitsense All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
