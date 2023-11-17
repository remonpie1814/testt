import React from "react";

import { Img, Text } from "components";
import FrameTwoColumnlanguage from "components/FrameTwoColumnlanguage";
import FrameTwoHeader from "components/FrameTwoHeader";

const Page3 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <FrameTwoHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <FrameTwoColumnlanguage className="flex flex-col items-center justify-start outline outline-blue_gray-100_01 p-2 w-full" />
        <div className="flex flex-col h-[875px] md:h-auto items-center justify-start max-w-[1180px] mx-auto md:px-5 py-5 w-full">
          <Text
            className="bg-white-A700 h-[42px] justify-center sm:pr-5 pr-[35px] py-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[-0.53px] w-full"
            size="txtInterMedium28"
          >
            공지사항
          </Text>
        </div>
      </div>
    </>
  );
};

export default Page3;
