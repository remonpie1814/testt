import React from "react";

import { Button, Img, Text } from "components";

const TemporaryStorageRowrectangletwentyone = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-blue_gray-100 h-[180px] w-[27%]"></div>
        <div className="flex flex-col gap-0.5 h-[180px] md:h-auto items-start justify-start w-[360px]">
          <div className="flex flex-col h-[138px] md:h-auto items-start justify-start w-[360px]">
            <div className="flex flex-row items-start justify-between pb-1 w-full">
              <Text
                className="mt-[3px] text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtInterMedium22Gray900_1"
              >
                {props?.usertitle}
              </Text>
              <Img
                className="h-[31px] md:h-auto object-cover w-[31px]"
                src="images/img_seticon.png"
                alt="seticon"
              />
            </div>
            <Text
              className="text-base text-gray-900"
              size="txtInterMedium16Gray900_1"
            >
              {props?.userpoints}
            </Text>
            <Text
              className="text-base text-gray-900 w-full"
              size="txtInterMedium16Gray900"
            >
              {props?.userlasteditdate}
            </Text>
          </div>
          <div className="flex flex-row gap-2.5 items-end justify-end px-[5px] w-full">
            <Button
              className="!text-black-900 cursor-pointer font-inter font-medium min-w-[80px] text-center text-sm tracking-[-0.15px]"
              shape="square"
              color="amber_200"
              size="sm"
              variant="fill"
            >
              {props?.usereditpicture}
            </Button>
            <Button
              className="!text-black-900 cursor-pointer font-inter font-medium min-w-[80px] text-center text-sm tracking-[-0.15px]"
              shape="square"
              color="amber_200"
              size="sm"
              variant="fill"
            >
              {props?.usereditrecording}
            </Button>
            <Button
              className="cursor-pointer font-inter font-medium min-w-[80px] text-center text-sm tracking-[-0.15px]"
              shape="square"
              color="blue_gray_100"
              size="sm"
              variant="fill"
            >
              {props?.userdelete}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

TemporaryStorageRowrectangletwentyone.defaultProps = {
  usertitle: "제목제목제목",
  userpoints: "10p",
  userlasteditdate: "마지막으로 수정한 날짜: 2023. 11. 17",
  usereditpicture: "그림 수정",
  usereditrecording: "녹음 수정",
  userdelete: "삭제",
};

export default TemporaryStorageRowrectangletwentyone;
