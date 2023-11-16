import React from "react";

import { Button, Img, List, Text } from "components";
import Rowonehundredten from "components/Rowonehundredten";

const Page5 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter gap-8 items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1180px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-center px-4 w-auto">
              <Img
                className="h-[51px] md:h-auto object-cover w-[170px]"
                src="images/img_.png"
                alt="OneHundredSix"
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
        <div className="flex flex-col gap-[45px] items-center justify-start max-w-[1180px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-8 items-start justify-center w-full">
            <div className="flex flex-1 flex-col gap-8 items-start justify-center max-w-[1000px] w-full">
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.46px] w-[244px]"
                  size="txtInterMedium24Gray900"
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
            <div className="flex flex-col items-center justify-end w-auto">
              <Img
                className="h-[33px] md:h-auto object-cover w-[35px]"
                src="images/img_image914.png"
                alt="image925"
              />
            </div>
          </div>
          <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[1013px] w-full">
            <Button
              className="cursor-pointer font-medium min-w-[167px] text-2xl md:text-[22px] text-center sm:text-xl tracking-[-0.46px]"
              shape="square"
              color="blue_gray_100"
              size="sm"
              variant="fill"
            >
              임시저장
            </Button>
          </div>
          <div className="flex flex-col gap-[15px] items-center justify-start w-full">
            <div className="flex flex-col items-center justify-end max-w-[1180px] w-full">
              <div className="flex flex-row items-center justify-start w-auto">
                <div className="flex flex-col items-center justify-center w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.46px] w-auto"
                    size="txtInterMedium24Gray900"
                  >
                    최신순
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-[42px]">
                  <Text
                    className="rotate-[-90deg] md:text-3xl sm:text-[28px] text-[32px] text-gray-900 tracking-[-0.70px] w-[21px]"
                    size="txtInterMedium32"
                  >
                    <>&lt;</>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <List
                  className="sm:flex-col flex-row gap-5 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                  orientation="horizontal"
                >
                  <Rowonehundredten className="flex sm:flex-1 sm:flex-col flex-row gap-[15px] items-start justify-between sm:ml-[0] w-[580px] sm:w-full" />
                  <Rowonehundredten
                    className="flex sm:flex-1 sm:flex-col flex-row gap-[15px] items-start justify-between sm:ml-[0] w-[580px] sm:w-full"
                    title="제목3333"
                    author="유미쓰"
                    points="12p"
                    text1="4"
                    text2="10"
                    date="2023. 10. 21"
                  />
                </List>
                <Rowonehundredten
                  className="flex sm:flex-col flex-row gap-[15px] items-start justify-between w-[580px] sm:w-full"
                  title="제목324"
                  author="f"
                  points="12030123p"
                  text1="6"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            <div className="flex flex-col items-center justify-center w-auto">
              <div className="md:pl-10 sm:pl-5 pl-[1100px] relative w-[1165px] md:w-full">
                <div className="h-[61px] ml-auto my-auto w-[6%]"></div>
                <Text
                  className="absolute bottom-[18%] right-[2%] text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl w-auto"
                  size="txtInterMedium24Gray900"
                >
                  +
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-[89px] md:h-auto items-center justify-center w-full">
            <div className="flex flex-row gap-8 items-center justify-center w-[32%]">
              <div className="h-[49px] rounded-[3px] w-[49px]"></div>
              <Text
                className="text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[-0.46px]"
                size="txtInterMedium24Gray600"
              >
                2
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[-0.46px]"
                size="txtInterMedium24Gray600"
              >
                3
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-orange-400 sm:text-xl tracking-[-0.46px]"
                size="txtInterMedium24Orange400"
              >
                4
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[-0.46px]"
                size="txtInterMedium24Gray600"
              >
                5
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[-0.46px]"
                size="txtInterMedium24Gray600"
              >
                6
              </Text>
              <div className="h-[49px] rounded-[3px] w-[49px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page5;
