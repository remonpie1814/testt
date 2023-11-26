import React from "react";

import { Text } from "components";

const FollowColumnlanguage = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row sm:gap-10 gap-[130px] items-start justify-start sm:px-5 px-[30px] w-auto sm:w-full">
          <Text
            className="text-base text-center text-gray-900 tracking-[-0.30px] w-auto"
            size="txtInterMedium16Gray900"
          >
            {props?.language}
          </Text>
          <Text
            className="text-base text-center text-gray-900 tracking-[-0.30px] w-auto"
            size="txtInterMedium16Gray900"
          >
            {props?.onehundredseventeen}
          </Text>
          <Text
            className="text-base text-center text-gray-900 tracking-[-0.30px] w-auto"
            size="txtInterMedium16Gray900"
          >
            {props?.onehundredeighteen}
          </Text>
          <Text
            className="text-base text-center text-gray-900 tracking-[-0.30px] w-auto"
            size="txtInterMedium16Gray900"
          >
            {props?.onehundrednineteen}
          </Text>
        </div>
      </div>
    </>
  );
};

FollowColumnlanguage.defaultProps = {
  language: "전체 ",
  onehundredseventeen: "인기",
  onehundredeighteen: "신작",
  onehundrednineteen: "팔로우",
};

export default FollowColumnlanguage;
