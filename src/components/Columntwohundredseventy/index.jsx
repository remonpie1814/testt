import React from "react";

import { Text } from "components";

const Columntwohundredseventy = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-center w-auto">
          <Text
            className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.42px] w-[223px]"
            size="txtInterMedium22Gray900"
          >
            {props?.searchtext}
          </Text>
        </div>
        <div className="flex flex-row gap-8 items-start justify-center w-auto">
          <div className="bg-orange-50 flex flex-row gap-[9px] items-center justify-end p-2.5 rounded-[5px] w-[43%]">
            <Text
              className="text-base text-black-900 tracking-[-0.18px]"
              size="txtInterMedium16Black900_1"
            >
              {props?.categorytext}
            </Text>
            <Text
              className="text-base text-red-A700 tracking-[-0.18px]"
              size="txtInterMedium16RedA700_1"
            >
              {props?.xtext}
            </Text>
          </div>
          <div className="bg-orange-50 flex flex-row gap-3.5 items-center justify-end p-2.5 rounded-[5px] w-[48%]">
            <Text
              className="text-base text-black-900 tracking-[-0.18px]"
              size="txtInterMedium16Black900_1"
            >
              {props?.publicscopetext}
            </Text>
            <Text
              className="text-base text-red-A700 tracking-[-0.18px]"
              size="txtInterMedium16RedA700_1"
            >
              {props?.xonetext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

Columntwohundredseventy.defaultProps = {
  searchtext: "‘호랑이’에 대한 검색 결과",
  categorytext: "분류 : 그림만",
  xtext: "X",
  publicscopetext: "공개범위 : 모두",
  xonetext: "X",
};

export default Columntwohundredseventy;