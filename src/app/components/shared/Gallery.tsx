import React from "react";
import Wrapper from "../shared/Wrapper";
import GallerySlider from "../shared/GallerySlider";

const Gallery = () => {
  return (
    <div className="bg-[#f5f5f5] overflow-hidden mt-24">
      <Wrapper>
        <p className="text-center text-3xl lg:text-5xl font-semibold pt-20">
          VIEW OUR GALLERY
        </p>
        <p className="mx-auto text-center text-xl leading-8 mt-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.</p>
        <GallerySlider />
      </Wrapper>
    </div>
  );
};

export default Gallery;
