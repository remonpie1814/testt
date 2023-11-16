import React from "react";

import { Button, Img, Line, List, Text } from "components";
import FrameTwoHeader from "components/FrameTwoHeader";
import Rowonehundredthirtyfive from "components/Rowonehundredthirtyfive";

const Page6 = () => {
  const rowonehundredthirtyfivePropList = [
    {},
    { username: "신데렐라는 어려서 부모님을 발로 차 싸커 발로 차 싸커" },
    { username: "신데렐라는 어려서 부모님을 발로 차 싸커 발로 차 싸커" },
    { username: "신데렐라는 어려서 부모님을 발로 차 싸커 발로 차 싸커" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto shadow-bs w-auto sm:w-full md:w-full">
        <FrameTwoHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <div className="flex flex-col gap-2.5 items-start justify-start max-w-[1180px] mx-auto md:px-5 py-5 w-full">
          <div className="flex flex-col gap-2.5 items-start justify-start p-2.5 w-full">
            <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-auto sm:w-full">
              <Text
                className="text-gray-900 text-xl tracking-[-0.22px] w-auto"
                size="txtInterBold20"
              >
                최근 본 동화
              </Text>
              <Text
                className="text-base text-gray-600_01 tracking-[-0.18px] w-full"
                size="txtInterLight16"
              >
                전체 90 (최근에 감상한 동화 목록 입니다)
              </Text>
            </div>
            <Text
              className="text-base text-gray-900 tracking-[-0.18px] w-auto"
              size="txtInterMedium16Gray900_1"
            >
              ※이력은 100건까지 저장됩니다
            </Text>
          </div>
          <List
            className="flex flex-col gap-2.5 items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <Line className="bg-gray-400_02 h-px w-full" />
                <Text
                  className="ml-4 md:ml-[0] text-base text-gray-900 tracking-[-0.18px]"
                  size="txtInterMedium16Gray900"
                >
                  2023. 10. 08
                </Text>
                <Line className="bg-gray-400_03 h-px w-full" />
              </div>
              <div className="flex flex-col items-start justify-between w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <Rowonehundredthirtyfive className="bg-white-A700 flex sm:flex-1 sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-[550px] sm:w-full" />
                    <Rowonehundredthirtyfive
                      className="bg-white-A700 flex sm:flex-1 sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-[550px] sm:w-full"
                      username="신데렐라는 어려서 부모님을 발로 차 싸커 발로 차 싸커"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <Rowonehundredthirtyfive
                      className="bg-white-A700 flex sm:flex-1 sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-[550px] sm:w-full"
                      username="신데렐라는 어려서 부모님을 발로 차 싸커 발로 차 싸커"
                    />
                    <Rowonehundredthirtyfive
                      className="bg-white-A700 flex sm:flex-1 sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-[550px] sm:w-full"
                      username="신데렐라는 어려서 부모님을 발로 차 싸커 발로 차 싸커"
                    />
                  </div>
                  <Rowonehundredthirtyfive
                    className="bg-white-A700 flex sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-[550px] sm:w-full"
                    username="신데렐라는 어려서 부모님을 발로 차 싸커 발로 차 싸커"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <Line className="bg-gray-400_02 h-px w-full" />
                <Text
                  className="ml-4 md:ml-[0] text-base text-gray-900 tracking-[-0.18px]"
                  size="txtInterMedium16Gray900"
                >
                  2023. 10. 07
                </Text>
                <Line className="bg-gray-400_03 h-px w-full" />
              </div>
              <div className="flex flex-col items-start justify-between w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="gap-20 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    {rowonehundredthirtyfivePropList.map((props, index) => (
                      <React.Fragment key={`Rowonehundredthirtyfive${index}`}>
                        <Rowonehundredthirtyfive
                          className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-full"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
        <footer className="bg-blue_gray-50 flex items-center justify-center md:px-5 w-full">
          <div className="bg-gray-100 flex flex-col items-center justify-center md:px-10 sm:px-5 px-[370px] w-full">
            <div className="flex flex-col gap-[25px] items-center justify-start max-w-[1180px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-start justify-center md:px-10 sm:px-5 px-[60px] py-[25px] w-full">
                <div className="flex flex-col items-start justify-end pr-0.5 py-0.5">
                  <Text
                    className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.42px]"
                    size="txtInterMedium22"
                  >
                    고객센터
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-end pr-0.5 py-0.5">
                  <Text
                    className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[-0.42px]"
                    size="txtInterMedium22"
                  >
                    공지사항
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-center md:px-10 sm:px-5 px-[60px] py-2.5 w-full">
                <Text
                  className="md:text-2xl sm:text-[22px] text-[26px] text-black-900 tracking-[-0.49px] w-auto"
                  size="txtInterMedium26Black900"
                >
                  사업자 정보
                </Text>
                <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-black-900 tracking-[-0.49px] w-auto"
                    size="txtInterMedium26Black900"
                  >
                    이용약관
                  </Text>
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-400 tracking-[-0.49px] w-auto"
                    size="txtInterMedium26Bluegray400"
                  >
                    개인정보 처리방침
                  </Text>
                </div>
              </div>
              <Img
                className="h-[92px] w-full"
                src="images/img__blue_gray_100.svg"
                alt="OneHundredSixtySeven"
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Page6;
