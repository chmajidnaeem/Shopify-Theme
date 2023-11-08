import React from "react";
import Wrapper from "../shared/Wrapper";
import StoreImg from "/public/images/storeimgs.webp";
import Image from "next/image";

const Collection = () => {
  return (
    <Wrapper>
      <p className="text-center text-[32px] lg:text-[56px] font-bold pt-20">
        OUR Collection
      </p>
      <div className="mt-20 grid col-span-1 lg:grid-cols-3">
        <div >
          <Image src={StoreImg} alt="img"  />
          <p className="text-xl font-semibold mx-16 my-5 uppercase">Running Shoes</p>
        </div>
        <div >
          <Image src={StoreImg} alt="img" />
          <p className="text-xl font-semibold mx-16 my-5 uppercase">Sports Bag</p>
        </div>
        <div >
          <Image src={StoreImg} alt="img" />
          <p className="text-xl font-semibold mx-16 my-5 uppercase">Dumbbells</p>
        </div>
        
      </div>
    </Wrapper>
  );
};

export default Collection;
