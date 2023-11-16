import React from "react";

import { Img, Text } from "components";

const Column1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-blue_gray-50_01 flex flex-col items-center justify-start p-[5px] rounded-[5px] w-[27%] md:w-full">
            <div className="flex flex-row items-center justify-between w-[96%] md:w-full">
              <Text
                className="text-base text-gray-400_01 tracking-[-0.30px]"
                size="txtInterMedium16Gray40001"
              >
                {props?.onehundrednine}
              </Text>
              <Img
                className="h-[35px] md:h-auto object-cover"
                src="images/img_image926.png"
                alt="image926"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Column1.defaultProps = { onehundrednine: "작품명 검색" };

export default Column1;
