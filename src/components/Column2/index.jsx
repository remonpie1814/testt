import React from "react";

import { Button, Text } from "components";

const Column2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1180px] w-full">
          <Button
            className="!text-white-A700 border-gray-400_03 border-l border-solid border-t cursor-pointer flex-1 font-bold font-inter h-[67px] text-[22px] text-center sm:text-lg md:text-xl w-full"
            shape="square"
            color="gray_600"
            size="md"
            variant="fill"
          >
            {props?.itemname}
          </Button>
          <div className="border-gray-400_03 border-l border-solid border-t flex flex-1 flex-col h-[67px] md:h-auto items-start justify-start max-w-[773px] w-full">
            <div className="flex flex-col h-full items-center justify-center px-3 py-2.5 w-full">
              <Text
                className="text-base text-black-900 w-auto"
                size="txtInterRegular16"
              >
                {props?.itemtext}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1180px] w-full">
          <Button
            className="!text-white-A700 border-gray-400_03 border-l border-solid border-t cursor-pointer flex-1 font-bold font-inter h-[67px] text-[22px] text-center sm:text-lg md:text-xl w-full"
            shape="square"
            color="gray_600"
            size="md"
            variant="fill"
          >
            {props?.contentname}
          </Button>
          <div className="bg-white-A700_0f border-gray-400_03 border-l border-solid border-t flex flex-1 flex-col h-[67px] md:h-auto items-start justify-start max-w-[773px] w-full">
            <div className="flex flex-col h-full items-center justify-center px-3 py-2.5 w-full">
              <Text
                className="text-base text-black-900 w-auto"
                size="txtInterRegular16"
              >
                {props?.contenttext}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 h-[66px] md:h-auto items-start justify-start max-w-[1180px] w-full">
          <Button
            className="!text-white-A700 border-gray-400_03 border-l border-solid border-t cursor-pointer flex-1 font-bold font-inter h-[66px] text-[22px] text-center sm:text-lg md:text-xl w-full"
            shape="square"
            color="gray_600"
            size="md"
            variant="fill"
          >
            {props?.datename}
          </Button>
          <div className="border-gray-400_03 border-l border-solid border-t flex flex-1 flex-col h-[66px] md:h-auto items-start justify-start max-w-[773px] w-full">
            <div className="flex flex-col h-full items-center justify-center px-3 py-2.5 w-full">
              <Text
                className="text-base text-black-900 w-auto"
                size="txtInterRegular16"
              >
                {props?.datetext}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 h-[67px] md:h-auto items-start justify-start max-w-[1180px] w-full">
          <Button
            className="!text-white-A700 border-gray-400_03 border-l border-solid border-t cursor-pointer flex-1 font-bold font-inter h-[67px] text-[22px] text-center sm:text-lg md:text-xl w-full"
            shape="square"
            color="gray_600"
            size="md"
            variant="fill"
          >
            {props?.reasonname}
          </Button>
          <div className="border-gray-400_03 border-l border-solid border-t flex flex-1 flex-col h-[67px] md:h-auto items-start justify-start max-w-[773px] w-full">
            <div className="flex flex-col h-full items-center justify-center px-3 py-2.5 w-full">
              <Text
                className="text-base text-black-900 w-auto"
                size="txtInterRegular16"
              >
                {props?.reasontext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Column2.defaultProps = {
  itemname: "항목",
  itemtext: "욕설/비방이 적힌 댓글",
  contentname: "내용",
  contenttext: "미칀룐이세욘 ㅋㅋ",
  datename: "일시",
  datetext: "2023-11-24 12:23",
  reasonname: "상세 사유",
  reasontext: "왜인지 잘 아시죠",
};

export default Column2;
