import React from "react";

import { Img, Text } from "components";
import FrameTwoHeader from "components/FrameTwoHeader";
import Page28Columnlanguage from "components/Page28Columnlanguage";

const Page9 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-start mx-auto pb-[1020px] w-full">
        <div className="flex flex-col items-center w-full">
          <FrameTwoHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
          <Page28Columnlanguage className="flex flex-col items-center justify-start outline outline-blue_gray-100 p-2 w-full" />
        </div>
        <div className="flex flex-row gap-[11px] items-start justify-start md:ml-[0] ml-[370px] mt-[148px] md:px-5 w-auto sm:w-full">
          <Text
            className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[-0.42px] w-10"
            size="txtInterMedium22Black900"
          >
            분류
          </Text>
          <div className="bg-blue_gray-100 flex flex-col items-start justify-start rounded-[5px] w-auto">
            <div className="flex flex-row gap-[98px] items-end justify-end w-[52%] md:w-full">
              <Text
                className="mb-1 mt-[7px] text-base text-black-900 text-center tracking-[-0.30px]"
                size="txtInterMedium16Black900"
              >
                기타
              </Text>
              <Img
                className="h-8 md:h-auto object-cover w-8"
                src="images/img_down11_32x32.png"
                alt="downEleven"
              />
            </div>
          </div>
        </div>
        <Text
          className="md:ml-[0] ml-[381px] mt-[67px] text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[-0.42px]"
          size="txtInterMedium22Black900"
        >
          내용
        </Text>
      </div>
    </>
  );
};

export default Page9;
