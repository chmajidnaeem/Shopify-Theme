import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import StoreImg from "/public/images/storeimgs.webp";
import Yoga from "/public/images/yogamat.webp";
import Img1 from "/public/images/ch1.jpg"
import Img2 from "/public/images/ch2.jpg"
import Img3 from "/public/images/ch3.jpg"

const Collection = () => {
  return (
    <div className="w-[100%] sm:w-[80%] md:w-[100%] py-5">
      <Wrapper>
        <p className="text-center text-[20px] lg:text-[56px] font-bold mt-10 lg:mt-20">
          OUR Collection
        </p>

        <div className="mt-10 grid md:grid-cols-4 gap-5">
          <div className="border border-green p-8">
            <Image src={Img1} alt="img"/>
            <p className="text-sm lg:text-xl font-semibold text-center my-3 lg:my-5 uppercase">
              Sports Bag
            </p>
          </div>
          <div className=" my-5 md:my-0 border border-green p-8">
            <Image src={Img2} alt="img" />
            <p className="text-sm lg:text-xl font-semibold text-center  lg:my-5 uppercase">
              Running Shoes
            </p>
          </div>
          <div className="my-5 md:my-0 border border-green p-8">
            <Image src={Img3} alt="img" />
            <p className="text-sm lg:text-xl font-semibold text-center my-3 lg:my-5 uppercase">
              Dumbbells
            </p>
          </div>
          <div className=" border border-green p-8">
            <Image src={Img2} alt="img" />
            <p className="text-sm lg:text-xl font-semibold text-center my-3 lg:my-5 uppercase">
              Yoga mat
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Collection;

