import React from "react";

import { Img, Text } from "components";

const Columntype = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[27px] h-[38px] md:h-auto items-start justify-start w-[191px]">
          <Img
            className="h-[38px] md:h-auto object-cover w-[38px]"
            src="images/img_image840.png"
            alt="image840"
          />
          <Text
            className="text-base text-black-900 tracking-[-0.30px] w-20"
            size="txtInterMedium16"
          >
            {props?.type}
          </Text>
        </div>
      </div>
    </>
  );
};

Columntype.defaultProps = { type: "내가 쓴 댓글" };

export default Columntype;
