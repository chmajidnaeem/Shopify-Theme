import React from "react";
import Wrapper from "../shared/Wrapper";

const TableChart = () => {
  return (
    <Wrapper>
      <p className="xl:w-[850px] mx-auto text-center text-[32px] lg:text-[56px] font-bold pt-10 lg:pt-20">
        FIND THE CLASS THAT SUITS YOU
      </p>
      <p className="mx-auto text-center lg:w-[795px] leading-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. the readable content of a page when looking at its layout.
      </p>
      <div>
        <div className="mx-auto flex lg:w-[795px] gap-2 invisible xl:visible">
          <div className="text-sm justify-center items-center text-center bg-green w-[110px] py-3 mt-8 uppercase font-medium font-[Heebo] ">
            All Events
          </div>
          <div className="text-sm justify-center items-center text-center bg-[#EEE] hover:bg-green w-[150px]  py-3 mt-8 px uppercase font-medium font-[Heebo]">
            {" "}
            KRUNCH & KORE
          </div>
          <div className="text-sm justify-center items-center text-center bg-[#EEE] hover:bg-green w-[100px]  py-3 mt-8 px uppercase font-medium font-[Heebo]">
            {" "}
            CARDIO
          </div>
          <div className="text-sm justify-center items-center text-center bg-[#EEE] hover:bg-green w-[100px]  py-3 mt-8 px uppercase font-medium font-[Heebo]">
            {" "}
            CROSSFIT
          </div>
          <div className="text-sm justify-center items-center text-center bg-[#EEE] hover:bg-green w-[100px]  py-3 mt-8 px uppercase font-medium font-[Heebo]">
            {" "}
            OPEN GYM
          </div>
          <div className="text-sm justify-center items-center text-center bg-[#EEE] hover:bg-green w-[110px]  py-3 mt-8 px uppercase font-medium font-[Heebo]">
            {" "}
            TOTAL BODY
          </div>
          <div className="text-sm justify-center items-center text-center bg-[#EEE] hover:bg-green w-[90px]  py-3 mt-8 px uppercase font-medium font-[Heebo]">
            {" "}
            YOGA
          </div>
        </div>
      </div>

      <div className="lg:mt-32  mx-auto">
        <table>
          <thead>
            <tr>
              <th className="mx-auto uppercase bg-[#000] text-[#FFF] py-2 md:px-12">
                Monday
              </th>
              <th className="uppercase bg-[#000] text-[#FFF] py-2 md:px-12">
                Tuesday
              </th>
              <th className="uppercase bg-[#000] text-[#FFF] py-2 md:px-12">
                Wednesday
              </th>
              <th className="uppercase bg-[#000] text-[#FFF] py-2 md:px-12">
                Thursday
              </th>
              <th className="uppercase bg-[#000] text-[#FFF] py-2 md:px-12">
                Friday
              </th>
              <th className="uppercase bg-[#000] text-[#FFF] py-2 md:px-12">
                Saturday
              </th>
              <th className="uppercase bg-[#000] text-[#FFF] py-2 md:px-12">
                Sunday
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="border border-[#EEE] text-[16px] font-normal py-5">
                3:00 am
              </td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5 hover:bg-green col-span-1 row-span-2">
                KRUNCH & KORE
              </td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5  hover:bg-green">
                OPEN GYM
              </td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5  hover:bg-green">
                OPEN GYM
              </td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
            </tr>
            <tr>
              <td className="border border-[#EEE] text-[16px] font-normal py-5">
                4:00 am
              </td>
              <td className="border border-[#EEE] text-[14px]  py-5  hover:bg-green">
                KRUNCH & KORE
              </td>
              <td className="border border-[#EEE] text-[14px]  py-5  hover:bg-green">
                KRUNCH & KORE
              </td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
              <td className="border border-[#EEE] text-[14px]  py-5  hover:bg-green">
                KRUNCH & KORE
              </td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
            </tr>
            <tr>
              <td className="border border-[#EEE] text-[16px] font-normal py-5">
                6:00 am
              </td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5 col-span-1 row-span-2"></td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5 hover:bg-green">
                OPEN GYM
              </td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5  hover:bg-green"></td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5 hover:bg-green">
                OPEN GYM
              </td>
            </tr>
            <tr>
              <td className="border border-[#EEE] text-[16px] font-normal py-5">
                7:00 am
              </td>
              <td className="border border-[#EEE] text-[14px]  py-5 "></td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
              <td className="border border-[#EEE] text-[14px]  py-5 hover:bg-green">
                KRUNCH & KORE
              </td>
              <td className="border border-[#EEE] text-[14px]  py-5 hover:bg-green">
                KRUNCH & KORE
              </td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
            </tr>
            <tr>
              <td className="border border-[#EEE] text-[16px] font-normal py-5">
                8:00 am
              </td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5 col-span-1 row-span-2"></td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5 hover:bg-green">
                Cardio
              </td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
            </tr>
            <tr>
              <td className="border border-[#EEE] text-[16px] font-normal py-5">
                11:00 am
              </td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5 hover:bg-green">
                CARDIO
              </td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5 hover:bg-green">
                TOTAL BODY
              </td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5 hover:bg-green">
                OPEN GYM
              </td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5 hover:bg-green">
                CROSSFIT
              </td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5 hover:bg-green">
                TOTAL BODY
              </td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5 hover:bg-green">
                yoga
              </td>
            </tr>
            <tr>
              <td className="border border-[#EEE] text-[16px] font-normal py-5">
                12:00 pm
              </td>
              <td className="border border-[#EEE] text-[14px]  py-5 hover:bg-green">
                KRUNCH & KORE
              </td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
              <td className="border border-[#EEE] text-[14px]  py-5 hover:bg-green">
                KRUNCH & KORE
              </td>
              <td className="border border-[#EEE] text-[14px]  py-5 hover:bg-green">
                KRUNCH & KORE
              </td>
              <td className="border border-[#EEE] text-[14px]  py-5 hover:bg-green">
                KRUNCH & KORE
              </td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
            </tr>
            <tr>
              <td className="border border-[#EEE] text-[16px] font-normal py-5">
                1:00 pm
              </td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5 hover:bg-green">
                CARDIO
              </td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5 hover:bg-green">
                OPEN GYM
              </td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5 hover:bg-green">
                KRUNCH & KORE
              </td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
            </tr>
            <tr>
              <td className="border border-[#EEE] text-[16px] font-normal py-5">
                2:00 pm
              </td>
              <td className="border border-[#EEE] text-[14px]  py-5 hover:bg-green">
                KRUNCH & KORE
              </td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
              <td className="border border-[#EEE] text-[14px]  py-5 hover:bg-green">
                KRUNCH & KORE
              </td>
              <td className="border border-[#EEE] text-[14px]  py-5 hover:bg-green">
                KRUNCH & KORE
              </td>
              <td className="border border-[#EEE] text-[14px]  py-5 hover:bg-green">
                KRUNCH & KORE
              </td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
            </tr>
            <tr>
              <td className="border border-[#EEE] text-[16px] font-normal py-5">
                3:00 pm
              </td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5 hover:bg-green">
                CROSSFIT
              </td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5 hover:bg-green">
                yoga
              </td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
            </tr>
            <tr>
              <td className="border border-[#EEE] text-[16px] font-normal py-5">
                4:00 pm
              </td>
              <td className="border border-[#EEE] text-[14px]  py-5 hover:bg-green">
                KRUNCH & KORE
              </td>
              <td className="border border-[#EEE] text-[14px]  py-5 hover:bg-green">
                KRUNCH & KORE
              </td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
            </tr>
            <tr>
              <td className="border border-[#EEE] text-[16px] font-normal py-5">
                5:00 pm
              </td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5 hover:bg-green">
                yoga
              </td>
            </tr>
            <tr>
              <td className="border border-[#EEE] text-[16px] font-normal py-5">
                6:00 pm
              </td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
              <td className="border border-[#EEE] text-[14px]  py-5 hover:bg-green">
                KRUNCH & KORE
              </td>
            </tr>
            <tr>
              <td className="border border-[#EEE] text-[16px] font-normal py-5">
                7:00 pm
              </td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5"></td>
              <td className="border border-[#EEE] text-[14px] font-bold py-5 hover:bg-green">
                yoga
              </td>
            </tr>
            <tr>
              <td className="border border-[#EEE] text-[16px] font-normal py-5">
                8:00 pm
              </td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
              <td className="border border-[#EEE] text-[14px]  py-5 hover:bg-green">
                KRUNCH & KORE
              </td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
            </tr>
            <tr>
              <td className="border border-[#EEE] text-[16px] font-normal py-5">
                9:00 pm
              </td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
              <td className="border border-[#EEE] text-[14px]  py-5 hover:bg-green">
                KRUNCH & KORE
              </td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
              <td className="border border-[#EEE] text-[14px]  py-5"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default TableChart;
