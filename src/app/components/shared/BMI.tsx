import React from "react";
import Wrapper from "../shared/Wrapper";

const BMI = () => {
  return (
    <Wrapper>
      <div className="xl:flex bg-[#FFF] gap-6 mt-32 mx-10">
        {/* Left side */}
        <div className="w-[90%]  xl:w-[50%]">
          <p className="text-lg lg:text-[56px] font-extrabold uppercase text-black">
            What is BMI.
          </p>
          <p className="sm: mx-auto lg:mt-8">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its page when at its
            layout
          </p>
          <div className="sm:flex gap-5">
            <input
              className="md:w-[301px] h-[54px] border border-[#EEE] bg-[#EEEEEE] mt-8 py-[15px] px-6 text-[#6C757D] focus:outline-none focus:border-green "
              placeholder="Height / Inch"
              type="text"
            />
            <input
              className="md:w-[301px] h-[54px] border border-[#EEE] bg-[#EEEEEE] mt-8 py-[15px] px-6 text-[#6C757D] focus:outline-none focus:border-green "
              placeholder="Weight / lbs"
              type="text"
            />
          </div>

          <div className="sm:flex gap-5">
            <input
              className="md:w-[301px] h-[54px] border border-[#EEE] bg-[#EEEEEE] mt-8 py-[15px] px-6 text-[#6C757D] focus:outline-none focus:border-green "
              placeholder="Age"
              type="text"
            />
            <select className="mx-auto md:mx-0 w-[117%] sm:w-[45%] lg:w-[301px] h-[54px] border border-[#EEE] bg-[#EEEEEE] mt-8 py-[15px] px-6 text-[#6C757D] focus:outline-none focus:border-green ">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            <select className="w-[117%] sm:w-[90%] lg:[190%] xl:w-[590px] h-[54px] border border-[#EEE] bg-[#EEEEEE] mt-8 py-[15px] px-6 text-[#6C757D] focus:outline-none focus:border-green ">
              <option>Select an activity factor:</option>
              <option>Little or no Exercise / desk job</option>
              <option>Light exercise / sports 1 - 3 days/ week</option>
              <option>Moderate exercise, sports 3 - 5 days/ week</option>
              <option>Heavy Exercise / sports 6 - 7 days/ week</option>
              <option>
                Very heavy exercise / physical job / training 2 x / day
              </option>
            </select>
          </div>          
          <div className="group flex gap-6 justify-center items-center bg-green w-[180px] py-4 mt-8 uppercase font-medium font-[Heebo] text-[#1D1D1D] hover:bg-black hover:text-white">
            <div>Calculate</div>
            <div className="w-2 h-2 bg-black rounded-full group-hover:bg-white"></div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-[100%] lg:w-[650px] h-[340px] mt-20">
          
          <div>
            <table>
              <thead className="text-center">
                <tr>
                  <th className="border border-[#EEE] border-t-0 border-l-0 py-4 md:px-28 uppercase">Bmi</th>
                  <th className="border border-[#EEE] border-t-0 border-r-0 md:px-24 uppercase">Weight Status</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td className="border border-[#EEE] border-l-0 py-5">Below 18.5</td>
                  <td className="border border-[#EEE] border-r-0">Underweight</td>
                </tr>
                <tr>
                  <td className="border border-[#EEE] border-l-0 py-5">18.5 - 24.9</td>
                  <td className="border border-[#EEE] border-r-0">Healthy</td>
                </tr>
                <tr>
                  <td className="border border-[#EEE] border-l-0 py-5">25.0 - 29.9</td>
                  <td className="border border-[#EEE] border-r-0">Overweight</td>
                </tr>
                <tr>
                  <td className="border border-[#EEE] border-l-0 py-5">30.0 - and Above</td>
                  <td className="border border-[#EEE] border-r-0">Obese</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </Wrapper>
  );
};

export default BMI;
