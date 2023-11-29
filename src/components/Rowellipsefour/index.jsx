import React from "react";

import { Img, Text } from "components";

const Rowellipsefour = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[100px] items-center justify-start w-[100px]">
          <Img
            className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
            src="images/img_ellipse4.png"
            alt="ellipseFour"
          />
        </div>
        <div className="flex flex-col items-start justify-start pr-0.5 py-0.5">
          <Text
            className="mb-[11px] text-base text-gray-900 tracking-[-0.30px]"
            size="txtInterMedium16Gray900"
          >
            {props?.followtext}
          </Text>
        </div>
      </div>
    </>
  );
};

Rowellipsefour.defaultProps = { followtext: "팔로우1" };

export default Rowellipsefour;
