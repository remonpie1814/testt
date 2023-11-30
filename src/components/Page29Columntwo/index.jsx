import React from "react";

import { Img, Text } from "components";

const Page29Columntwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-[9px] items-center justify-start w-full">
          <Img
            className="h-[45px] md:h-auto object-cover w-[45px]"
            src="images/img_2_45x45.png"
            alt="Two"
          />
          <div className="flex md:flex-1 flex-row md:gap-10 gap-[900px] items-center justify-between w-auto md:w-full">
            <Text
              className="text-base text-gray-900 tracking-[-0.30px] w-auto"
              size="txtInterBold16"
            >
              {props?.twentyeight}
            </Text>
            <Img
              className="h-5 md:h-auto object-cover w-5"
              src="images/img_menu1.png"
              alt="menuOne"
            />
          </div>
        </div>
        <Text
          className="text-base text-gray-900 tracking-[-0.30px] w-full"
          size="txtInterMedium16"
        >
          {props?.languagetext}
        </Text>
        <Text
          className="text-gray-400 text-sm tracking-[-0.15px] w-full"
          size="txtInterMedium14Gray400"
        >
          {props?.datetext}
        </Text>
        <Text
          className="text-base text-gray-900 tracking-[-0.18px] w-full"
          size="txtInterMedium16"
        >
          {props?.replytext}
        </Text>
      </div>
    </>
  );
};

Page29Columntwo.defaultProps = {
  twentyeight: "봐로완치",
  languagetext:
    "와 재밌다 즐겁다 와 재밌다 즐겁다 와 재밌다 즐겁다 와 재밌다 즐겁다 와 재밌다 즐겁다 와 재밌다 즐겁다 와 재밌다 즐겁다 와 재밌다 즐겁다 ",
  datetext: "2023.11.15",
  replytext: "답글",
};

export default Page29Columntwo;
