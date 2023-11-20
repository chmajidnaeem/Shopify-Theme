import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import Imgst from "/public/images/st.jpg";
import { BiCheck } from "react-icons/bi";

const Stamina = () => {
  return (
    <div className=" bg-black text-[#FFF] overflow-hidden">
      <Wrapper>
        <div className="xl:flex lg:mx-20 mx-3">
          <Image src={Imgst} alt="img" width={750} height={750} className="p-10" />

          <div className="mx-auto mt-20">
            <h1 className="font-bold text-2xl lg:text-5xl">BODIES OF STEMINA STRENGH</h1>
            <p className=" text-[16px] leading-10 pt-3">
              It is a long established fact that a reader will be distracted by
              the readable content
            </p>
            <p className="text-[16px]">of a page when looking at its page when at its layout</p>
            <p className="text-[16px]  mt-5 leading-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
            <div className="flex gap-3 items-center mt-8">
              <BiCheck className="text-green" size={27} />
              <p className="text-[18px]">HELP REDUCE STRESS, STRESS BODY BALANCE</p>
            </div>
            <div className="flex gap-3 items-center">
              <BiCheck className="text-green" size={27} />
              <p className="text-[18px]">IMPROVE MOOD EFECTIVILY SELF DEFENSE</p>
            </div>
            <div className="flex gap-3 items-center">
              <BiCheck className="text-green" size={27} />
              <p className="text-[18px]">FLEXIBILITY OF THE BODY PSYCHO</p>
            </div>
            <div className="mb-5 group flex gap-2 justify-center items-center bg-green w-[200px] py-4 mt-8 uppercase font-medium text-[#1D1D1D] hover:bg-white  duration-500 transform">
              <div>Read more</div>
              <div className="w-2 h-2 bg-black rounded-full hover:bg-white"></div>
            </div>
          </div>

        </div>
      </Wrapper>
    </div>
  );
};

export default Stamina;
