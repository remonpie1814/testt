import React from "react";

import { Img, Text } from "components";
import ColumnOne from "components/ColumnOne";
import FollowColumnlanguage from "components/FollowColumnlanguage";
import FrameTwoHeader from "components/FrameTwoHeader";

const Page6 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter justify-start mx-auto pb-[724px] w-full">
        <div className="flex flex-col items-center w-full">
          <FrameTwoHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
          <FollowColumnlanguage className="flex flex-col items-center justify-start outline outline-blue_gray-100 p-2 w-full" />
        </div>
        <Text
          className="md:ml-[0] ml-[370px] mt-1 sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.53px]"
          size="txtInterMedium28Gray900"
        >
          FAQ
        </Text>
        <div className="flex flex-col gap-10 items-center mt-[43px] md:px-10 sm:px-5 px-[357px] w-full">
          <ColumnOne
            className="flex flex-col gap-8 items-start justify-center max-w-[1180px] mx-auto w-full"
            searchtext="무엇을 도와드릴까요?"
          />
          <div className="flex flex-row md:gap-10 gap-[60px] items-center justify-center max-w-[1155px] mx-auto w-full">
            <Text
              className="text-base text-black-900 text-center tracking-[-0.30px] w-[29px]"
              size="txtInterBold16Black900"
            >
              전체
            </Text>
            <Text
              className="text-base text-black-900 text-center tracking-[-0.30px] w-[58px]"
              size="txtInterBold16Black900"
            >
              회원정보
            </Text>
            <Text
              className="text-base text-black-900 text-center tracking-[-0.30px] w-[62px]"
              size="txtInterBold16Black900"
            >
              동화 제작
            </Text>
            <Text
              className="text-base text-black-900 text-center tracking-[-0.30px] w-[57px]"
              size="txtInterBold16Black900"
            >
              기타문의
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page6;
