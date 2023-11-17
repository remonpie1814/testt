import React from "react";

import { Img, Text } from "components";

const TemporaryStorageColumnrectangletwentyone = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-evenly w-full">
          <Img
            className="h-[249px]"
            src="images/img_rectangle21.svg"
            alt="rectangleTwentyOne"
          />
          <div className="flex sm:flex-1 flex-col md:gap-10 gap-[62px] justify-start w-[67%] sm:w-full">
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px] w-[350px]">
              <div className="flex flex-row h-9 md:h-auto items-start justify-between w-[318px]">
                <Text
                  className="text-base text-gray-900 tracking-[-0.30px] w-auto"
                  size="txtInterMedium16Gray900_1"
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
                  size="txtInterMedium16Gray900"
                >
                  {props?.page}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center w-auto">
                <Text
                  className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                  size="txtInterMedium16Gray900_1"
                >
                  {props?.lasteditdate}
                </Text>
              </div>
            </div>
            <div className="h-[38px] relative w-[84%]">
              <Img
                className="absolute h-[38px] inset-y-[0] my-auto right-[0] w-[294px]"
                src="images/img_temporarystoragebuttons.svg"
                alt="temporarystorag"
              />
              <div className="absolute flex flex-row gap-[45px] h-max inset-y-[0] items-center justify-between left-[0] my-auto w-auto">
                <div className="flex flex-col items-center justify-center sm:pl-5 pl-[22px] py-1.5 w-[91px]">
                  <Text
                    className="text-black-900 text-center text-sm tracking-[-0.15px] w-auto"
                    size="txtInterMedium14Black900"
                  >
                    {props?.editpicture}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center py-1.5 w-auto">
                  <Text
                    className="text-black-900 text-sm tracking-[-0.15px] w-auto"
                    size="txtInterMedium14Black900"
                  >
                    {props?.editrecording}
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-center pl-3.5 py-1.5 w-auto">
                  <Text
                    className="text-black-900 text-sm tracking-[-0.15px] w-auto"
                    size="txtInterMedium14Black900"
                  >
                    {props?.deletebutton}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TemporaryStorageColumnrectangletwentyone.defaultProps = {
  title: "제목제목제목",
  page: "10p",
  lasteditdate: "마지막으로 수정한 날짜: 2023. 11. 17",
  editpicture: "그림 수정",
  editrecording: "녹음 수정",
  deletebutton: "삭제",
};

export default TemporaryStorageColumnrectangletwentyone;
