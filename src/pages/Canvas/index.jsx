import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

const CanvasPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[50px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mx-auto py-[5px] w-full">
            <Img
              className="h-[30px] w-[260px]"
              src="images/img__black_900_30x260.svg"
              alt="FourHundredThree"
            />
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-5 items-start justify-start w-auto sm:w-full">
              <Img
                className="h-[30px] md:h-auto object-cover w-[30px]"
                src="images/img_image689.png"
                alt="image689"
              />
              <Img
                className="h-[30px] md:h-auto object-cover w-[30px]"
                src="images/img_image690.png"
                alt="image690"
              />
              <Button
                className="cursor-pointer font-medium text-base text-center tracking-[-0.30px] w-[140px]"
                shape="square"
                color="blue_gray_100"
                size="xs"
                variant="fill"
              >
                임시저장
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[140px] text-base text-center tracking-[-0.30px]"
                shape="square"
                color="blue_gray_100"
                size="xs"
                variant="fill"
              >
                완성하기
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-blue_gray-100 flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
          <Sidebar className="!sticky !w-[400px] bg-gray-600_7f flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="flex flex-row gap-2.5 items-center justify-center mb-[985px] mt-2.5 mx-auto w-[380px] sm:w-full">
              <Img
                className="h-[29px] md:h-auto object-cover w-[27px]"
                src="images/img_image661.png"
                alt="image661"
              />
              <Text
                className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                size="txtInterMedium16Gray900_1"
              >
                페이지 삭제
              </Text>
              <Img
                className="h-[33px] md:h-auto object-cover w-[30px]"
                src="images/img__7.png"
                alt="FourHundredFive"
              />
              <Text
                className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                size="txtInterMedium16Gray900_1"
              >
                페이지 추가
              </Text>
            </div>
            <div className="flex flex-row gap-5 h-9 md:h-auto items-center justify-center mb-[939px] mt-[53px] mx-auto px-5 w-[380px] sm:w-full">
              <Img
                className="h-[30px] md:h-auto object-cover w-[30px]"
                src="images/img_image689_30x30.png"
                alt="image689_One"
              />
              <Text
                className="text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
                size="txtInterMedium22Gray900_1"
              >
                1/8
              </Text>
              <Img
                className="h-[30px] md:h-auto object-cover w-[30px]"
                src="images/img_image690_30x30.png"
                alt="image690_One"
              />
            </div>
            <div className="flex flex-col items-start justify-center mb-0.5 mt-[99px] mx-auto px-5 py-2.5 w-[380px] sm:w-full">
              <div className="flex flex-col gap-5 items-center justify-start w-[90%]">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[130px]">
                    <div className="bg-deep_orange-100 h-[175px] rounded-[5px] w-full"></div>
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-[50px]"
                      size="txtInterMedium16Gray900_1"
                    >
                      1페이지
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[130px]">
                    <div className="bg-deep_orange-100 h-[175px] rounded-[5px] w-full"></div>
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-[52px]"
                      size="txtInterMedium16Gray900_1"
                    >
                      2페이지
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[130px]">
                    <div className="bg-deep_orange-100 h-[175px] rounded-[5px] w-full"></div>
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-[52px]"
                      size="txtInterMedium16Gray900_1"
                    >
                      3페이지
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[130px]">
                    <div className="bg-deep_orange-100 h-[175px] rounded-[5px] w-full"></div>
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-[53px]"
                      size="txtInterMedium16Gray900_1"
                    >
                      4페이지
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[130px]">
                    <div className="bg-deep_orange-100 h-[175px] rounded-[5px] w-full"></div>
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-[52px]"
                      size="txtInterMedium16Gray900_1"
                    >
                      5페이지
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[130px]">
                    <div className="bg-deep_orange-100 h-[175px] rounded-[5px] w-full"></div>
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-[52px]"
                      size="txtInterMedium16Gray900_1"
                    >
                      6페이지
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[130px]">
                    <div className="bg-deep_orange-100 h-[175px] rounded-[5px] w-full"></div>
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-[52px]"
                      size="txtInterMedium16Gray900_1"
                    >
                      7페이지
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2.5 items-center justify-start w-[130px]">
                    <div className="bg-deep_orange-100 h-[175px] rounded-[5px] w-full"></div>
                    <Text
                      className="text-base text-center text-gray-900 tracking-[-0.18px] w-[52px]"
                      size="txtInterMedium16Gray900_1"
                    >
                      8페이지
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </Sidebar>
          <Img
            className="h-[896px] max-h-[896px] md:ml-[0] ml-[257px] md:mt-0 mt-[18px] sm:w-[] md:w-[]"
            src="images/img_1_white_a700.svg"
            alt="One_Eight"
          />
          <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between ml-14 md:ml-[0] md:px-5 py-[50px] w-full">
            <div className="bg-gray-100 flex flex-col gap-2.5 items-center justify-start px-5 py-[5px] rotate-[-90deg] w-auto">
              <Img
                className="h-[38px] w-[41px]"
                src="images/img_vector.svg"
                alt="thumbsup"
              />
              <Img
                className="h-[76px] w-[39px]"
                src="images/img_vector_gray_900.svg"
                alt="offer"
              />
              <Img
                className="h-[43px] w-[29px]"
                src="images/img_vector_gray_900_43x29.svg"
                alt="television"
              />
              <Img
                className="h-[33px] w-[45px]"
                src="images/img_vector_gray_900_33x45.svg"
                alt="user"
              />
              <Img
                className="h-[54px] md:h-auto object-cover w-[29px]"
                src="images/img_image754.png"
                alt="image754"
              />
              <Img
                className="h-[54px] md:h-auto object-cover w-[29px]"
                src="images/img_icons8241.png"
                alt="icons8241"
              />
              <Img
                className="h-[54px] md:h-auto object-cover w-[29px]"
                src="images/img_image764.png"
                alt="image764"
              />
              <Img
                className="h-[55px] md:h-auto object-cover w-[30px]"
                src="images/img_image769.png"
                alt="image769"
              />
            </div>
            <div className="flex sm:flex-1 flex-col gap-2.5 h-[900px] md:h-auto items-center justify-start px-5 w-[540px] sm:w-full">
              <Img
                className="h-[90px] rounded-[5px] w-full"
                src="images/img__white_a700.svg"
                alt="FourHundredSeven"
              />
              <div className="bg-white-A700 flex sm:flex-col flex-row gap-3 items-center justify-between outline outline-[2px] outline-black-900 px-2.5 py-5 rounded-[5px] w-full">
                <Img
                  className="flex-1 h-[95px] w-full"
                  src="images/img__gray_400.svg"
                  alt="FourHundredEight"
                />
                <div className="flex flex-col items-center justify-start">
                  <Img
                    className="h-[102px] md:h-auto object-cover w-full"
                    src="images/img_image708.png"
                    alt="image708"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CanvasPage;
