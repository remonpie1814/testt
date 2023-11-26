import React from "react";

import { Button, Text } from "components";

const LikeColumnonehundredeighty = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[33px] items-center justify-center md:px-10 sm:px-5 px-[82px] py-2 w-auto">
          <Button
            className="cursor-pointer font-inter font-medium h-[49px] text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.42px] w-[49px]"
            shape="square"
            color="gray_300"
            size="sm"
            variant="fill"
          >
            {props?.onehundredeighty}
          </Button>
          <Text
            className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
            size="txtInterMedium22Gray600"
          >
            {props?.two}
          </Text>
          <Text
            className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
            size="txtInterMedium22Gray600"
          >
            {props?.three}
          </Text>
          <Text
            className="text-[22px] sm:text-lg text-orange-400 md:text-xl tracking-[-0.42px] w-auto"
            size="txtInterMedium22Orange400"
          >
            {props?.four}
          </Text>
          <Text
            className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
            size="txtInterMedium22Gray600"
          >
            {props?.five}
          </Text>
          <Text
            className="text-[22px] text-gray-600 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
            size="txtInterMedium22Gray600"
          >
            {props?.six}
          </Text>
          <Button
            className="cursor-pointer font-inter font-medium h-[49px] text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.42px] w-[49px]"
            shape="square"
            color="gray_300"
            size="sm"
            variant="fill"
          >
            {props?.onehundredeightyone}
          </Button>
        </div>
      </div>
    </>
  );
};

LikeColumnonehundredeighty.defaultProps = {
  onehundredeighty: <>&lt;</>,
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  onehundredeightyone: <>&gt;</>,
};

export default LikeColumnonehundredeighty;
