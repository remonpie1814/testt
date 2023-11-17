import React from "react";

import { Img, Text } from "components";
import FrameTwoHeader from "components/FrameTwoHeader";

const Page = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter gap-8 items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <FrameTwoHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <div className="flex flex-col gap-[35px] h-[1005px] md:h-auto items-end justify-start max-w-[720px] md:px-5 w-full">
          <div className="flex flex-row gap-2 items-center justify-between max-w-[720px] w-full">
            <Img
              className="h-[120px] md:h-auto object-cover w-[120px]"
              src="images/img__120x120.png"
              alt="FortyTwo"
            />
            <Text
              className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[-0.46px] w-auto"
              size="txtInterMedium24Gray900"
            >
              현진
            </Text>
            <div className="flex flex-col gap-2 items-start justify-center w-auto">
              <Text
                className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[-0.26px] w-full"
                size="txtInterMedium24Gray900"
              >
                팔로워
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[-0.26px]"
                size="txtInterMedium24Gray900"
              >
                40
              </Text>
            </div>
            <div className="flex flex-col gap-2 h-[84px] md:h-auto items-start justify-between w-auto">
              <Text
                className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[-0.26px] w-full"
                size="txtInterMedium24Gray900"
              >
                팔로잉
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[-0.26px]"
                size="txtInterMedium24Gray900"
              >
                40
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-end w-auto">
            <div className="flex flex-col items-end justify-start w-auto">
              <div className="flex flex-col items-start justify-center w-auto">
                <div className="h-[39px] rounded-[3px] w-full"></div>
              </div>
            </div>
          </div>
          <div className="py-[23px] relative w-full">
            <div className="bg-gray-300 h-[150px] m-auto w-full"></div>
            <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto md:pr-10 pr-11 sm:pr-5 py-11">
              <Text
                className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[-0.46px]"
                size="txtInterMedium24"
              >
                자기소개
              </Text>
            </div>
          </div>
          <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
            <Text
              className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900 tracking-[-0.29px] w-auto"
              size="txtInterMedium26"
            >
              내 책장
            </Text>
            <div className="flex flex-row gap-[18px] items-start justify-between w-auto">
              <Text
                className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                size="txtInterMedium16Gray900"
              >
                전체 보기
              </Text>
              <Img
                className="h-5 md:h-auto object-cover w-[25px]"
                src="images/img_image811.png"
                alt="Fifty"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[75px] w-auto md:w-full">
            <div className="sm:gap-5 gap-[60px] grid sm:grid-cols-1 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="border border-black-900 border-solid flex flex-1 flex-col items-center justify-start pb-1.5 rounded-[20px] w-full">
                <Img
                  className="h-[194px] md:h-auto object-cover rounded-[20px] w-full"
                  src="images/img_image917_194x150.png"
                  alt="image917"
                />
              </div>
              <div className="border border-black-900 border-solid flex flex-1 flex-col items-center justify-start pb-1.5 rounded-[20px] w-full">
                <Img
                  className="h-[194px] md:h-auto object-cover rounded-[20px] w-full"
                  src="images/img_image917_194x150.png"
                  alt="image917"
                />
              </div>
              <div className="border border-black-900 border-solid flex flex-1 flex-col items-center justify-start pb-1.5 rounded-[20px] w-full">
                <Img
                  className="h-[194px] md:h-auto object-cover rounded-[20px] w-full"
                  src="images/img_image917_194x150.png"
                  alt="image917"
                />
              </div>
              <div className="border border-black-900 border-solid flex flex-1 flex-col items-center justify-start pb-1.5 rounded-[20px] w-full">
                <Img
                  className="h-[194px] md:h-auto object-cover rounded-[20px] w-full"
                  src="images/img_image917_194x150.png"
                  alt="image917"
                />
              </div>
              <div className="border border-black-900 border-solid flex flex-1 flex-col items-center justify-start pb-1.5 rounded-[20px] w-full">
                <Img
                  className="h-[194px] md:h-auto object-cover rounded-[20px] w-full"
                  src="images/img_image917_194x150.png"
                  alt="image917"
                />
              </div>
              <div className="border border-black-900 border-solid flex flex-1 flex-col items-center justify-start pb-1.5 rounded-[20px] w-full">
                <Img
                  className="h-[194px] md:h-auto object-cover rounded-[20px] w-full"
                  src="images/img_image917_194x150.png"
                  alt="image917"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
