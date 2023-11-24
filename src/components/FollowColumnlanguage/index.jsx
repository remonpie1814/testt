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
            {props?.ninetyfive}
          </Text>
          <Text
            className="text-base text-center text-gray-900 tracking-[-0.30px] w-auto"
            size="txtInterMedium16Gray900"
          >
            {props?.ninetysix}
          </Text>
          <Text
            className="text-base text-center text-gray-900 tracking-[-0.30px] w-auto"
            size="txtInterMedium16Gray900"
          >
            {props?.ninetyseven}
          </Text>
        </div>
      </div>
    </>
  );
};

FollowColumnlanguage.defaultProps = {
  language: "전체 ",
  ninetyfive: "인기",
  ninetysix: "신작",
  ninetyseven: "팔로우",
};

export default FollowColumnlanguage;
