import React from "react";

import { Img, Text } from "components";

const Columnonehundredninetyone = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[27px] h-[38px] md:h-auto items-start justify-start w-[191px]">
          <Img
            className="h-[35px] md:h-auto object-cover w-[35px]"
            src="images/img_image839.png"
            alt="image839"
          />
          <Text
            className="text-base text-black-900 tracking-[-0.30px] w-[89px]"
            size="txtInterMedium16"
          >
            {props?.onehundredninetyone}
          </Text>
        </div>
      </div>
    </>
  );
};

Columnonehundredninetyone.defaultProps = {
  onehundredninetyone: "계정 탈퇴하기",
};

export default Columnonehundredninetyone;