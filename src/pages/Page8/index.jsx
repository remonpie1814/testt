import React from "react";

import { Img, Text } from "components";
import FrameTwoHeader from "components/FrameTwoHeader";

const Page8 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-36 items-center justify-start mx-auto pb-[370px] md:px-10 sm:px-5 px-[370px] shadow-bs w-full">
        <FrameTwoHeader className="bg-white-A700 flex flex-col items-center justify-start max-w-[1180px] mx-auto md:px-5 py-[26px] w-full" />
        <div className="flex flex-col gap-[21px] items-center justify-start max-w-[1180px] mb-0.5 mx-auto w-full">
          <div className="flex flex-col items-center justify-start">
            <Text
              className="md:text-5xl text-[64px] text-black-900"
              size="txtInterRegular64"
            >
              소리갈피
            </Text>
          </div>
          <div className="md:h-[235px] h-[255px] p-2.5 relative w-[39%] sm:w-full">
            <div className="bg-orange-50 h-[235px] m-auto rounded-[29px] w-[96%]"></div>
            <div className="absolute bottom-[9%] flex flex-col gap-5 inset-x-[0] items-end justify-start mx-auto w-[83%]">
              <Img
                className="h-[120px]"
                src="images/img_frame19.svg"
                alt="frameNineteen"
              />
              <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                <div className="h-4 rounded-[3px] w-[11%]"></div>
                <Text
                  className="text-[15px] text-gray-900 tracking-[-0.17px] w-auto"
                  size="txtInterMedium15"
                >
                  아이디 저장
                </Text>
                <div className="h-4 rounded-[3px] w-[11%]"></div>
                <Text
                  className="text-[15px] text-gray-900 tracking-[-0.17px] w-auto"
                  size="txtInterMedium15Gray900"
                >
                  자동로그인
                </Text>
              </div>
            </div>
          </div>
          <Img
            className="h-[50px] sm:h-auto object-cover w-[430px] md:w-full"
            src="images/img_image55.png"
            alt="imageFiftyFive"
          />
          <Text
            className="text-[15px] text-gray-900 tracking-[-0.17px] w-auto"
            size="txtInterMedium15"
          >
            비밀번호 찾기 | 회원가입
          </Text>
        </div>
      </div>
    </>
  );
};

export default Page8;
