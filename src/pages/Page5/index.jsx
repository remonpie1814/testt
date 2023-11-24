import React from "react";

import { Img, Text } from "components";
import FollowColumnlanguage from "components/FollowColumnlanguage";
import FrameTwoHeader from "components/FrameTwoHeader";
import Rowonehundredtwentythree from "components/Rowonehundredtwentythree";

const Page5 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <FrameTwoHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <FollowColumnlanguage className="flex flex-col items-center justify-start outline outline-blue_gray-100_01 p-2 w-full" />
        <Text
          className="bg-white-A700 h-[78px] justify-center sm:px-5 px-[35px] py-[21px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[-0.53px] w-full"
          size="txtInterMedium28"
        >
          공지사항
        </Text>
        <div className="flex flex-col gap-[29px] items-center justify-center md:px-5 py-[37px] w-auto md:w-full">
          <Rowonehundredtwentythree className="bg-white-A700 border-b border-black-900_a5 border-solid flex md:flex-col flex-row md:gap-10 gap-[90px] h-[46px] md:h-auto items-center justify-start py-[9px] w-auto md:w-full" />
          <div className="bg-white-A700 border-b border-black-900_a5 border-solid flex md:flex-col flex-row md:gap-10 gap-[90px] h-[46px] md:h-auto items-center justify-start py-[9px] w-auto md:w-full">
            <Text
              className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.22px] w-auto"
              size="txtInterMedium22Black900"
            >
              123
            </Text>
            <Text
              className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.22px] w-auto"
              size="txtInterMedium22Black900"
            >
              ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ...
            </Text>
            <Text
              className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.22px] w-[119px]"
              size="txtInterMedium22Black900"
            >
              2023. 11. 17
            </Text>
          </div>
          <Rowonehundredtwentythree className="bg-white-A700 border-b border-black-900_a5 border-solid flex md:flex-col flex-row md:gap-10 gap-[90px] h-[46px] md:h-auto items-center justify-start py-[9px] w-auto md:w-full" />
          <Rowonehundredtwentythree className="bg-white-A700 border-b border-black-900_a5 border-solid flex md:flex-col flex-row md:gap-10 gap-[90px] h-[46px] md:h-auto items-center justify-start py-[9px] w-auto md:w-full" />
          <Rowonehundredtwentythree className="bg-white-A700 border-b border-black-900_a5 border-solid flex md:flex-col flex-row md:gap-10 gap-[90px] h-[46px] md:h-auto items-center justify-start py-[9px] w-auto md:w-full" />
          <Rowonehundredtwentythree className="bg-white-A700 border-b border-black-900_a5 border-solid flex md:flex-col flex-row md:gap-10 gap-[90px] h-[46px] md:h-auto items-center justify-start py-[9px] w-auto md:w-full" />
          <Rowonehundredtwentythree className="bg-white-A700 border-b border-black-900_a5 border-solid flex md:flex-col flex-row md:gap-10 gap-[90px] h-[46px] md:h-auto items-center justify-start py-[9px] w-auto md:w-full" />
        </div>
      </div>
    </>
  );
};

export default Page5;
