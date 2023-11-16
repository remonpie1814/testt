import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import FrameTwoColumnbell111 from "components/FrameTwoColumnbell111";
import Rowonehundredthirtytwo from "components/Rowonehundredthirtytwo";

const Page6 = () => {
  const rowonehundredthirtytwoPropList = [
    {},
    { username: "신데렐라는 어려서 부모님을 발로 차 싸커 발로 차 싸커" },
    { username: "신데렐라는 어려서 부모님을 발로 차 싸커 발로 차 싸커" },
    { username: "신데렐라는 어려서 부모님을 발로 차 싸커 발로 차 싸커" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto shadow-bs w-auto sm:w-full md:w-full">
        <FrameTwoColumnbell111 className="bg-yellow-200 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
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
              size="txtInterMedium16Gray900"
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
                <Line className="bg-gray-400_01 h-px w-full" />
                <Text
                  className="ml-4 md:ml-[0] text-base text-gray-900 tracking-[-0.18px]"
                  size="txtInterMedium16"
                >
                  2023. 10. 08
                </Text>
                <Line className="bg-gray-400_02 h-px w-full" />
              </div>
              <div className="flex flex-col items-start justify-between w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <Rowonehundredthirtytwo className="bg-white-A700 flex md:flex-1 sm:flex-col flex-row gap-[13px] items-center justify-start p-2.5 w-[47%] md:w-full" />
                    <Rowonehundredthirtytwo
                      className="bg-white-A700 flex md:flex-1 sm:flex-col flex-row gap-[13px] items-center justify-start p-2.5 w-[47%] md:w-full"
                      username="신데렐라는 어려서 부모님을 발로 차 싸커 발로 차 싸커"
                    />
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <Rowonehundredthirtytwo
                      className="bg-white-A700 flex md:flex-1 sm:flex-col flex-row gap-[13px] items-center justify-start p-2.5 w-[47%] md:w-full"
                      username="신데렐라는 어려서 부모님을 발로 차 싸커 발로 차 싸커"
                    />
                    <Rowonehundredthirtytwo
                      className="bg-white-A700 flex md:flex-1 sm:flex-col flex-row gap-[13px] items-center justify-start p-2.5 w-[47%] md:w-full"
                      username="신데렐라는 어려서 부모님을 발로 차 싸커 발로 차 싸커"
                    />
                  </div>
                  <Rowonehundredthirtytwo
                    className="bg-white-A700 flex sm:flex-col flex-row gap-[13px] items-center justify-start p-2.5 w-[47%] md:w-full"
                    username="신데렐라는 어려서 부모님을 발로 차 싸커 발로 차 싸커"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <Line className="bg-gray-400_01 h-px w-full" />
                <Text
                  className="ml-4 md:ml-[0] text-base text-gray-900 tracking-[-0.18px]"
                  size="txtInterMedium16"
                >
                  2023. 10. 07
                </Text>
                <Line className="bg-gray-400_02 h-px w-full" />
              </div>
              <div className="flex flex-col items-start justify-between w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="gap-20 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    {rowonehundredthirtytwoPropList.map((props, index) => (
                      <React.Fragment key={`Rowonehundredthirtytwo${index}`}>
                        <Rowonehundredthirtytwo
                          className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-[13px] items-center justify-start p-2.5 w-full"
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
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default Page6;
