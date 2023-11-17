import React from "react";

import { CheckBox, Img, Input, Text } from "components";
import Footer1 from "components/Footer1";
import FrameTwoHeader from "components/FrameTwoHeader";

const Page8 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto shadow-bs w-auto sm:w-full md:w-full">
        <FrameTwoHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <div className="flex flex-col gap-5 h-[720px] md:h-auto items-center justify-start md:px-5 py-[120px] w-[720px] md:w-full">
          <div className="bg-amber-100 flex flex-col gap-[18px] items-center justify-start px-10 sm:px-5 py-[30px] rounded-[20px] w-auto sm:w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
              size="txtInterRegular28"
            >
              로그인
            </Text>
            <div className="flex flex-col gap-[18px] items-center justify-start w-full">
              <Input
                name="input"
                placeholder="이메일"
                className="font-medium md:text-xl p-0 placeholder:text-black-900 sm:text-lg text-[22px] text-left tracking-[-0.42px] w-full"
                wrapClassName="border-[5px] border-gray-300 border-solid w-full"
                color="white_A700"
                variant="fill"
              ></Input>
              <Input
                name="input_One"
                placeholder="비밀번호"
                className="font-medium md:text-xl p-0 placeholder:text-black-900 sm:text-lg text-[22px] text-left tracking-[-0.42px] w-full"
                wrapClassName="border-[5px] border-gray-300 border-solid w-full"
                color="white_A700"
                variant="fill"
              ></Input>
              <div className="flex relative w-[230px]">
                <div className="h-5 my-auto w-[61%] sm:w-full">
                  <CheckBox
                    className="font-medium my-auto text-[15px] text-left tracking-[-0.17px]"
                    inputClassName="absolute h-5 mr-[5px] outline outline-[2px] outline-gray-300 w-5"
                    name="TwoHundredFiftySix"
                    id="TwoHundredFiftySix"
                    label="아이디 저장"
                  ></CheckBox>
                  <CheckBox
                    className="font-medium my-auto sm:pr-5 text-[15px] text-left tracking-[-0.17px]"
                    inputClassName="absolute h-5 mr-[5px] outline outline-[2px] outline-gray-300 w-5"
                    name="TwoHundredFiftySeven"
                    id="TwoHundredFiftySeven"
                    label="아이디 저장"
                  ></CheckBox>
                </div>
                <CheckBox
                  className="font-medium ml-[-20px] my-auto text-[15px] text-left tracking-[-0.17px] z-[1]"
                  inputClassName="h-5 mr-[5px] outline outline-[2px] outline-gray-300 w-5 z-[1]"
                  name="TwoHundredFiftyEight"
                  id="TwoHundredFiftyEight"
                  label="자동로그인"
                ></CheckBox>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[272px] w-full">
            <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
              <Text
                className="text-[15px] text-center text-gray-900 tracking-[-0.17px] w-auto"
                size="txtInterMedium15"
              >
                비밀번호 찾기
              </Text>
              <Text
                className="text-[15px] text-center text-gray-900 tracking-[-0.17px] w-auto"
                size="txtInterMedium15"
              >
                |
              </Text>
              <Text
                className="text-[15px] text-center text-gray-900 tracking-[-0.17px] w-auto"
                size="txtInterMedium15"
              >
                회원가입
              </Text>
            </div>
          </div>
        </div>
        <Footer1 className="bg-blue_gray-50 flex gap-2.5 items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default Page8;
