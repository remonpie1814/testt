import React from "react";

import { Button, Img, Text } from "components";
import FollowColumnlanguage from "components/FollowColumnlanguage";
import TemporaryStorageRowrectangletwentyone from "components/TemporaryStorageRowrectangletwentyone";

const TemporaryStoragePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1180px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-center px-4 w-auto">
              <Img
                className="h-[51px] md:h-auto object-cover w-[170px]"
                src="images/img_.png"
                alt="TwoHundredEightyEight"
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
        <FollowColumnlanguage className="flex flex-col items-center justify-start outline outline-blue_gray-100 p-2 w-full" />
        <div className="flex flex-col gap-5 items-center justify-start max-w-[1180px] mx-auto md:px-5 py-[30px] w-full">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 w-full"
            size="txtInterMedium28Gray900"
          >
            임시 저장
          </Text>
          <div className="flex flex-row md:gap-10 items-start justify-between w-full">
            <Text
              className="mt-[3px] text-[22px] text-gray-900 sm:text-lg md:text-xl"
              size="txtInterMedium22Gray900"
            >
              총 3개
            </Text>
            <div className="flex flex-col gap-3 items-center justify-start w-auto">
              <Text
                className="text-base text-gray-400 tracking-[-0.18px] w-auto"
                size="txtInterMedium16Gray400_1"
              >
                임시저장은 100개까지만 저장됩니다
              </Text>
              <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[140px] w-full">
                <Button
                  className="cursor-pointer font-medium min-w-[100px] text-base text-center tracking-[-0.18px]"
                  shape="square"
                  color="blue_gray_100"
                  size="xs"
                  variant="fill"
                >
                  편집
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1180px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-[99%]">
            <div className="md:gap-5 gap-[41px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              {new Array(8).fill({}).map((props, index) => (
                <React.Fragment
                  key={`TemporaryStorageRowrectangletwentyone${index}`}
                >
                  <TemporaryStorageRowrectangletwentyone
                    className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start w-full"
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
