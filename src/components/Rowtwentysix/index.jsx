import React from "react";

import { Img, Text } from "components";

const Rowtwentysix = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[100px] w-[100px]"
          src="images/img__blue_gray_100_1.svg"
          alt="TwentySix"
        />
        <div className="flex flex-col items-start justify-end pr-0.5 py-0.5">
          <Text
            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.46px]"
            size="txtInterMedium24"
          >
            {props?.authorname}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start px-[9px] w-[9%] sm:w-full">
          <Img
            className="h-[30px] md:h-auto object-cover w-[30px]"
            src="images/img_image916.png"
            alt="TwentySeven"
          />
        </div>
        <div className="h-[103px] md:h-[35px] py-[34px] relative w-[21%] sm:w-full">
          <div className="absolute bg-deep_orange-100 h-[35px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
          <Text
            className="absolute h-max inset-[0] justify-center m-auto text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[-0.42px] w-max"
            size="txtInterMedium22Black900"
          >
            {props?.actiontext}
          </Text>
        </div>
      </div>
    </>
  );
};

Rowtwentysix.defaultProps = { authorname: "갈피작가님", actiontext: "삭제" };

export default Rowtwentysix;
