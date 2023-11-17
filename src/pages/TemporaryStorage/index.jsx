import React from "react";

import { Img, Text } from "components";
import FrameTwoColumnlanguage from "components/FrameTwoColumnlanguage";
import TemporaryStorageColumnrectangletwentyone from "components/TemporaryStorageColumnrectangletwentyone";

const TemporaryStoragePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter gap-8 items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1180px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-center px-4 w-auto">
              <Img
                className="h-[51px] md:h-auto object-cover w-[170px]"
                src="images/img_.png"
                alt="TwoHundredFifteen"
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
        <FrameTwoColumnlanguage className="flex flex-col items-center justify-start outline outline-blue_gray-100 p-2 w-full" />
        <div className="flex flex-col gap-5 items-center justify-start max-w-[1180px] mx-auto md:px-5 w-full">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.53px] w-full"
            size="txtInterMedium28Gray900"
          >
            임시 저장
          </Text>
          <div className="flex flex-row md:gap-10 items-start justify-between w-full">
            <Text
              className="text-base text-gray-900 tracking-[-0.18px]"
              size="txtInterMedium16Gray900"
            >
              총 3개
            </Text>
            <div className="flex flex-col gap-8 items-center justify-start w-auto">
              <Text
                className="text-base text-gray-400 tracking-[-0.18px] w-auto"
                size="txtInterMedium16Gray400_1"
              >
                임시저장은 100개까지만 저장됩니다
              </Text>
              <div className="h-8 rounded-[3px] w-2/5"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1180px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-[97%]">
            <div className="md:gap-5 gap-[41px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              {new Array(8).fill({}).map((props, index) => (
                <React.Fragment
                  key={`TemporaryStorageColumnrectangletwentyone${index}`}
                >
                  <TemporaryStorageColumnrectangletwentyone
                    className="flex flex-1 flex-col items-center justify-start pt-[88px] w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemporaryStoragePage;
