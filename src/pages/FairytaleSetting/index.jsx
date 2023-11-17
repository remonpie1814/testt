import React from "react";

import { Img, Text } from "components";
import FrameTwoColumnlanguage from "components/FrameTwoColumnlanguage";

const FairytaleSettingPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter gap-8 items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-8 items-center w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1180px] mx-auto md:px-5 w-full">
              <div className="flex flex-col items-center justify-center px-4 w-auto">
                <Img
                  className="h-[51px] md:h-auto object-cover w-[170px]"
                  src="images/img_.png"
                  alt="TwoHundredSixtyEight"
                />
              </div>
              <div className="flex flex-row gap-2.5 items-start justify-start py-2.5 w-auto">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_bell111.png"
                  alt="bell111"
                />
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_search111.png"
                  alt="search111"
                />
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_menu11.png"
                  alt="menuEleven"
                />
              </div>
            </div>
          </div>
          <FrameTwoColumnlanguage className="flex flex-col items-center justify-start outline outline-blue_gray-100 p-2 w-full" />
          <div className="flex flex-col items-center justify-start max-w-[1180px] mx-auto md:px-5 w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.53px] w-full"
              size="txtInterMedium28Gray900"
            >
              동화 설정하기
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1180px] mx-auto md:px-5 w-full">
            <div className="bg-blue_gray-100 h-[436px] w-[35%]"></div>
            <div className="flex flex-col gap-8 h-[436px] md:h-auto items-center justify-start w-[113px]">
              <div className="flex flex-col items-start justify-start p-4">
                <Text
                  className="mb-[47px] mt-1.5 sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[-0.53px]"
                  size="txtInterMedium28"
                >
                  제목
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start p-4">
                <Text
                  className="mb-[54px] mt-1.5 text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.42px]"
                  size="txtInterMedium22Black900"
                >
                  설명
                </Text>
              </div>
            </div>
            <Img
              className="h-[436px] w-[655px]"
              src="images/img_titlecontent.svg"
              alt="titlecontent"
            />
          </div>
        </div>
        <Text
          className="text-base text-black-900 tracking-[-0.30px] w-[233px]"
          size="txtInterMedium16Black900"
        >
          출판 후에는 수정이 불가능합니다.
        </Text>
        <div className="flex flex-col items-center md:px-10 sm:px-5 px-[645px] w-full">
          <div className="flex sm:flex-col flex-row gap-[9px] items-center justify-center w-auto md:w-full">
            <div className="bg-blue_gray-100 h-[59px] w-[60px]"></div>
            <Text
              className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.42px] w-[83px]"
              size="txtInterMedium22Black900"
            >
              출판 하기
            </Text>
            <Text
              className="text-[22px] text-green-500 sm:text-lg md:text-xl tracking-[-0.42px] w-[245px]"
              size="txtInterMedium22Green500"
            >
              모든 사람이 볼 수 있습니다.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default FairytaleSettingPage;
