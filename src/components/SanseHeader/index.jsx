import React from "react";

import { Img, Text } from "components";

const SanseHeader = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2 items-center justify-start w-[61px]">
          <Img
            className="h-[25px] md:h-auto object-cover w-[25px]"
            src="images/img_image804_25x25.png"
            alt="image804_One"
          />
          <Text
            className="text-base text-center text-gray-900 tracking-[-0.18px]"
            size="txtInterMedium16Gray900_1"
          >
            {props?.twentythreeTwo}
          </Text>
        </div>
        <div className="flex flex-row gap-[3px] items-center justify-start w-auto">
          <Img
            className="h-8 md:h-auto object-cover w-8"
            src="images/img_image805.png"
            alt="image805"
          />
          <Text
            className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
            size="txtInterMedium16Gray900"
          >
            {props?.usernumber}
          </Text>
        </div>
        <div className="flex flex-row gap-[13px] items-start justify-between w-auto">
          <Img
            className="h-[25px] md:h-auto object-cover w-[25px]"
            src="images/img__25x25.png"
            alt="TwentySeven"
          />
          <Text
            className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
            size="txtInterMedium16Gray900"
          >
            {props?.usernumber2}
          </Text>
        </div>
      </div>
    </>
  );
};

SanseHeader.defaultProps = {
  twentythreeTwo: "23",
  usernumber: "1",
  usernumber2: "5",
};

export default SanseHeader;
