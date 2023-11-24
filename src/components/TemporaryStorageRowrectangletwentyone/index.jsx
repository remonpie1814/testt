import React from "react";

import { Img, Text } from "components";

const TemporaryStorageRowrectangletwentyone = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-blue_gray-100 h-[232px] w-[33%]"></div>
        <div className="flex flex-col items-start justify-center w-[360px]">
          <div className="flex flex-col items-start justify-start w-[360px]">
            <div className="flex flex-row h-9 md:h-auto items-start justify-between w-[351px]">
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.42px] w-auto"
                size="txtInterMedium22Gray900_1"
              >
                {props?.title}
              </Text>
              <Img
                className="h-[31px] md:h-auto object-cover w-[31px]"
                src="images/img_seticon.png"
                alt="seticon"
              />
            </div>
            <div className="flex flex-col items-center justify-center pt-[35px] w-auto">
              <Text
                className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                size="txtInterMedium16Gray900_1"
              >
                {props?.pagenumber}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center w-auto">
              <Text
                className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                size="txtInterMedium16Gray900"
              >
                {props?.lasteditdate}
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[100px] w-full">
            <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
              <div className="md:h-[38px] h-[50px] py-[5px] relative w-[31%]">
                <div className="absolute bg-amber-400_7f h-[38px] inset-[0] justify-center m-auto w-full"></div>
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto text-black-900 text-center text-sm tracking-[-0.15px] w-max"
                  size="txtInterMedium14Black900_1"
                >
                  {props?.editimagetext}
                </Text>
              </div>
              <div className="md:h-[38px] h-[50px] py-[5px] relative w-[31%]">
                <div className="absolute bg-amber-400_7f h-[38px] inset-[0] justify-center m-auto w-full"></div>
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto text-black-900 text-center text-sm tracking-[-0.15px] w-max"
                  size="txtInterMedium14Black900_1"
                >
                  {props?.editrecordingtext}
                </Text>
              </div>
              <div className="md:h-[38px] h-[50px] py-[5px] relative w-[31%]">
                <div className="absolute bg-blue_gray-100 h-[38px] inset-[0] justify-center m-auto w-full"></div>
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto text-black-900 text-center text-sm tracking-[-0.15px] w-max"
                  size="txtInterMedium14Black900_1"
                >
                  {props?.deletetext}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TemporaryStorageRowrectangletwentyone.defaultProps = {
  title: "제목제목제목",
  pagenumber: "10p",
  lasteditdate: "마지막으로 수정한 날짜: 2023. 11. 17",
  editimagetext: "그림 수정",
  editrecordingtext: "녹음 수정",
  deletetext: "삭제",
};

export default TemporaryStorageRowrectangletwentyone;
