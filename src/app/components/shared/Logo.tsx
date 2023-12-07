import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import LOGO1 from "/public/logo2.png";
import LOGO2 from "/public/logo3.png";
import LOGO3 from "/public/logo4.png";
import LOGO4 from "/public/logo5.png";


const Logo = () => {
  return (
    <>
     <p className="text-center text-3xl lg:text-5xl font-semibold mt-20 lg:mt-32 text-black uppercase">OUR Brands</p>
       
      <div className="text-[#EEE] mt-10 lg:mt-20 bg-green">
        <hr />
      </div>
      <Wrapper>
     
        <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
          <Image src={LOGO1} alt="img" className="w-[400px] h-[400px]"/>
          <Image src={LOGO2} alt="img" className="w-[400px] h-[400px]" /> 
          <Image src={LOGO3} alt="img" className="w-[400px] h-[400px]" /> 
          <Image src={LOGO4} alt="img" className="w-[400px] h-[400px]" />          
        </div>
      </Wrapper>
    </>
  );
};

export default Logo;
