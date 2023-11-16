import React from "react";

import { Img, Text } from "components";
import Footer from "components/Footer";
import FrameTwoColumnbell111 from "components/FrameTwoColumnbell111";
import FrameTwoListthirteen from "components/FrameTwoListthirteen";

const FrameTwoPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <FrameTwoColumnbell111 className="bg-yellow-200 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <div className="flex flex-col items-center justify-start py-5 w-full">
          <div className="flex flex-col items-center justify-start pb-1 px-1 w-full">
            <div className="flex flex-row sm:gap-10 gap-[100px] items-start justify-start md:px-5 px-[30px] w-auto sm:w-full">
              <Text
                className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[-0.46px] w-auto"
                size="txtInterMedium24"
              >
                전체{" "}
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[-0.46px] w-auto"
                size="txtInterMedium24"
              >
                인기
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[-0.46px] w-auto"
                size="txtInterMedium24"
              >
                신작
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[-0.46px] w-auto"
                size="txtInterMedium24"
              >
                팔로우
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end pt-9 w-full">
            <div className="bg-blue_gray-100 flex flex-col gap-2.5 items-center justify-end p-9 sm:px-5 w-full">
              <div className="h-[108px] md:h-[165px] max-w-7xl mt-[57px] mx-auto md:px-5 relative w-full">
                <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[30%] my-auto w-[23%]">
                  <div className="flex flex-row items-start justify-between w-full">
                    <Img
                      className="h-[108px]"
                      src="images/img__black_900.svg"
                      alt="Five"
                    />
                    <Text
                      className="mt-[7px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[-0.46px]"
                      size="txtInterMedium24Black900"
                    >
                      메인 배너
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto pl-[5px] pt-[5px] top-[2%] w-full">
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
              </div>
              <div className="flex flex-row gap-4 items-start justify-start md:px-5 w-auto">
                <div className="h-4 w-4"></div>
                <div className="h-4 w-4"></div>
                <div className="h-4 w-4"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[1180px] mx-auto md:px-5 py-5 w-full">
          <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[247px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[685px] p-5 w-full">
              <div className="border-2 border-black-900 border-solid flex md:flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-[15px] w-[47%] md:w-full">
                <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                  <Img
                    className="h-12 md:h-auto object-cover w-[46px]"
                    src="images/img_image528.png"
                    alt="image528"
                  />
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[-0.46px] w-auto"
                    size="txtInterMedium24Black900"
                  >
                    내 동화 그리기
                  </Text>
                </div>
              </div>
              <div className="border-2 border-black-900 border-solid flex md:flex-1 flex-col items-center justify-start p-3 rounded-[15px] w-[47%] md:w-full">
                <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                  <Img
                    className="h-12 md:h-auto object-cover w-[46px]"
                    src="images/img_image528.png"
                    alt="image528_One"
                  />
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[-0.46px] w-auto"
                    size="txtInterMedium24Black900"
                  >
                    <>
                      다른 사람 동화
                      <br />
                      녹음하기
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
            <div className="md:h-[30px] h-[33px] relative w-[13%]">
              <div className="bg-yellow-200 h-[30px] m-auto rounded-[15px] w-full"></div>
              <Text
                className="absolute h-max inset-[0] justify-center m-auto text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[-0.42px] w-max"
                size="txtInterMedium22"
              >
                인기동화
              </Text>
            </div>
            <Text
              className="text-[22px] text-blue_gray-400 text-center sm:text-lg md:text-xl tracking-[-0.42px]"
              size="txtInterMedium22Bluegray400"
            >
              <>더보기 &gt;</>
            </Text>
          </div>
          <FrameTwoListthirteen className="sm:flex-col flex-row md:gap-10 gap-[60px] grid md:grid-cols-1 grid-cols-2 justify-start max-w-[1180px] w-full" />
          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
            <div className="md:h-[30px] h-[33px] relative w-[13%]">
              <div className="bg-yellow-200 h-[30px] m-auto rounded-[15px] w-full"></div>
              <Text
                className="absolute h-max inset-[0] justify-center m-auto text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[-0.42px] w-max"
                size="txtInterMedium22"
              >
                신작동화
              </Text>
            </div>
            <Text
              className="text-[22px] text-blue_gray-400 text-center sm:text-lg md:text-xl tracking-[-0.42px]"
              size="txtInterMedium22Bluegray400"
            >
              <>더보기 &gt;</>
            </Text>
          </div>
          <FrameTwoListthirteen className="sm:flex-col flex-row md:gap-10 gap-[60px] grid md:grid-cols-1 grid-cols-2 justify-start max-w-[1180px] w-full" />
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default FrameTwoPage;
