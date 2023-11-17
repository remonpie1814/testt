import React from "react";

import { Button, Img, Text } from "components";

const Rowonehundredeightytwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[180px] rounded-[30px] w-[140px]"
          src="images/img__gray_600.svg"
          alt="OneHundredEightyTwo"
        />
        <div className="flex flex-col gap-0.5 h-[196px] md:h-auto items-start justify-center w-auto">
          <div className="flex flex-col items-start justify-center w-[360px]">
            <Text
              className="leading-[150.00%] max-w-[360px] md:max-w-full text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.24px]"
              size="txtInterMedium22Gray900"
            >
              {props?.username}
            </Text>
          </div>
          <div className="flex flex-row gap-0.5 items-center justify-start w-auto">
            <Text
              className="text-gray-900 text-sm w-auto"
              size="txtInterMedium14Gray900"
            >
              {props?.userpoints}
            </Text>
            <Img
              className="h-5 md:h-auto object-cover w-5"
              src="images/img__24x25.png"
              alt="image920"
            />
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
              {props?.five}
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
              {props?.fiveOne}
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
                size="txtInterMedium12Gray900"
              >
                {props?.userjoindate}
              </Text>
            </div>
            <Button
              className="!text-black-900 cursor-pointer font-inter font-medium min-w-[100px] mt-[15px] text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.24px]"
              shape="square"
              color="gray_300"
              size="xs"
              variant="fill"
            >
              {props?.prop}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

Rowonehundredeightytwo.defaultProps = {
  username: (
    <>
      신데렐라는 어려서 부모님을 발로 차<br />
      싸커 발로 차 싸커
    </>
  ),
  userpoints: "10p",
  five: "5",
  fiveOne: "5",
  usernickname: "유미엄마",
  userjoindate: "2023. 10. 08",
  prop: "삭제",
};

export default Rowonehundredeightytwo;
