import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import LOGO1 from "/public/images/logo1.png";
import LOGO2 from "/public/images/logo2.png";
import LOGO3 from "/public/images/logo3.png";

const Logo = () => {
  return (
    <>
      <div className="text-[#EEE] mt-[100px] bg-green">
        <hr />
      </div>
      <Wrapper>
        <div className="grid grid-cols-5 my-10">
          <Image src={LOGO1} alt="img" className="w-60" />
          <Image src={LOGO2} alt="img" className="w-60" />
          <Image src={LOGO1} alt="img" className="w-60" />
          <Image src={LOGO2} alt="img" className="w-60" />
          <Image src={LOGO3} alt="img" className="w-60" />
        </div>
      </Wrapper>
    </>
  );
};

export default Logo;
