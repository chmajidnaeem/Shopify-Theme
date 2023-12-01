import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import LOGO1 from "/public/images/logo1.png";
import LOGO2 from "/public/images/logo2.png";
import LOGO3 from "/public/images/logo3.png";
import LOGO4 from "/public/du.png";
import LOGO5 from "/public/power.jpg";


const Logo = () => {
  return (
    <>
     <p className="text-center text-3xl lg:text-5xl font-semibold mt-20 lg:mt-32 text-black uppercase">OUR Brands</p>
       
      <div className="text-[#EEE] mt-10 lg:mt-20 bg-green">
        <hr />
      </div>
      <Wrapper>
     
        <div className="md:grid grid-cols-5 justify-center items-center my-10">
          <Image src={LOGO1} alt="img" className="w-120" />
          <Image src={LOGO4} alt="img" className="w-120" />
          <Image src={LOGO3} alt="img" className="w-120" />
          <Image src={LOGO2} alt="img" className="w-120" />
          <Image src={LOGO5} alt="img" className="w-120" />          
        </div>
      </Wrapper>
    </>
  );
};

export default Logo;
