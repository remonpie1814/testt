import React from "react";

import { Button, Img, Text } from "components";

const Rowrectangleten2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[180px] relative rounded-[30px] w-[28%] sm:w-full">
          <Img
            className="absolute h-[180px] inset-[0] justify-center m-auto object-cover rounded-[30px] w-full"
            src="images/img_rectangle10.png"
            alt="rectangleTen"
          />
          <Img
            className="absolute h-[26px] object-cover right-[8%] top-[6%] w-[26px]"
            src="images/img_speakerfilledaudiotool_26x26.png"
            alt="speakerfilledau"
          />
        </div>
        <div className="flex flex-col gap-0.5 h-[200px] md:h-auto items-start justify-center w-[360px]">
          <div className="flex flex-row gap-2.5 items-center justify-start w-[360px]">
            <Text
              className="leading-[150.00%] md:max-w-full max-w-xs text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.24px]"
              size="txtInterMedium22Gray900_1"
            >
              {props?.userdescription}
            </Text>
            <Img
              className="h-[18px] md:h-auto object-cover w-[18px]"
              src="images/img_seticon_18x18.png"
              alt="seticon"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-auto">
            <Text
              className="text-gray-900 text-sm w-auto"
              size="txtInterMedium14Gray900"
            >
              {props?.userpoints}
            </Text>
          </div>
          <div className="flex flex-row gap-0.5 items-center justify-start w-auto">
            <Img
              className="h-[18px] md:h-auto object-cover w-[18px]"
              src="images/img__1.png"
              alt="image922"
            />
            <Text
              className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
              size="txtInterMedium14Gray900_1"
            >
              {props?.userlevel}
            </Text>
            <Img
              className="h-6 md:h-auto object-cover w-6"
              src="images/img__2.png"
              alt="image921"
            />
            <Text
              className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
              size="txtInterMedium14Gray900_1"
            >
              {props?.userlevelnumber}
            </Text>
          </div>
          <div className="flex flex-row items-start justify-between pl-0.5 w-full">
            <div className="flex flex-col gap-0.5 items-start justify-start mb-[9px] w-auto">
              <Text
                className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
                size="txtInterMedium14Gray900_1"
              >
                {props?.usernickname}
              </Text>
              <Text
                className="text-gray-900 text-xs tracking-[-0.13px] w-auto"
                size="txtInterMedium12"
              >
                {props?.userjoindate}
              </Text>
            </div>
            <Button
              className="!text-black-900 cursor-pointer font-inter font-medium min-w-[100px] mt-[15px] text-center text-sm tracking-[-0.15px]"
              shape="square"
              color="gray_300"
              size="sm"
              variant="fill"
            >
              {props?.useraction}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

Rowrectangleten2.defaultProps = {
  userdescription: (
    <>
      신데렐라는 어려서 부모님을 발로 차<br />
      싸커 발로 차 싸커
    </>
  ),
  userpoints: "10p",
  userlevel: "5",
  userlevelnumber: "5",
  usernickname: "유미엄마",
  userjoindate: "2023. 10. 08",
  useraction: "삭제",
};

export default Rowrectangleten2;
