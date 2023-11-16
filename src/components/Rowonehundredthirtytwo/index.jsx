import React from "react";

import { Button, Img, Text } from "components";

const Rowonehundredthirtytwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[180px] rounded-[30px]"
          src="images/img__gray_600.svg"
          alt="OneHundredThirtyTwo"
        />
        <div className="flex flex-col gap-0.5 h-[196px] md:h-auto items-start justify-center sm:mt-0 my-[5px] w-auto">
          <div className="flex flex-col items-center justify-start w-full">
            <Text
              className="leading-[150.00%] text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.26px] w-full"
              size="txtInterMedium24"
            >
              {props?.username}
            </Text>
          </div>
          <div className="flex flex-row gap-0.5 items-center justify-start w-auto">
            <Text
              className="text-base text-gray-900 tracking-[-0.18px] w-auto"
              size="txtInterMedium16"
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
              className="text-base text-gray-900 tracking-[-0.18px] w-auto"
              size="txtInterMedium16Gray900"
            >
              {props?.userlevelnumber}
            </Text>
            <Img
              className="h-6 md:h-auto object-cover w-6"
              src="images/img__2.png"
              alt="image921"
            />
            <Text
              className="text-base text-gray-900 tracking-[-0.18px] w-auto"
              size="txtInterMedium16Gray900"
            >
              {props?.userlevelnumber2}
            </Text>
          </div>
          <div className="flex flex-row items-end justify-between w-full">
            <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
              <Text
                className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                size="txtInterMedium16Gray900"
              >
                {props?.usernickname}
              </Text>
              <Text
                className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                size="txtInterMedium16"
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

Rowonehundredthirtytwo.defaultProps = {
  username: (
    <>
      신데렐라는 어려서 부모님을 발로 차<br />
      싸커 발로 차 싸커
    </>
  ),
  userpoints: "10p",
  userlevelnumber: "5",
  userlevelnumber2: "5",
  usernickname: "유미엄마",
  userjoindate: "2023. 10. 08",
  prop: "삭제",
};

export default Rowonehundredthirtytwo;
