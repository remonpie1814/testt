import React from "react";

import { Img, Text } from "components";
import FrameTwoColumnlanguage from "components/FrameTwoColumnlanguage";
import FrameTwoHeader from "components/FrameTwoHeader";
import FrameTwoListtwelve from "components/FrameTwoListtwelve";

const FrameTwoPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <FrameTwoHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <FrameTwoColumnlanguage className="flex flex-col items-center justify-start p-2 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="md:h-[290px] h-[300px] pt-2.5 md:px-5 relative w-full">
            <div className="h-[290px] m-auto w-full">
              <div className="bg-blue_gray-100 h-[290px] m-auto w-full"></div>
              <div className="absolute flex flex-row gap-[99px] items-start justify-center left-[38%] top-[29%] w-[15%]">
                <Img
                  className="h-[108px]"
                  src="images/img__black_900.svg"
                  alt="Five"
                />
                <Text
                  className="mt-[7px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[-0.46px]"
                  size="txtInterMedium24"
                >
                  메인 배너
                </Text>
              </div>
            </div>
            <div className="absolute bottom-[12%] flex flex-col md:gap-10 gap-20 inset-x-[0] items-center justify-start mx-auto w-[67%]">
              <div className="flex flex-row md:gap-10 items-start justify-between pl-[5px] pt-[5px] w-full">
                <Text
                  className="ml-[3px] rotate-[180deg] text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.46px]"
                  size="txtInterMedium24WhiteA700"
                >
                  <>&gt;</>
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.46px]"
                  size="txtInterMedium24WhiteA700"
                >
                  <>&gt;</>
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-start justify-start w-auto">
                <div className="h-4 w-4"></div>
                <div className="h-4 w-4"></div>
                <div className="h-4 w-4"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[1180px] mx-auto md:px-5 py-5 w-full">
          <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[247px] w-full">
            <div className="flex flex-col items-center justify-start p-5 w-full">
              <div className="border-2 border-black-900 border-solid flex flex-col items-center justify-start p-6 sm:px-5 rounded-[15px] w-[54%] md:w-full">
                <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                  <Img
                    className="h-12 md:h-auto object-cover w-[46px]"
                    src="images/img_image528.png"
                    alt="image528"
                  />
                  <Text
                    className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
                    size="txtInterBold22"
                  >
                    내 동화 그리기
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:gap-10 items-center justify-between pr-3.5 w-full">
            <div className="md:h-[30px] h-[33px] relative w-[13%]">
              <div className="bg-yellow-200 h-[30px] m-auto rounded-[15px] w-full"></div>
              <Text
                className="absolute h-max inset-[0] justify-center m-auto text-base text-black-900 text-center tracking-[-0.30px] w-max"
                size="txtInterMedium16"
              >
                인기동화
              </Text>
            </div>
            <Text
              className="text-blue_gray-400 text-center text-sm tracking-[-0.27px]"
              size="txtInterMedium14"
            >
              <>더보기 &gt;</>
            </Text>
          </div>
          <FrameTwoListtwelve className="sm:flex-col flex-row md:gap-10 gap-[60px] grid md:grid-cols-1 grid-cols-2 justify-start w-full" />
          <div className="flex flex-row md:gap-10 items-center justify-between pr-3.5 w-full">
            <div className="md:h-[30px] h-[33px] relative w-[13%]">
              <div className="bg-yellow-200 h-[30px] m-auto rounded-[15px] w-full"></div>
              <Text
                className="absolute h-max inset-[0] justify-center m-auto text-base text-black-900 text-center tracking-[-0.30px] w-max"
                size="txtInterMedium16"
              >
                신작동화
              </Text>
            </div>
            <Text
              className="text-blue_gray-400 text-center text-sm tracking-[-0.27px]"
              size="txtInterMedium14"
            >
              <>더보기 &gt;</>
            </Text>
          </div>
          <FrameTwoListtwelve className="sm:flex-col flex-row md:gap-10 gap-[60px] grid md:grid-cols-1 grid-cols-2 justify-start w-full" />
        </div>
        <footer className="bg-blue_gray-50 flex items-center justify-center md:px-5 w-full">
          <div className="bg-gray-100 flex flex-col items-center justify-center pb-[30px] sm:px-5 px-[30px] w-full">
            <div className="flex flex-col gap-[25px] items-center justify-start max-w-[1180px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-start justify-center max-w-[1180px] md:px-10 sm:px-5 px-[60px] py-[25px] w-full">
                <div className="flex flex-col items-start justify-start pr-1.5 py-1.5">
                  <Text
                    className="text-base text-black-900 tracking-[-0.30px]"
                    size="txtInterMedium16"
                  >
                    고객센터
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start p-[5px]">
                  <Text
                    className="md:ml-[0] ml-[5px] text-base text-black-900 text-center tracking-[-0.30px]"
                    size="txtInterMedium16"
                  >
                    공지사항
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-center md:px-10 sm:px-5 px-[60px] py-2.5 w-full">
                <Text
                  className="text-base text-black-900 tracking-[-0.30px] w-auto"
                  size="txtInterMedium16"
                >
                  사업자 정보
                </Text>
                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                  <Text
                    className="text-base text-black-900 tracking-[-0.30px] w-auto"
                    size="txtInterMedium16"
                  >
                    이용약관
                  </Text>
                  <Text
                    className="text-base text-blue_gray-400 tracking-[-0.30px] w-auto"
                    size="txtInterMedium16Bluegray400"
                  >
                    개인정보 처리방침
                  </Text>
                </div>
              </div>
              <Img
                className="h-[92px] w-full"
                src="images/img__blue_gray_100.svg"
                alt="TwentyOne"
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FrameTwoPage;
