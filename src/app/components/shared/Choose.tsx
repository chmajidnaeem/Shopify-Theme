import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import Img1 from "/public/images/ch1.jpg";
import Img2 from "/public/images/ch2.jpg";
import Img3 from "/public/images/ch3.jpg";

const Choose = () => {
  return (
    <Wrapper>
      <p className="text-center text-[32px] lg:text-5xl font-bold mt-28 uppercase text-black">
        Why Choose Us
      </p>
      <p className="mx-auto text-center lg:w-[795px] leading-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. the readable content of a page when looking at its layout.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:mx-28">
        <div className="bg-[#EEE]">
          <h1 className="text-center mx-auto p-5 text-[28px] font-bold uppercase">
            Body balance
          </h1>
          <p className="text-center mx-auto  text-[16px] text-[#616161]">
            It is a established fact that a reader will be
          </p>
          <p className="text-center mx-auto  text-[16px] text-[#616161] mb-5">
            distracted distracted layout.
          </p>
          <Image src={Img1} alt="img" />
        </div>


        <div className="my-5 md:my-0 bg-[#EEE]">
          <h1 className="text-center mx-auto p-5 text-[28px] font-bold uppercase">
            Self defence
          </h1>
          <p className="text-center mx-auto  text-[16px] text-[#616161]">
            It is a established fact that a reader will be
          </p>
          <p className="text-center mx-auto  text-[16px] text-[#616161] mb-5">
            distracted distracted layout.
          </p>
          <Image src={Img2} alt="img" />
        </div>


        <div className="my-5 md:my-0 bg-[#EEE]">
          <h1 className="text-center mx-auto p-5 text-[28px] font-bold font-[Heebo]">
            BODY BALANCE
          </h1>
          <p className="text-center mx-auto  text-[16px] text-[#616161]">
            It is a established fact that a reader will be
          </p>
          <p className="text-center mx-auto  text-[16px] text-[#616161] mb-5">
            distracted distracted layout.
          </p>
          <Image src={Img3} alt="img" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Choose;
