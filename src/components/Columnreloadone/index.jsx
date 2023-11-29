import React from "react";

import { Img, Text } from "components";

const Columnreloadone = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[27px] h-[38px] md:h-auto items-start justify-start w-[191px]">
          <Img
            className="h-[35px] md:h-auto object-cover w-[35px]"
            src="images/img_reload1.png"
            alt="reloadOne"
          />
          <Text
            className="text-base text-black-900 tracking-[-0.30px] w-[118px]"
            size="txtInterMedium16"
          >
            {props?.twohundredtwentynine}
          </Text>
        </div>
      </div>
    </>
  );
};

Columnreloadone.defaultProps = { twohundredtwentynine: "비밀번호 변경하기" };

export default Columnreloadone;
