import React from "react";

import { Img, Text } from "components";

const Columnonehundredtwentynine = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[27px] h-[38px] md:h-auto items-start justify-start w-[191px]">
          <Img
            className="h-[38px] md:h-auto object-cover w-[38px]"
            src="images/img_image837.png"
            alt="image837"
          />
          <Text
            className="text-base text-black-900 tracking-[-0.30px] w-[118px]"
            size="txtInterMedium16"
          >
            {props?.passwordtext}
          </Text>
        </div>
      </div>
    </>
  );
};

Columnonehundredtwentynine.defaultProps = { passwordtext: "비밀번호 변경하기" };

export default Columnonehundredtwentynine;
