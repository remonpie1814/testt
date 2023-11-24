import React from "react";

import { CheckBox, Img, Input, Text } from "components";
import FollowColumnlanguage from "components/FollowColumnlanguage";
import FrameTwoHeader from "components/FrameTwoHeader";

const Page11 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto shadow-bs w-auto sm:w-full md:w-full">
        <FrameTwoHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <FollowColumnlanguage className="flex flex-col items-center justify-start outline outline-blue_gray-100 p-2 w-full" />
        <div className="flex flex-col gap-5 h-[720px] md:h-auto items-center justify-start max-w-[1180px] mx-auto md:px-5 py-[120px] w-full">
          <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
            <Img
              className="h-[51px] md:h-auto object-cover w-[170px]"
              src="images/img_.png"
              alt="ThreeHundredThirtyThree"
            />
            <Img
              className="h-[60px] w-[58px]"
              src="images/img__black_900_2.svg"
              alt="ThreeHundredThirtyFour"
            />
          </div>
          <div className="bg-amber-100 flex flex-col gap-5 items-center justify-center px-10 sm:px-5 py-[30px] rounded-[20px] w-auto sm:w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-full"
              size="txtInterRegular28"
            >
              로그인
            </Text>
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <Input
                name="input"
                placeholder="이메일"
                className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
                wrapClassName="border border-gray-300 border-solid w-full"
                color="white_A700"
                variant="fill"
              ></Input>
              <Input
                name="input_One"
                placeholder="비밀번호"
                className="font-medium p-0 placeholder:text-black-900 text-base text-left tracking-[-0.30px] w-full"
                wrapClassName="border border-gray-300 border-solid w-full"
                color="white_A700"
                variant="fill"
              ></Input>
              <div className="flex relative w-[230px]">
                <div className="h-5 my-auto w-[61%] sm:w-full">
                  <CheckBox
                    className="font-medium my-auto text-[15px] text-left tracking-[-0.17px]"
                    inputClassName="absolute h-5 mr-[5px] outline outline-[2px] outline-gray-300 rounded-sm w-5"
                    name="ThreeHundredThirtySix"
                    id="ThreeHundredThirtySix"
                    label="아이디 저장"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></CheckBox>
                  <CheckBox
                    className="font-medium my-auto text-[15px] text-left tracking-[-0.17px]"
                    inputClassName="absolute h-5 mr-[5px] outline outline-[2px] outline-gray-300 rounded-sm w-5"
                    name="ThreeHundredThirtySeven"
                    id="ThreeHundredThirtySeven"
                    label="아이디 저장"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></CheckBox>
                </div>
                <CheckBox
                  className="font-medium ml-[-20px] my-auto text-[15px] text-left tracking-[-0.17px] z-[1]"
                  inputClassName="h-5 mr-[5px] outline outline-[2px] outline-gray-300 rounded-sm w-5 z-[1]"
                  name="ThreeHundredThirtyEight"
                  id="ThreeHundredThirtyEight"
                  label="자동로그인"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></CheckBox>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[492px] w-full">
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
                  className="text-base text-blue_gray-900 tracking-[-0.30px] w-auto"
                  size="txtInterMedium16Bluegray900"
                >
                  사업자 정보
                </Text>
                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                  <Text
                    className="text-base text-blue_gray-900 tracking-[-0.30px] w-auto"
                    size="txtInterMedium16Bluegray900"
                  >
                    이용약관
                  </Text>
                  <Text
                    className="text-base text-blue_gray-400_01 tracking-[-0.30px] w-auto"
                    size="txtInterMedium16Bluegray40001"
                  >
                    개인정보 처리방침
                  </Text>
                </div>
              </div>
              <Img
                className="h-[92px] w-full"
                src="images/img__blue_gray_100.svg"
                alt="ThreeHundredFortySeven"
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Page11;
