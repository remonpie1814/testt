import React from "react";

import { Button, Img, Text } from "components";
import FrameTwoColumn from "components/FrameTwoColumn";
import FrameTwoHeader from "components/FrameTwoHeader";
import Rowrectangleten from "components/Rowrectangleten";

const Page2 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <FrameTwoHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <FrameTwoColumn className="flex flex-col items-center justify-start w-full" />
        <div className="flex flex-col gap-[15px] h-[1086px] md:h-auto items-center justify-start max-w-[1180px] mx-auto pb-5 pt-[30px] md:px-5 w-full">
          <Text
            className="bg-white-A700 h-[42px] justify-center sm:pr-5 pr-[35px] py-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[-0.53px] w-full"
            size="txtInterMedium28"
          >
            ‘바보’ 검색 결과
          </Text>
          <div className="border-b border-blue_gray-100_01 border-solid flex flex-row gap-[30px] items-start justify-start w-full">
            <Button
              className="cursor-pointer font-bold min-w-[90px] text-base text-center tracking-[-0.30px]"
              shape="square"
              color="amber_A100"
              size="md"
              variant="outline"
            >
              동화
            </Button>
            <div className="flex flex-col items-start justify-start sm:px-5 px-[30px] py-2.5 w-auto">
              <Text
                className="text-base text-blue_gray-100_01 tracking-[-0.30px] w-auto"
                size="txtInterBold16Bluegray10001"
              >
                글쓴이
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <Text
              className="text-blue_gray-900_cc text-sm tracking-[-0.27px] w-auto"
              size="txtInterMedium14Bluegray900cc"
            >
              31건
            </Text>
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            <div className="flex flex-col items-center justify-start w-[95%]">
              <div className="gap-2.5 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                {new Array(8).fill({}).map((props, index) => (
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
      </div>
    </>
  );
};

export default Page2;
