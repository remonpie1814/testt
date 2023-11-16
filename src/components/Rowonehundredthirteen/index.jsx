import React from "react";

import { Img, Text } from "components";

const Rowonehundredthirteen = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="flex-1 h-full w-full"
          src="images/img__blue_gray_100_200x180.svg"
          alt="OneHundredThirteen"
        />
        <div className="flex flex-col gap-2.5 h-[212px] md:h-auto items-center justify-start w-[380px] sm:w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.26px] w-auto"
              size="txtInterMedium24Gray900_1"
            >
              {props?.posttitle}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="text-base text-gray-900 tracking-[-0.18px] w-auto"
              size="txtInterMedium16Gray900_1"
            >
              {props?.authorname}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="text-base text-gray-900 tracking-[-0.18px] w-auto"
              size="txtInterMedium16Gray900"
            >
              {props?.postpoints}
            </Text>
          </div>
          <div className="flex flex-row gap-5 items-start justify-start w-full">
            <div className="flex flex-1 md:flex-1 flex-row gap-2.5 items-start justify-start w-auto md:w-full">
              <Img
                className="h-6 md:h-auto object-cover w-[25px]"
                src="images/img__1.png"
                alt="OneHundredFourteen"
              />
              <Text
                className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                size="txtInterMedium16Gray900_1"
              >
                {props?.postimage1points}
              </Text>
            </div>
            <div className="flex flex-1 md:flex-1 flex-row gap-2.5 items-start justify-start w-auto md:w-full">
              <Img
                className="h-6 md:h-auto object-cover w-[25px]"
                src="images/img__2.png"
                alt="OneHundredFifteen"
              />
              <Text
                className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                size="txtInterMedium16Gray900_1"
              >
                {props?.postimage2points}
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start sm:pr-5 pr-[25px] w-full">
            <Text
              className="text-base text-gray-900 tracking-[-0.18px] w-auto"
              size="txtInterMedium16Gray900"
            >
              {props?.postdate}
            </Text>
          </div>
          <div className="flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[152px] w-full">
            <div className="flex flex-row gap-9 items-start justify-start w-auto">
              <div className="md:h-[30px] h-[35px] py-0.5 relative w-[43%]">
                <div className="absolute bg-gray-300 h-[30px] inset-[0] justify-center m-auto w-full"></div>
                <Text
                  className="absolute inset-x-[0] mx-auto text-black-900 text-center text-xl top-[6%] tracking-[-0.22px] w-max"
                  size="txtInterMedium20Black900"
                >
                  {props?.copybuttontext}
                </Text>
              </div>
              <div className="md:h-[30px] h-[35px] py-0.5 relative w-[43%]">
                <div className="absolute bg-gray-300 h-[30px] inset-[0] justify-center m-auto w-full"></div>
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto text-black-900 text-center text-xl tracking-[-0.22px] w-max"
                  size="txtInterMedium20Black900"
                >
                  {props?.deletebuttontext}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Rowonehundredthirteen.defaultProps = {
  posttitle: "제목 ㅏㄴㅣㅇㅏ",
  authorname: "유미엄마",
  postpoints: "10p",
  postimage1points: "5",
  postimage2points: "5",
  postdate: "2023. 10. 20",
  copybuttontext: "복사",
  deletebuttontext: "삭제",
};

export default Rowonehundredthirteen;
