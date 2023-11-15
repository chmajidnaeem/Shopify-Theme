import React from "react";
import Wrapper from "../shared/Wrapper";
import GallerySlider from "../shared/GallerySlider";

const Gallery = () => {
  return (
    <div className="bg-[#EEEEEE] overflow-hidden mt-20 lg:mt-72">
      <Wrapper>
        <p className="text-center text-[28px] lg:text-[56px] font-bold pt-20">
          VIEW OUR GALLERY
        </p>
        <p className="mx-auto text-center lg:w-[795px] lg:leading-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. the readable content of a page when looking at its layout.
        </p>
        <GallerySlider />
      </Wrapper>
    </div>
  );
};

export default Gallery;
