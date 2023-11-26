import React from "react";

import { Button, Img, Text } from "components";
import ColumnOne from "components/ColumnOne";
import FollowColumnlanguage from "components/FollowColumnlanguage";
import FrameTwoHeader from "components/FrameTwoHeader";
import Rowrectangleten from "components/Rowrectangleten";

const Page9 = () => {
  const rowrectangletenPropList = [
    {},
    { usernickname: "유미엄마" },
    { usernickname: "유미엄마" },
    { usernickname: "유미엄마" },
    {
      usernickname: "유미엄마",
      username: "호랑이와 토끼가 살았는데 결국 나중에 멸종함",
    },
    { usernickname: "유미엄마" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <FrameTwoHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <FollowColumnlanguage className="flex flex-col items-center justify-start outline outline-blue_gray-100 p-2 w-full" />
        <div className="flex flex-col gap-5 items-center justify-start max-w-[1180px] mx-auto md:px-5 py-[30px] w-full">
          <Text
            className="bg-white-A700 h-[42px] justify-center sm:pr-5 pr-[35px] py-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[-0.53px] w-full"
            size="txtInterMedium28"
          >
            내 책장
          </Text>
          <ColumnOne className="flex flex-col gap-8 items-start justify-center w-full" />
          <div className="flex flex-col gap-8 items-start justify-center w-full">
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.42px] w-[223px]"
                size="txtInterMedium22Gray900"
              >
                ‘호랑이’에 대한 검색 결과
              </Text>
            </div>
            <div className="flex flex-row gap-8 items-start justify-center w-auto">
              <div className="h-[31px] relative w-[38%]">
                <div className="h-[31px] m-auto rounded-[3px] w-full"></div>
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto text-base text-white-A700 tracking-[-0.18px] w-max"
                  size="txtInterMedium16WhiteA700"
                >
                  그림만 X
                </Text>
              </div>
              <div className="h-[31px] relative w-[46%]">
                <div className="h-[31px] m-auto rounded-[3px] w-full"></div>
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto text-base text-white-A700 tracking-[-0.18px] w-max"
                  size="txtInterMedium16WhiteA700"
                >
                  전체공개 X
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[1013px] w-full">
            <Button
              className="cursor-pointer font-medium min-w-[167px] text-base text-center tracking-[-0.30px]"
              shape="square"
              color="blue_gray_100"
              size="md"
              variant="fill"
            >
              임시저장
            </Button>
          </div>
          <div className="flex flex-col gap-[15px] items-center justify-start w-full">
            <div className="flex flex-col items-center justify-end max-w-[1180px] w-full">
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-row items-center justify-center w-auto">
                  <Text
                    className="text-base text-gray-900 tracking-[-0.30px] w-auto"
                    size="txtInterMedium16Gray900_1"
                  >
                    최신순
                  </Text>
                  <Img
                    className="h-8 md:h-auto object-cover w-8"
                    src="images/img_down11.png"
                    alt="downEleven"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="gap-20 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  {rowrectangletenPropList.map((props, index) => (
                    <React.Fragment key={`Rowrectangleten${index}`}>
                      <Rowrectangleten
                        className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            <div className="flex flex-col items-center justify-center w-auto">
              <div className="md:pl-10 sm:pl-5 pl-[1100px] relative w-[1165px] md:w-full">
                <div className="h-[61px] ml-auto my-auto w-[6%]"></div>
                <Text
                  className="absolute bottom-[18%] right-[2%] text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl w-auto"
                  size="txtInterMedium24Gray900_1"
                >
                  +
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-[89px] md:h-auto items-center justify-center w-full">
            <div className="flex flex-col items-center justify-start w-[32%]">
              <div className="flex flex-row gap-[33px] items-center justify-between w-full">
                <div className="h-[49px] rounded-[3px] w-[49px]"></div>
                <Text
                  className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px]"
                  size="txtInterMedium22Gray600"
                >
                  2
                </Text>
                <Text
                  className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px]"
                  size="txtInterMedium22Gray600"
                >
                  3
                </Text>
                <Text
                  className="text-[22px] sm:text-lg text-orange-400 md:text-xl tracking-[-0.42px]"
                  size="txtInterMedium22Orange400"
                >
                  4
                </Text>
                <Text
                  className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px]"
                  size="txtInterMedium22Gray600"
                >
                  5
                </Text>
                <Text
                  className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px]"
                  size="txtInterMedium22Gray600"
                >
                  6
                </Text>
                <div className="h-[49px] rounded-[3px] w-[49px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page9;
