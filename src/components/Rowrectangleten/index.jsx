import React from "react";

import { Button, Img, Text } from "components";

const Rowrectangleten = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start rounded-[30px] w-[28%] sm:w-full">
          <Img
            className="h-[180px] md:h-auto object-cover rounded-[30px] w-full"
            src="images/img_rectangle10.png"
            alt="rectangleTen"
          />
        </div>
        <div className="flex flex-col gap-0.5 h-[196px] md:h-auto items-start justify-center w-[360px]">
          <div className="flex flex-col items-start justify-center w-[360px]">
            <Text
              className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.24px] w-auto"
              size="txtInterMedium22Gray900_1"
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
              {props?.userlevelprogress}
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
            <div className="flex flex-row gap-2.5 items-start justify-start mt-[15px] w-auto">
              <Button
                className="cursor-pointer font-inter font-medium min-w-[100px] text-center text-sm tracking-[-0.15px]"
                shape="square"
                color="gray_300"
                size="xs"
                variant="fill"
              >
                {props?.copybutton}
              </Button>
              <Button
                className="cursor-pointer font-inter font-medium min-w-[100px] text-center text-sm tracking-[-0.15px]"
                shape="square"
                color="gray_300"
                size="xs"
                variant="fill"
              >
                {props?.deletebutton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Rowrectangleten.defaultProps = {
  username: "신데렐라는 어려서 부모님을 잃고요",
  userpoints: "10p",
  userlevel: "5",
  userlevelprogress: "5",
  usernickname: "유미네",
  userjoindate: "2023. 10. 08",
  copybutton: "복사",
  deletebutton: "삭제",
};

export default Rowrectangleten;
