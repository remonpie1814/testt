import React from "react";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";
import Page29Column from "components/Page29Column";
import Rowellipsefour from "components/Rowellipsefour";

const Page1 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <Page29Column className="flex flex-col items-center justify-start w-full" />
        <div className="flex flex-col gap-[15px] h-[875px] md:h-auto items-center justify-start max-w-[1180px] mx-auto pb-5 pt-[30px] md:px-5 w-full">
          <Text
            className="bg-white-A700 h-[42px] justify-center sm:pr-5 pr-[35px] py-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[-0.53px] w-full"
            size="txtInterMedium28"
          >
            ‘바보’ 검색 결과
          </Text>
          <div className="border-b border-blue_gray-100_01 border-solid flex flex-row gap-[30px] items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start sm:px-5 px-[30px] py-2.5 w-auto">
              <Text
                className="text-base text-blue_gray-100_01 tracking-[-0.30px] w-auto"
                size="txtInterBold16Bluegray10001"
              >
                동화
              </Text>
            </div>
            <Button
              className="cursor-pointer font-bold min-w-[104px] text-base text-center tracking-[-0.30px]"
              shape="square"
              color="amber_A100"
              size="md"
              variant="outline"
            >
              글쓴이
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <Text
              className="text-blue_gray-900_cc text-sm tracking-[-0.27px] w-auto"
              size="txtInterMedium14"
            >
              4건
            </Text>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <List
              className="flex flex-col gap-10 items-center w-[89%]"
              orientation="vertical"
            >
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-[66%] md:w-full">
                  <Rowellipsefour className="flex flex-row gap-5 items-center justify-center w-auto" />
                  <Rowellipsefour className="flex flex-row gap-5 items-center justify-center w-auto" />
                </div>
                <Rowellipsefour className="flex flex-row gap-5 items-center justify-center w-auto" />
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-[66%] md:w-full">
                  <Rowellipsefour className="flex flex-row gap-5 items-center justify-center w-auto" />
                  <Rowellipsefour className="flex flex-row gap-5 items-center justify-center w-auto" />
                </div>
                <Rowellipsefour className="flex flex-row gap-5 items-center justify-center w-auto" />
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
