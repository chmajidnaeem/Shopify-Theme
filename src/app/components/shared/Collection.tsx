import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import StoreImg from "/public/images/storeimgs.webp";
import Yoga from "/public/images/yogamat.webp";
import Img1 from "/public/images/ch1.jpg"
import Img2 from "/public/images/ch2.jpg"
import Img3 from "/public/images/ch3.jpg"

const Collection = () => {
  return (
    <div className="">
      <Wrapper>
        <p className="text-center text-3xl lg:text-[56px] font-bold mt-10 lg:mt-20 text-black uppercase">OUR Collection</p>
       

        <div className="mt-10 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-5">
          <div className="border border-green p-4">
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <Image
                src={Img1}
                className="transition duration-300 ease-in-out hover:scale-110"
                alt="Louvre" />
            </div>
            <p className="lg:text-xl font-semibold text-center my-5 uppercase">
              Sports Bag
            </p>
            <button className="text-black bg-[#c1e502] px-6 py-2 hover:bg-black hover:text-white duration-500 transform mx-12 md:mx-20 align-center content-center">Learn More</button>
          </div>


          <div className=" my-5 md:my-0 border border-green p-4">
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <Image
                src={Img2}
                className="transition duration-300 ease-in-out hover:scale-110"
                alt="Louvre" />
            </div>
            <p className="lg:text-xl font-semibold text-center my-5 uppercase">
              Running Shoes
            </p>
            <button className="text-black bg-[#c1e502] px-6 py-2 hover:bg-black hover:text-white duration-500 transform mx-12 md:mx-20">Learn More</button>
          </div>


          <div className="my-5 md:my-0 border border-green p-4">
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <Image
                src={Img3}
                className="transition duration-300 ease-in-out hover:scale-110"
                alt="Louvre" />
            </div>
            <p className="lg:text-xl font-semibold text-center my-5 uppercase">
              Dumbbells
            </p>
            <button className="text-black bg-[#c1e502] px-6 py-2 hover:bg-black hover:text-white duration-500 transform mx-12 md:mx-20">Learn More</button>
          </div>


          <div className=" border border-green p-4">
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <Image
                src={Img2}
                className="transition duration-300 ease-in-out hover:scale-110"
                alt="Louvre" />
            </div>
            <p className="lg:text-xl font-semibold text-center my-5 uppercase">
              Yoga mat
            </p>
            <button className="text-black bg-[#c1e502] px-6 py-2 hover:bg-black hover:text-white duration-500 transform mx-12 md:mx-20">Learn More</button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Collection;

