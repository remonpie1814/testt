import React from "react";

import { Img, Line, Text } from "components";

const Columntwo = (props) => {
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
            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.46px] w-auto"
            size="txtInterBold24"
          >
            {props?.treatment}
          </Text>
        </div>
        <Text
          className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.46px] w-full"
          size="txtInterMedium24"
        >
          {props?.comment}
        </Text>
        <Text
          className="text-base text-gray-400 tracking-[-0.18px] w-full"
          size="txtInterMedium16Gray400"
        >
          {props?.date}
        </Text>
        <Text
          className="text-base text-gray-900 tracking-[-0.18px] w-full"
          size="txtInterMedium16Gray900"
        >
          {props?.reply}
        </Text>
        <Line className="bg-black-900 h-px w-full" />
      </div>
    </>
  );
};

Columntwo.defaultProps = {
  treatment: "봐로완치",
  comment: "댓글댓글",
  date: "2023.11.15",
  reply: "답글",
};

export default Columntwo;
