import React from "react";

import { Img, Text } from "components";

const CanvasColumnfourhundredsixtyeight = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2.5 items-center justify-center w-full">
          <Img
            className="h-[29px] md:h-auto object-cover w-[27px]"
            src="images/img_image661.png"
            alt="image661"
          />
          <Text
            className="common-pointer text-base text-gray-900 w-auto"
            size="txtInterMedium16Gray900_1"
            onClick={props?.onClick}
          >
            {props?.pagedeletetext}
          </Text>
          <Img
            className="h-[33px] md:h-auto object-cover w-[30px]"
            src="images/img__33x30.png"
            alt="FourHundredSixtyNine"
          />
          <Text
            className="text-base text-gray-900 w-auto"
            size="txtInterMedium16Gray900_1"
          >
            {props?.pageaddtext}
          </Text>
        </div>
        <div className="flex flex-row gap-5 h-9 md:h-auto items-center justify-center px-5 w-full">
          <Img
            className="h-[30px] md:h-auto object-cover w-[30px]"
            src="images/img_image689_30x30.png"
            alt="image689_One"
          />
          <div className="flex flex-row items-center justify-center w-[34px]">
            <Text
              className="text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
              size="txtInterMedium22Gray900_1"
            >
              {props?.pagenumberone}
            </Text>
            <Text
              className="text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
              size="txtInterMedium22Gray900_1"
            >
              {props?.pagenumberslash}
            </Text>
            <Text
              className="text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
              size="txtInterMedium22Gray900_1"
            >
              {props?.pagenumbereight}
            </Text>
          </div>
          <Img
            className="h-[30px] md:h-auto object-cover w-[30px]"
            src="images/img_image690_30x30.png"
            alt="image690_One"
          />
        </div>
      </div>
    </>
  );
};

CanvasColumnfourhundredsixtyeight.defaultProps = {
  pagedeletetext: "페이지 삭제",
  pageaddtext: "페이지 추가",
  pagenumberone: "1",
  pagenumberslash: "/",
  pagenumbereight: "8",
};

export default CanvasColumnfourhundredsixtyeight;
