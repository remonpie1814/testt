import React from "react";

import { Button, Img, Text } from "components";
import FrameTwoColumnlanguage from "components/FrameTwoColumnlanguage";
import FrameTwoHeader from "components/FrameTwoHeader";

const Page1 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <FrameTwoHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <FrameTwoColumnlanguage className="flex flex-col items-center justify-start outline outline-blue_gray-100_01 p-2 w-full" />
        <div className="flex flex-col gap-[30px] h-[875px] md:h-auto items-center justify-start max-w-[1180px] mx-auto md:px-5 py-5 w-full">
          <Text
            className="bg-white-A700 h-[42px] justify-center sm:pr-5 pr-[35px] py-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 tracking-[-0.53px] w-full"
            size="txtInterMedium28"
          >
            내 프로필 수정
          </Text>
          <div className="flex flex-col gap-2.5 h-[614px] md:h-auto items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center pb-[30px] w-[480px] sm:w-full">
              <div className="gap-2.5 sm:gap-5 grid sm:grid-cols-1 grid-cols-3 h-[470px] justify-center min-h-[auto] w-[470px]">
                <Img
                  className="h-[150px] md:h-auto object-cover w-full"
                  src="images/img__150x150.png"
                  alt="profile"
                />
                <Img
                  className="h-[150px] md:h-auto object-cover w-full"
                  src="images/img__150x150.png"
                  alt="profile"
                />
                <Img
                  className="h-[150px] md:h-auto object-cover w-full"
                  src="images/img__150x150.png"
                  alt="profile"
                />
                <Img
                  className="h-[150px] md:h-auto object-cover w-full"
                  src="images/img__150x150.png"
                  alt="profile"
                />
                <Img
                  className="h-[150px] md:h-auto object-cover w-full"
                  src="images/img__150x150.png"
                  alt="profile"
                />
                <Img
                  className="h-[150px] md:h-auto object-cover w-full"
                  src="images/img__150x150.png"
                  alt="profile"
                />
                <Img
                  className="h-[150px] md:h-auto object-cover w-full"
                  src="images/img__150x150.png"
                  alt="profile"
                />
                <Img
                  className="h-[150px] md:h-auto object-cover w-full"
                  src="images/img__150x150.png"
                  alt="profile"
                />
                <Img
                  className="h-[150px] md:h-auto object-cover w-full"
                  src="images/img__150x150.png"
                  alt="profile"
                />
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium min-w-[184px] rounded-[5px] text-base text-center tracking-[-0.18px]"
              color="amber_A100"
              size="md"
              variant="fill"
            >
              취소
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
