import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import Imgst from "/public/images/st.jpg";
import { BiCheck } from "react-icons/bi";

const Stamina = () => {
  return (
    <div className="h-[650px] bg-black text-[#FFF]">
      <Wrapper>
        <div className="lg:flex">
          <Image src={Imgst} alt="img" className="w-[500px] h-[600px] p-10" />

          <div className="p-20">
            <h1 className="font-bold text-[48px]">BODIES OF STEMINA STRENGH</h1>
            <p className="text-[16px] font-[Heebo] w-[120%] leading-10">
              It is a long established fact that a reader will be distracted by
              the readable content
            </p>
            <p className="text-[16px] font-[Heebo]">of a page when looking at its page when at its layout</p>
            <p className="text-[16px] font-[Heebo] mt-5 leading-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
            <div className="flex gap-3 items-center mt-8">
                <BiCheck className="text-green"/>
                <p className="text-[18px] font-[Heebo]">HELP REDUCE STRESS, STRESS BODY BALANCE</p>
            </div>
            <div className="flex gap-3 items-center">
                <BiCheck className="text-green"/>
                <p className="text-[18px] font-[Heebo]">IMPROVE MOOD EFECTIVILY SELF DEFENSE</p>
            </div>
            <div className="flex gap-3 items-center">
                <BiCheck className="text-green"/>
                <p className="text-[18px] font-[Heebo]">FLEXIBILITY OF THE BODY PSYCHO</p>
            </div>
            <div className="group flex gap-2 justify-center items-center bg-green w-[130px] py-2 mt-8 uppercase font-medium font-[Heebo] text-[#1D1D1D] hover:bg-white">
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
