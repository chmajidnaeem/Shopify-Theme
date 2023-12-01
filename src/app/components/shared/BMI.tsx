"use client";

import React, { useState } from "react";
import Wrapper from "../shared/Wrapper";

const BMI = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectActivity, setSelectActivity] = useState("");

  const handleSelect = (gender: any) => {
    setSelectedGender(gender);
    setOpen(false);
  };

  const handleSelect1 = (activity: any) => {
    setSelectActivity(activity);
    setOpen1(false);
  };
  return (
    <Wrapper>
      <div className="xl:flex bg-[#FFF] gap-6 mt-32 md:mx-10">
        {/* Left side */}
        <div className="w-[90%] xl:w-[50%]">
          <p className="text-center text-3xl lg:text-5xl font-semibold text-black">
            What is BMI.
          </p>
          <p className="sm: mx-auto text-xl lg:mt-8">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its page when at its
            layout
          </p>
          <div className="sm:flex gap-5">
            <input
              className="md:w-[301px] h-[54px] border border-[#EEE] bg-[#f5f5f5] mt-8 py-[15px] px-6 text-[#6C757D] focus:outline-none focus:border-green "
              placeholder="Height / Inch"
              type="text"
            />
            <input
              className="md:w-[301px] h-[54px] border border-[#EEE] bg-[#f5f5f5] mt-8 py-[15px] px-6 text-[#6C757D] focus:outline-none focus:border-green "
              placeholder="Weight / lbs"
              type="text"
            />
          </div>

          <div className="sm:flex gap-5">
            <input
              className="md:w-[301px] h-[54px] border border-[#EEE] bg-[#f5f5f5] mt-8 py-[15px] px-6 text-[#6C757D] focus:outline-none focus:border-green "
              placeholder="Age"
              type="text"
            />

            <div className="relative inline-block text-left">
              <button
                onClick={() => setOpen(!open)}
                type="button"
                className="inline-flex justify-between items-center mx-auto md:mx-0 w-[117%] sm:w-[45%] lg:w-[301px] h-[54px] border border-[#EEE] bg-[#f5f5f5] mt-8 py-[15px] px-6 text-[#6C757D] focus:outline-none focus:border-green"
              >
                {selectedGender || "Select Gender"}
                <svg
                  className={`ml-2 w-5 h-5 ${
                    open ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {open && (
                <div className="absolute z-10 mt-2 w-[300px] shadow-lg ring-1 ring-black ring-opacity-5">
                  <ul className="py-1 bg-[#f5f5f5]">
                    <li
                      onClick={() => handleSelect("Male")}
                      className="flex justify-start px-4 py-2 text-sm text-[#6C757D] hover:bg-green cursor-pointer"
                    >
                      Male
                    </li>
                    <li
                      onClick={() => handleSelect("Female")}
                      className="flex justify-start px-4 py-2 text-sm text-[#6C757D] hover:bg-green cursor-pointer"
                    >
                      Female
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="relative inline-block text-left">
            <button
              onClick={() => setOpen1(!open1)}
              type="button"
              className="inline-flex justify-between items-center mx-auto md:mx-0 w-[117%] sm:w-[90%] lg:[190%] xl:w-[620px] h-[54px] border border-[#EEE] bg-[#f5f5f5] mt-8 py-[15px] px-6 text-[#6C757D] focus:outline-none focus:border-green"
            >
              {selectActivity || "Select an activity factor:"}
              <svg
                className={`ml-2 w-5 h-5 ${
                  open1 ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {open1 && (
              <div className="absolute z-10 mt-2 w-[117%] sm:w-[90%] lg:[190%] xl:w-[620px] shadow-lg ring-1 ring-black ring-opacity-5">
                <ul className="py-1 bg-[#f5f5f5]">
                  <li
                    onClick={() =>
                      handleSelect1("Little or no Exercise / desk job")
                    }
                    className="flex justify-start px-4 py-2 text-sm text-[#6C757D] hover:bg-green cursor-pointer"
                  >
                    Little or no Exercise / desk job
                  </li>
                  <li
                    onClick={() =>
                      handleSelect1("Light exercise / sports 1 - 3 days/ week")
                    }
                    className="flex justify-start px-4 py-2 text-sm text-[#6C757D] hover:bg-green cursor-pointer"
                  >
                    Light exercise / sports 1 - 3 days/ week
                  </li>
                  <li
                    onClick={() =>
                      handleSelect1(
                        "Moderate exercise, sports 3 - 5 days/ week"
                      )
                    }
                    className="flex justify-start px-4 py-2 text-sm text-[#6C757D] hover:bg-green cursor-pointer"
                  >
                    Moderate exercise, sports 3 - 5 days/ week
                  </li>
                  <li
                    onClick={() =>
                      handleSelect1("Heavy Exercise / sports 6 - 7 days/ week")
                    }
                    className="flex justify-start px-4 py-2 text-sm text-[#6C757D] hover:bg-green cursor-pointer"
                  >
                    Heavy Exercise / sports 6 - 7 days/ week
                  </li>
                  <li
                    onClick={() =>
                      handleSelect1(
                        "Very heavy exercise / physical job / training 2 x / day"
                      )
                    }
                    className="flex justify-start px-4 py-2 text-sm text-[#6C757D] hover:bg-green cursor-pointer"
                  >
                    Very heavy exercise / physical job / training 2 x / day
                  </li>
                </ul>
              </div>
            )}
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
                  <th className="border border-[#EEE] border-t-0 border-l-0 py-4 md:px-28 uppercase">
                    Bmi
                  </th>
                  <th className="border border-[#EEE] border-t-0 border-r-0 md:px-24 uppercase">
                    Weight Status
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td className="border border-[#EEE] border-l-0 py-5">
                    Below 18.5
                  </td>
                  <td className="border border-[#EEE] border-r-0">
                    Underweight
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#EEE] border-l-0 py-5">
                    18.5 - 24.9
                  </td>
                  <td className="border border-[#EEE] border-r-0">Healthy</td>
                </tr>
                <tr>
                  <td className="border border-[#EEE] border-l-0 py-5">
                    25.0 - 29.9
                  </td>
                  <td className="border border-[#EEE] border-r-0">
                    Overweight
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#EEE] border-l-0 py-5">
                    30.0 - and Above
                  </td>
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
