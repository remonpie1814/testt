import React from "react";

import { Img, Text } from "components";

const Page = () => {
  return (
    <>
      <div className="flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-yellow-100 flex flex-col h-[65px] md:h-auto items-end justify-center shadow-bs w-full">
          <div className="flex flex-col items-center justify-start md:px-5">
            <Text
              className="text-[22px] text-center text-gray-600 sm:text-lg md:text-xl tracking-[-0.24px] w-full"
              size="txtInterMedium22"
            >
              신데렐라는 어려서
            </Text>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col h-full items-center justify-start shadow-bs w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[357px] h-full items-center justify-between md:px-10 sm:px-5 px-[200px] w-full">
            <Img
              className="h-16 md:h-auto object-cover w-16"
              src="images/img_image689_30x30.png"
              alt="image655"
            />
            <div className="bg-blue_gray-100 flex flex-1 flex-col h-[849px] md:h-auto items-center justify-between max-w-[1082px] md:px-5 w-full">
              <Img
                className="h-full w-[580px]"
                src="images/img_imagewrapper.svg"
                alt="imagewrapper"
              />
            </div>
            <Img
              className="h-16 md:h-auto object-cover w-16"
              src="images/img_image690_30x30.png"
              alt="image656"
            />
          </div>
          <div className="flex flex-col items-center justify-start md:px-5 w-[57%] md:w-full">
            <Img
              className="h-[60px] w-[1082px]"
              src="images/img__gray_700.svg"
              alt="TwentyOne"
            />
            <div className="flex flex-row gap-2.5 items-center justify-center max-w-[1082px] w-full">
              <div className="flex flex-col gap-0.5 items-center justify-center w-auto">
                <Img
                  className="h-[78px] md:h-auto object-cover w-[78px]"
                  src="images/img_image933.png"
                  alt="image933"
                />
                <Text
                  className="text-base text-center text-gray-900 w-auto"
                  size="txtInterMedium16Gray900"
                >
                  자동 책넘김
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-auto">
                <Img
                  className="h-[81px] md:h-auto object-cover w-[81px]"
                  src="images/img_image589_81x81.png"
                  alt="image589"
                />
                <Text
                  className="text-base text-center text-gray-900 w-auto"
                  size="txtInterMedium16Gray900_1"
                >
                  정지
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[-0.46px]"
                  size="txtInterBold24"
                >
                  25 / 30
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
