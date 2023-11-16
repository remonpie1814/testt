import React from "react";

import { Img, Text } from "components";

const Page1 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter gap-8 items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1180px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-center px-4 w-auto">
              <Img
                className="h-[51px] md:h-auto object-cover w-[170px]"
                src="images/img_.png"
                alt="ThirtyOne"
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
        <div className="flex flex-col gap-8 items-center justify-start max-w-[720px] md:px-5 w-full">
          <div className="flex flex-col items-center justify-start p-2.5 w-full">
            <Img
              className="h-[150px] md:h-auto object-cover w-[21%]"
              src="images/img__150x144.png"
              alt="ThirtyTwo"
            />
          </div>
          <div className="flex flex-col items-center justify-start px-2.5 w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:px-10 sm:px-5 px-[150px] w-auto md:w-full">
              <div className="md:h-[45px] h-[49px] relative w-[51%] sm:w-full">
                <div className="bg-deep_orange-100 h-[45px] m-auto w-3/4"></div>
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto text-base text-black-900 text-center tracking-[-0.18px] w-max"
                  size="txtInterMedium16Black900"
                >
                  사진 올리기
                </Text>
              </div>
              <div className="md:h-[45px] h-[49px] relative w-[51%] sm:w-full">
                <div className="bg-deep_orange-100 h-[45px] m-auto w-3/4"></div>
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto text-base text-black-900 text-center tracking-[-0.18px] w-max"
                  size="txtInterMedium16Black900"
                >
                  이미지 선택
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 items-start justify-start p-2.5 w-auto sm:w-full">
            <div className="h-16 rounded-md w-full"></div>
            <div className="flex flex-col items-center justify-center w-auto">
              <Text
                className="text-base text-green-A700 tracking-[-0.18px] w-auto"
                size="txtInterMedium16GreenA700"
              >
                사용가능한 닉네임 입니다
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start p-2.5 w-auto sm:w-full">
            <div className="h-60 rounded-md w-full"></div>
          </div>
          <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start p-2.5 w-auto sm:w-full">
            <div className="h-12 rounded-[3px] w-[49%]"></div>
            <div className="h-12 rounded-[3px] w-[49%]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
