import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import Img1 from "/public/images/ch1.jpg";
import Img2 from "/public/images/ch2.jpg";
import Img3 from "/public/images/ch3.jpg";

const Choose = () => {
  return (
    <Wrapper>
      <p className="text-center text-2xl lg:text-5xl font-semibold md:mt-24 lg:mt-32 uppercase text-black">
        Why Choose Us
      </p>
      <p className="mx-auto text-center text:lg md:text-xl  leading-8 mt-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.</p>

      <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:mx-28">
        <div className="bg-[#f5f5f5]">
          <h1 className="text-center text-green mx-auto p-5 font-bold uppercase font-[Heebo]">
            Body balance
          </h1>
          <p className="text-center mx-auto  text-[16px] text-[#616161]">
            It is a established fact that a reader 
          </p>
          <p className="text-center mx-auto  text-[16px] text-[#616161] mb-5">
          will be distracted distracted layout.
          </p>
          <Image src={Img1} alt="img" />
        </div>


        <div className="my-5 md:my-0 bg-[#f5f5f5]">
          <h1 className="text-center text-green mx-auto p-5 text-[28px] font-bold uppercase font-[Heebo]">
            Self defence
          </h1>
          <p className="text-center mx-auto  text-[16px] text-[#616161]">
            It is a established fact that a reader 
          </p>
          <p className="text-center mx-auto  text-[16px] text-[#616161] mb-5">
          will be distracted distracted layout.
          </p>
          <Image src={Img2} alt="img" />
        </div>


        <div className="my-5 md:my-0 bg-[#f5f5f5]">
          <h1 className="text-center text-green mx-auto p-5 text-[28px] font-bold uppercase font-[Heebo]">
          Body balance
          </h1>
          <p className="text-center mx-auto  text-[16px] text-[#616161]">
            It is a established fact that a reader 
          </p>
          <p className="text-center mx-auto  text-[16px] text-[#616161] mb-5">
          will be distracted distracted layout.
          </p>
          <Image src={Img3} alt="img" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Choose;
