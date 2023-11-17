import React from "react";

import { Img, Line, Text } from "components";

const SanseColumntwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[9px] items-center justify-start w-full">
          <Img
            className="h-[45px] md:h-auto object-cover w-[45px]"
            src="images/img_2_45x45.png"
            alt="Two"
          />
          <Text
            className="text-gray-900 text-xl tracking-[-0.38px] w-auto"
            size="txtInterBold20"
          >
            {props?.treatment}
          </Text>
        </div>
        <Text
          className="text-gray-900 text-xl tracking-[-0.38px] w-full"
          size="txtInterMedium20"
        >
          {props?.comment}
        </Text>
        <Text
          className="text-gray-400 text-sm tracking-[-0.15px] w-full"
          size="txtInterMedium14Gray400"
        >
          {props?.date}
        </Text>
        <Text
          className="text-base text-gray-900 tracking-[-0.18px] w-full"
          size="txtInterMedium16Gray900_1"
        >
          {props?.reply}
        </Text>
        <Line className="bg-black-900 h-px w-full" />
      </div>
    </>
  );
};

SanseColumntwo.defaultProps = {
  treatment: "봐로완치",
  comment: "댓글댓글",
  date: "2023.11.15",
  reply: "답글",
};

export default SanseColumntwo;
