import React from "react";

import { Img, Text } from "components";

const Rowonehundredten = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[200px] w-full"
          src="images/img__blue_gray_100_200x180.svg"
          alt="OneHundredTen"
        />
        <div className="flex flex-col gap-2.5 h-[212px] md:h-auto items-center justify-start w-[400px] sm:w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.26px] w-auto"
              size="txtInterMedium24"
            >
              {props?.title}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="text-base text-gray-900 tracking-[-0.18px] w-auto"
              size="txtInterMedium16Gray900"
            >
              {props?.author}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="text-base text-gray-900 tracking-[-0.18px] w-auto"
              size="txtInterMedium16"
            >
              {props?.points}
            </Text>
          </div>
          <div className="flex flex-row gap-5 items-start justify-start w-full">
            <div className="flex flex-1 md:flex-1 flex-row gap-2.5 items-start justify-start w-auto md:w-full">
              <Img
                className="h-6 md:h-auto object-cover w-[25px]"
                src="images/img__1.png"
                alt="OneHundredEleven"
              />
              <Text
                className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                size="txtInterMedium16Gray900"
              >
                {props?.text1}
              </Text>
            </div>
            <div className="flex flex-1 md:flex-1 flex-row gap-2.5 items-start justify-start w-auto md:w-full">
              <Img
                className="h-6 md:h-auto object-cover w-[25px]"
                src="images/img__2.png"
                alt="OneHundredTwelve"
              />
              <Text
                className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                size="txtInterMedium16Gray900"
              >
                {props?.text2}
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start sm:pr-5 pr-[25px] w-full">
            <Text
              className="text-base text-gray-900 tracking-[-0.18px] w-auto"
              size="txtInterMedium16"
            >
              {props?.date}
            </Text>
          </div>
          <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[172px] w-full">
            <div className="flex flex-row gap-9 items-start justify-start w-auto">
              <div className="md:h-[27px] h-[35px] py-[3px] relative w-[43%]">
                <div className="absolute bg-gray-300 h-[26px] inset-[0] justify-center m-auto w-full"></div>
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.24px] w-max"
                  size="txtInterMedium22Black900"
                >
                  {props?.copytext}
                </Text>
              </div>
              <div className="md:h-[27px] h-[35px] py-[3px] relative w-[43%]">
                <div className="absolute bg-gray-300 h-[26px] inset-[0] justify-center m-auto w-full"></div>
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[-0.24px] w-max"
                  size="txtInterMedium22Black900"
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

Rowonehundredten.defaultProps = {
  title: "제목 2",
  author: "유미엄마",
  points: "10p",
  text1: "5",
  text2: "5",
  date: "2023. 10. 20",
  copytext: "복사",
  deletetext: "삭제",
};

export default Rowonehundredten;
