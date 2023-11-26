import React from "react";

import { Img, Text } from "components";

const ColumnOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-blue_gray-50_02 flex flex-row items-center justify-start pl-3 rounded-br-[5px] rounded-tr-[5px] w-[27%] md:w-full">
            <div className="flex flex-col items-start justify-start pr-[7px] py-[7px]">
              <Text
                className="text-base text-gray-400_03 tracking-[-0.30px]"
                size="txtInterMedium16Gray40003"
              >
                {props?.searchtext}
              </Text>
            </div>
            <div className="bg-amber-A100 flex flex-col h-[46px] items-center justify-start p-1 w-[46px]">
              <Img
                className="h-[35px] md:h-auto object-cover w-[98%]"
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

ColumnOne.defaultProps = { searchtext: "작품명 검색" };

export default ColumnOne;