import React from "react";

import { Button, Img, Input, Text } from "components";
import Footer1 from "components/Footer1";
import FrameTwoColumnlanguage from "components/FrameTwoColumnlanguage";
import FrameTwoHeader from "components/FrameTwoHeader";

const Page10 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto shadow-bs w-auto sm:w-full md:w-full">
        <FrameTwoHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <FrameTwoColumnlanguage className="flex flex-col items-center justify-start max-w-[1220px] mx-auto outline outline-blue_gray-100 p-2 md:px-5 w-full" />
        <div className="flex flex-col gap-[50px] md:h-auto items-center justify-start md:px-5 py-[120px] w-[720px] md:w-full">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 tracking-[-0.53px] w-auto"
            size="txtInterMedium28Gray900"
          >
            비밀번호 재설정
          </Text>
          <div className="flex flex-col items-center justify-start w-full">
            <Input
              name="input"
              placeholder="새 비밀번호"
              className="font-medium md:text-xl p-0 placeholder:text-black-900 sm:text-lg text-[22px] text-left tracking-[-0.42px] w-full"
              wrapClassName="w-[56%]"
            ></Input>
            <div className="flex flex-col items-center justify-start px-5 w-[400px] sm:w-full">
              <Text
                className="text-[22px] text-deep_orange-600 sm:text-lg md:text-xl tracking-[-0.42px] w-full"
                size="txtInterMedium22Deeporange600"
              >
                비밀번호는 8자 이상으로 입력해주세요
              </Text>
            </div>
            <Input
              name="input_One"
              placeholder="비밀번호 확인"
              className="font-medium md:text-xl p-0 placeholder:text-black-900 sm:text-lg text-[22px] text-left tracking-[-0.42px] w-full"
              wrapClassName="w-[56%]"
            ></Input>
          </div>
          <Button
            className="border-[5px] border-orange-200 border-solid cursor-pointer font-medium min-w-[400px] sm:min-w-full text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.42px]"
            shape="round"
            color="amber_A100"
            size="md"
            variant="fill"
          >
            비밀번호 재설정
          </Button>
        </div>
        <Footer1 className="bg-blue_gray-50 flex gap-2.5 items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default Page10;
