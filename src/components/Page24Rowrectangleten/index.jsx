import React from "react";

import { Button, Img, Text } from "components";

const Page24Rowrectangleten = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[180px] relative rounded-[30px] w-[28%] sm:w-full">
          <Img
            className="absolute h-[180px] inset-[0] justify-center m-auto object-cover rounded-[30px] w-full"
            src="images/img_rectangle10_2.png"
            alt="rectangleTen"
          />
          <Img
            className="absolute h-[26px] object-cover right-[8%] top-[6%] w-[26px]"
            src="images/img_speakerfilledaudiotool_26x26.png"
            alt="speakerfilledau"
          />
        </div>
        <div className="flex flex-col gap-0.5 h-[180px] md:h-auto items-center justify-center py-2.5 w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <Text
              className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
              size="txtInterMedium22Gray900_1"
            >
              {props?.posttitle}
            </Text>
            <Img
              className="h-[18px] md:h-auto object-cover w-[18px]"
              src="images/img_seticon_18x18.png"
              alt="seticon"
            />
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            <Text
              className="text-gray-900 text-sm w-auto"
              size="txtInterMedium14Gray900"
            >
              {props?.postpoints}
            </Text>
          </div>
          <div className="flex flex-col h-full items-start justify-center w-full">
            <Text
              className="text-gray-900 text-sm w-auto"
              size="txtInterMedium14Gray900_1"
            >
              {props?.posteditdate}
            </Text>
          </div>
          <div className="flex flex-row gap-2.5 items-end justify-end px-[5px] w-full">
            <Button
              className="!text-black-900 cursor-pointer font-inter font-medium min-w-[100px] text-center text-sm tracking-[-0.15px]"
              shape="square"
              color="gray_300"
              size="sm"
              variant="fill"
            >
              {props?.editpicturebutton}
            </Button>
            <Button
              className="!text-black-900 cursor-pointer font-inter font-medium min-w-[100px] text-center text-sm tracking-[-0.15px]"
              shape="square"
              color="gray_300"
              size="sm"
              variant="fill"
            >
              {props?.editaudiobutton}
            </Button>
            <Button
              className="!text-black-900 cursor-pointer font-inter font-medium min-w-[100px] text-center text-sm tracking-[-0.15px]"
              shape="square"
              color="gray_300"
              size="sm"
              variant="fill"
            >
              {props?.deletebutton}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

Page24Rowrectangleten.defaultProps = {
  posttitle: "제목제목제목",
  postpoints: "10p",
  posteditdate: "마지막으로 수정한 날짜: 2023. 11. 17",
  editpicturebutton: "그림 수정",
  editaudiobutton: "녹음 수정",
  deletebutton: "삭제",
};

export default Page24Rowrectangleten;
