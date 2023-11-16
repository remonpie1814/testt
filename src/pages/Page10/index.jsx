import React from "react";

import { Img, Text } from "components";

const Page10 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[89px] items-center justify-start mx-auto pb-64 shadow-bs w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1180px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-center px-4 w-auto">
              <Img
                className="h-[51px] md:h-auto object-cover w-[170px]"
                src="images/img_.png"
                alt="OneHundredSeventyEight"
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
        <div className="flex flex-col gap-8 items-center justify-start max-w-[1180px] mx-auto md:px-5 w-full">
          <Text
            className="sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900 tracking-[-0.66px] w-auto"
            size="txtInterMedium35"
          >
            회원가입
          </Text>
          <div className="flex flex-col items-center justify-start w-[34%] md:w-full">
            <div className="h-[59px] relative w-full">
              <div className="h-[59px] m-auto rounded-md w-full"></div>
              <Text
                className="absolute h-max inset-y-[0] left-[6%] my-auto text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.46px]"
                size="txtInterMedium24Gray900"
              >
                이메일
              </Text>
            </div>
            <div className="h-[59px] md:h-[91px] mt-8 relative w-full">
              <div className="h-[59px] m-auto rounded-md w-full"></div>
              <Text
                className="absolute h-max inset-y-[0] left-[6%] my-auto text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.46px]"
                size="txtInterMedium24Gray900"
              >
                비밀번호
              </Text>
            </div>
            <div className="h-[59px] md:h-[91px] mt-8 relative w-full">
              <div className="h-[59px] m-auto rounded-md w-full"></div>
              <Text
                className="absolute h-max inset-y-[0] left-[6%] my-auto text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.46px]"
                size="txtInterMedium24Gray900"
              >
                비밀번호 확인
              </Text>
            </div>
            <div className="h-[59px] md:h-[91px] mt-8 relative w-full">
              <div className="h-[59px] m-auto rounded-md w-full"></div>
              <Text
                className="absolute h-max inset-y-[0] left-[6%] my-auto text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.46px]"
                size="txtInterMedium24"
              >
                닉네임(12자)
              </Text>
            </div>
            <div className="h-[51px] md:h-[83px] mt-8 relative w-full">
              <div className="h-[51px] m-auto rounded-[3px] w-full"></div>
              <div className="absolute flex flex-row h-max inset-[0] items-center justify-between m-auto w-[88%]">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.46px]"
                  size="txtInterMedium24"
                >
                  개인정보 이용동의
                </Text>
                <div className="h-7 rounded-[3px] w-[10%]"></div>
              </div>
            </div>
            <div className="md:h-[111px] h-[51px] mt-[60px] relative w-full">
              <div className="h-[51px] m-auto rounded-[3px] w-full"></div>
              <Text
                className="absolute bottom-[18%] inset-x-[0] mx-auto text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[-0.46px] w-max"
                size="txtInterMedium24"
              >
                회원가입
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page10;
