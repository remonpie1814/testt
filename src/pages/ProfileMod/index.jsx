import React from "react";

import { Button, Img, Text } from "components";
import FrameTwoColumnlanguage from "components/FrameTwoColumnlanguage";
import FrameTwoHeader from "components/FrameTwoHeader";

const ProfileModPage = () => {
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
          <div className="flex flex-col gap-3 h-[668px] md:h-auto items-center justify-start w-full">
            <div className="flex flex-col h-[150px] md:h-auto items-center justify-center w-full">
              <div className="h-[150px] md:px-10 sm:px-5 px-[515px] relative w-full">
                <Img
                  className="h-[150px] m-auto object-cover w-[150px]"
                  src="images/img__150x150.png"
                  alt="EightySeven"
                />
                <div className="absolute bg-black-900_4c flex flex-col h-full inset-[0] items-center justify-center m-auto p-10 sm:px-5 w-[150px]">
                  <Button
                    className="flex h-[69px] items-center justify-center rounded-[34px] w-[69px]"
                    color="black_900_60"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-9"
                      src="images/img_group241.png"
                      alt="group241"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 items-center justify-center p-3 w-full">
              <div className="border border-gray-700 border-solid flex flex-col gap-[5px] h-[65px] md:h-auto items-start justify-start px-2.5 py-[5px] rounded-[5px] w-[480px] sm:w-full">
                <Text
                  className="text-gray-700 text-sm tracking-[-0.15px] w-full"
                  size="txtInterMedium14Gray700"
                >
                  닉네임{" "}
                </Text>
                <Text
                  className="text-base text-black-900 tracking-[-0.18px] w-full"
                  size="txtInterMedium16"
                >
                  둥치탁치
                </Text>
              </div>
              <div className="flex flex-col h-[21px] md:h-auto items-center justify-start w-[480px] sm:w-full">
                <Text
                  className="text-green-A700 text-sm tracking-[-0.15px] w-auto"
                  size="txtInterMedium14GreenA700"
                >
                  사용 가능한 닉네임입니다.
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="border border-gray-700 border-solid flex flex-col gap-[5px] h-[120px] md:h-auto items-start justify-start px-2.5 py-[5px] rounded-[5px] w-[480px] sm:w-full">
                <Text
                  className="text-gray-700 text-sm tracking-[-0.15px] w-full"
                  size="txtInterMedium14Gray700"
                >
                  자기소개
                </Text>
                <Text
                  className="text-base text-black-900 tracking-[-0.18px]"
                  size="txtInterMedium16"
                >
                  둥치탁치 구독과 좋아요 알림설정까지~
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-2.5 h-[90px] md:h-auto items-center justify-center p-2.5 w-full">
              <Button
                className="cursor-pointer font-medium min-w-[184px] rounded-[5px] text-base text-center tracking-[-0.18px]"
                color="blue_gray_100_01"
                size="md"
                variant="fill"
              >
                취소
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[184px] rounded-[5px] text-base text-center tracking-[-0.18px]"
                color="amber_A100"
                size="md"
                variant="fill"
              >
                적용
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileModPage;
