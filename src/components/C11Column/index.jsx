import React from "react";

import { Img, Line, Text } from "components";

const C11Column = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <div className="flex flex-row gap-3 items-center justify-start w-auto">
            <Text
              className="text-base text-black-900 text-center tracking-[-0.30px] w-[57px]"
              size="txtInterRegular16Black900"
            >
              {props?.usertext}
            </Text>
            <Line className="bg-black-900 h-[31px] w-0.5" />
            <Text
              className="text-base text-black-900 text-center tracking-[-0.30px] w-[57px]"
              size="txtInterRegular16Black900"
            >
              {props?.usertext2}
            </Text>
            <Img
              className="h-8 md:h-auto object-cover w-8"
              src="images/img_down11_32x32.png"
              alt="downEleven"
            />
          </div>
          <Line className="bg-black-900 h-px w-full" />
        </div>
      </div>
    </>
  );
};

C11Column.defaultProps = { usertext: "전체보기", usertext2: "전체시기" };

export default C11Column;
