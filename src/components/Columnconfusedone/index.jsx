import React from "react";

import { Img, Text } from "components";

const Columnconfusedone = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[27px] h-[38px] md:h-auto items-start justify-start w-[191px]">
          <Img
            className="h-[35px] md:h-auto object-cover w-[35px]"
            src="images/img_confused1.png"
            alt="confusedOne"
          />
          <Text
            className="text-base text-black-900 tracking-[-0.30px] w-[93px]"
            size="txtInterMedium16"
          >
            {props?.onehundredninety}
          </Text>
        </div>
      </div>
    </>
  );
};

Columnconfusedone.defaultProps = { onehundredninety: "제재 내역 보기" };

export default Columnconfusedone;