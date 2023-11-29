import React from "react";

import { Img, Text } from "components";

const Page30Header = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-2.5 h-[30px] md:h-auto items-center justify-center w-[75px]">
          <Img
            className="h-[25px] md:h-auto object-cover w-[25px]"
            src="images/img_image804_25x25.png"
            alt="image804_One"
          />
          <Text
            className="text-base text-center text-gray-900 tracking-[-0.18px]"
            size="txtInterMedium16Gray900_1"
          >
            {props?.twentythree}
          </Text>
        </div>
        <div className="flex flex-row gap-2.5 h-8 md:h-auto items-center justify-center w-[75px]">
          <Img
            className="h-8 md:h-auto object-cover w-8"
            src="images/img_image805.png"
            alt="image805"
          />
          <Text
            className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
            size="txtInterMedium16Gray900"
          >
            {props?.usernumberone}
          </Text>
        </div>
        <div className="flex flex-row gap-2.5 h-[30px] md:h-auto items-center justify-center w-[75px]">
          <Img
            className="h-[25px] md:h-auto object-cover w-[25px]"
            src="images/img__25x25.png"
            alt="SixtySeven"
          />
          <Text
            className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
            size="txtInterMedium16Gray900"
          >
            {props?.usernumberfive}
          </Text>
        </div>
      </div>
    </>
  );
};

Page30Header.defaultProps = {
  twentythree: "23",
  usernumberone: "1",
  usernumberfive: "5",
};

export default Page30Header;
