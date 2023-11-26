import React from "react";

import { Img, Text } from "components";
import FrameTwoColumn from "components/FrameTwoColumn";
import FrameTwoHeader from "components/FrameTwoHeader";
import LikeRowrectangleten from "components/LikeRowrectangleten";

const LikePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <FrameTwoHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <FrameTwoColumn className="flex flex-col items-center justify-start w-full" />
        <div className="flex flex-col gap-5 items-center justify-start max-w-[1180px] mx-auto md:px-5 py-[60px] w-full">
          <div className="flex flex-row md:gap-10 gap-[1000px] items-center justify-center max-w-[1180px] w-full">
            <div className="flex flex-row items-center justify-start w-auto">
              <div className="flex flex-col items-center justify-center w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.46px] w-auto"
                  size="txtInterMedium24Gray900_1"
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
            <div className="flex flex-col items-center justify-end w-auto">
              <Img
                className="h-[33px] md:h-auto object-cover w-[35px]"
                src="images/img_image914.png"
                alt="image925"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            <div className="flex flex-col items-center justify-start w-[95%]">
              <div className="gap-2.5 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                {new Array(8).fill({}).map((props, index) => (
                  <React.Fragment key={`LikeRowrectangleten${index}`}>
                    <LikeRowrectangleten
                      className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start px-5 py-[15px] w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-8 items-center justify-center w-auto">
            <div className="h-[49px] rounded-[3px] w-[49px]"></div>
            <Text
              className="text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[-0.46px] w-auto"
              size="txtInterMedium24Gray600"
            >
              2
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[-0.46px] w-auto"
              size="txtInterMedium24Gray600"
            >
              3
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-orange-400 sm:text-xl tracking-[-0.46px] w-auto"
              size="txtInterMedium24Orange400"
            >
              4
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[-0.46px] w-auto"
              size="txtInterMedium24Gray600"
            >
              5
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[-0.46px] w-auto"
              size="txtInterMedium24Gray600"
            >
              6
            </Text>
            <div className="h-[49px] rounded-[3px] w-[49px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LikePage;
