import React from 'react'
import Wrapper from '../shared/Wrapper'
import ClientSlider from "../shared/ClientSlider";

const ClientQuot = () => {
  return (
    <Wrapper>
    <div>
        <p className="text-center text-[32px] lg:text-[56px] font-bold pt-20">OUR CLIENT SAY</p>
        <p className="mx-auto text-center lg:w-[795px] leading-10 text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.</p>
        <ClientSlider/>
    </div>
    </Wrapper>
  )
}

export default ClientQuot