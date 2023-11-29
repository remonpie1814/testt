import React from "react";

import { Text } from "components";

const Page28Columnlanguage = (props) => {
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
            {props?.popular}
          </Text>
          <Text
            className="text-base text-center text-gray-900 tracking-[-0.30px] w-auto"
            size="txtInterMedium16Gray900"
          >
            {props?.newrelease}
          </Text>
          <Text
            className="text-base text-center text-gray-900 tracking-[-0.30px] w-auto"
            size="txtInterMedium16Gray900"
          >
            {props?.follow}
          </Text>
        </div>
      </div>
    </>
  );
};

Page28Columnlanguage.defaultProps = {
  language: "전체 ",
  popular: "인기",
  newrelease: "신작",
  follow: "팔로우",
};

export default Page28Columnlanguage;
