import React from "react";

import { Img, Text } from "components";

const Columnonehundredthirtyone = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[27px] h-[38px] md:h-auto items-start justify-start w-[191px]">
          <Img
            className="h-[38px] md:h-auto object-cover w-[38px]"
            src="images/img_image839.png"
            alt="image839"
          />
          <Text
            className="text-base text-black-900 tracking-[-0.30px] w-[89px]"
            size="txtInterMedium16"
          >
            {props?.onehundredthirtyone}
          </Text>
        </div>
      </div>
    </>
  );
};

Columnonehundredthirtyone.defaultProps = {
  onehundredthirtyone: "계정 탈퇴하기",
};

export default Columnonehundredthirtyone;
