import React from "react";

import { Img, Line, List, Text } from "components";
import FrameTwoHeader from "components/FrameTwoHeader";

const Page4 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-44 w-full">
        <FrameTwoHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <div className="flex flex-col md:gap-10 gap-[94px] items-center justify-start max-w-[1180px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[19px] items-center justify-start w-auto md:w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.53px] w-[139px]"
              size="txtInterBold28"
            >
              내가 쓴 댓글
            </Text>
            <div className="bg-gray-300 flex flex-col items-start justify-start rounded-[16px] w-auto sm:w-full">
              <div className="flex sm:flex-col flex-row gap-[49px] items-center justify-start w-auto sm:w-full">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[-0.42px] w-[91px]"
                    size="txtInterMedium22"
                  >
                    총 댓글 수
                  </Text>
                  <Text
                    className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[-0.42px] w-3.5"
                    size="txtInterMedium22"
                  >
                    8
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[-0.42px] w-[91px]"
                    size="txtInterMedium22"
                  >
                    총 답글 수
                  </Text>
                  <Text
                    className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[-0.42px] w-[9px]"
                    size="txtInterMedium22"
                  >
                    1
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-end justify-start w-auto md:w-full">
            <Text
              className="text-black-900 text-center text-xs w-[33px]"
              size="txtInterRegular12"
            >
              최신순
            </Text>
            <List
              className="flex flex-col gap-5 items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col gap-[3px] items-start justify-start max-w-[825px] w-full">
                <Text
                  className="text-base text-black-900 tracking-[-0.30px] w-[174px]"
                  size="txtInterMedium16Black900"
                >
                  ㅋㅋㅋㅋㅋㅋㅋㅋ아 웃기네
                </Text>
                <Text
                  className="text-black-900 text-xs tracking-[-0.23px] w-[91px]"
                  size="txtInterMedium12"
                >
                  2023.11.02 11:04
                </Text>
                <Text
                  className="text-gray-500 text-xs tracking-[-0.23px] w-[67px]"
                  size="txtInterMedium12Gray500"
                >
                  토끼와 호랑이
                </Text>
                <Line className="bg-gray-500_01 h-px w-full" />
              </div>
              <div className="flex flex-1 flex-col gap-[3px] items-start justify-start max-w-[825px] w-full">
                <Text
                  className="text-base text-black-900 tracking-[-0.30px] w-[91px]"
                  size="txtInterMedium16Black900"
                >
                  우와 잘그렸다
                </Text>
                <Text
                  className="text-black-900 text-xs tracking-[-0.23px] w-[91px]"
                  size="txtInterMedium12"
                >
                  2023.11.02 11:04
                </Text>
                <Text
                  className="text-gray-500 text-xs tracking-[-0.23px] w-[67px]"
                  size="txtInterMedium12Gray500"
                >
                  토끼와 호랑이
                </Text>
                <Line className="bg-gray-500_01 h-px w-full" />
              </div>
              <div className="flex flex-1 flex-col gap-[3px] items-start justify-start max-w-[825px] w-full">
                <Text
                  className="text-base text-black-900 tracking-[-0.30px] w-[91px]"
                  size="txtInterMedium16Black900"
                >
                  우와 잘그렸다
                </Text>
                <Text
                  className="text-black-900 text-xs tracking-[-0.23px] w-[91px]"
                  size="txtInterMedium12"
                >
                  2023.11.02 11:04
                </Text>
                <Text
                  className="text-gray-500 text-xs tracking-[-0.23px] w-[67px]"
                  size="txtInterMedium12Gray500"
                >
                  토끼와 호랑이
                </Text>
                <Line className="bg-gray-500_01 h-px w-full" />
              </div>
              <div className="flex flex-1 flex-col gap-[3px] items-start justify-start max-w-[825px] w-full">
                <Text
                  className="text-base text-black-900 tracking-[-0.30px] w-[91px]"
                  size="txtInterMedium16Black900"
                >
                  우와 잘그렸다
                </Text>
                <Text
                  className="text-black-900 text-xs tracking-[-0.23px] w-[91px]"
                  size="txtInterMedium12"
                >
                  2023.11.02 11:04
                </Text>
                <Text
                  className="text-gray-500 text-xs tracking-[-0.23px] w-[67px]"
                  size="txtInterMedium12Gray500"
                >
                  토끼와 호랑이
                </Text>
                <Line className="bg-gray-500_01 h-px w-full" />
              </div>
              <div className="flex flex-1 flex-col gap-[3px] items-start justify-start max-w-[825px] w-full">
                <Text
                  className="text-base text-black-900 tracking-[-0.30px] w-[91px]"
                  size="txtInterMedium16Black900"
                >
                  우와 잘그렸다
                </Text>
                <Text
                  className="text-black-900 text-xs tracking-[-0.23px] w-[91px]"
                  size="txtInterMedium12"
                >
                  2023.11.02 11:04
                </Text>
                <Text
                  className="text-gray-500 text-xs tracking-[-0.23px] w-[67px]"
                  size="txtInterMedium12Gray500"
                >
                  토끼와 호랑이
                </Text>
                <Line className="bg-gray-500_01 h-px w-full" />
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page4;
