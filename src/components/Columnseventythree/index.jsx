import React from "react";

import { Img, Text } from "components";

const Columnseventythree = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[114px] relative w-[114px]">
          <Img
            className="absolute h-[114px] inset-[0] justify-center m-auto object-cover w-[114px]"
            alt="image607"
            src={props?.userimage}
          />
          {!!props?.backgroundimage ? (
            <Img
              className="absolute h-[114px] inset-[0] justify-center m-auto w-[114px]"
              alt="SeventyThree"
              src={props?.backgroundimage}
            />
          ) : null}
        </div>
        <Text
          className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
          size="txtInterMedium16Gray900_1"
        >
          {props?.username}
        </Text>
      </div>
    </>
  );
};

Columnseventythree.defaultProps = {
  userimage: "images/img_image804.png",
  username: "초록이",
};

export default Columnseventythree;
