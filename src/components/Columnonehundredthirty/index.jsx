import React from "react";

import { Img, Text } from "components";

const Columnonehundredthirty = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[27px] h-[38px] md:h-auto items-start justify-start w-[191px]">
          <Img
            className="h-[38px] md:h-auto object-cover w-[38px]"
            src="images/img_image844.png"
            alt="image844"
          />
          <Text
            className="text-base text-black-900 tracking-[-0.30px] w-[93px]"
            size="txtInterMedium16"
          >
            {props?.text}
          </Text>
        </div>
      </div>
    </>
  );
};

Columnonehundredthirty.defaultProps = { text: "제재 내역 보기" };

export default Columnonehundredthirty;
