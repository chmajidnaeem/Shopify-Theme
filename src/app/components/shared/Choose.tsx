import React from 'react'
import Wrapper from "../shared/Wrapper";
import Image from 'next/image';
import Img1 from "/public/images/ch1.jpg"
import Img2 from "/public/images/ch2.jpg"
import Img3 from "/public/images/ch3.jpg"

const Choose = () => {
  return (
    <Wrapper>
    <p className="text-center text-[32px] lg:text-[56px] font-bold pt-20">WHY CHOOSE US</p>
    <p className="mx-auto text-center lg:w-[795px] leading-10">
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. the readable content of a page when looking at its layout.
    </p>
    <div className='mt-20 grid grid-cols-3'>
        <div className='bg-[#EEE] w-[350px] h-[210px]'>
            <h1 className='text-center mx-auto p-5 text-[28px] font-bold font-[Heebo]'>BODY BALANCE</h1>
            <p className='text-center mx-auto  text-[16px] font-[Heebo] text-[#616161]'>It is a established fact that a reader will be</p>
            <p className='text-center mx-auto  text-[16px] font-[Heebo] text-[#616161] mb-5'>distracted distracted layout.</p>
            <Image src={Img1} alt='img' width={408} height={326}/>
        </div>
        <div className='bg-[#EEE] w-[350px] h-[210px]'>
            <h1 className='text-center mx-auto p-5 text-[28px] font-bold font-[Heebo]'>SELF DEFENSE</h1>
            <p className='text-center mx-auto  text-[16px] font-[Heebo] text-[#616161]'>It is a established fact that a reader will be</p>
            <p className='text-center mx-auto  text-[16px] font-[Heebo] text-[#616161] mb-5'>distracted distracted layout.</p>
            <Image src={Img2} alt='img' width={408} height={326}/>
        </div>
        <div className='bg-[#EEE] w-[350px] h-[210px]'>
            <h1 className='text-center mx-auto p-5 text-[28px] font-bold font-[Heebo]'>Kardio Work</h1>
            <p className='text-center mx-auto  text-[16px] font-[Heebo] text-[#616161]'>It is a established fact that a reader will be</p>
            <p className='text-center mx-auto  text-[16px] font-[Heebo] text-[#616161] mb-5'>distracted distracted layout.</p>
            <Image src={Img3} alt='img' width={408} height={326}/>
        </div>
        
    </div>
  </Wrapper>
  )
}

export default Choose