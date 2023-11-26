import React from "react";

import { Img, Text } from "components";

const LikeRowrectangleten = (props) => {
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
              {props?.userage}
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
              {props?.userheight}
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
              {props?.userhobby}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start pb-0.5 px-0.5 w-full">
            <div className="flex flex-col gap-0.5 items-start justify-start mb-[7px] w-auto">
              <Text
                className="text-gray-900 text-sm tracking-[-0.15px] w-auto"
                size="txtInterMedium14Gray900_1"
              >
                {props?.usermothername}
              </Text>
              <Text
                className="text-gray-900 text-xs tracking-[-0.13px] w-auto"
                size="txtInterMedium12"
              >
                {props?.userbirthday}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

LikeRowrectangleten.defaultProps = {
  username: "신데렐라는 어려서 부모님을 잃고요",
  userage: "10p",
  userheight: "5",
  userhobby: "5",
  usermothername: "유미엄마",
  userbirthday: "2023. 10. 08",
};

export default LikeRowrectangleten;
