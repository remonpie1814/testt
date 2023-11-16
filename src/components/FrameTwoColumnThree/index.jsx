import React from "react";

import { Img, Text } from "components";

const FrameTwoColumnThree = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[25px] items-center justify-start w-auto md:w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-start justify-center max-w-[1920px] md:px-10 sm:px-5 px-[60px] py-[25px] w-full">
            <div className="flex flex-col items-start justify-start">
              <Text
                className="md:text-2xl sm:text-[22px] text-[26px] text-black-900 tracking-[-0.49px]"
                size="txtInterMedium26Black900"
              >
                {props?.customerservicetext}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start">
              <Text
                className="md:text-2xl sm:text-[22px] text-[26px] text-black-900 text-center tracking-[-0.49px]"
                size="txtInterMedium26Black900"
              >
                {props?.noticetext}
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-2.5 items-start justify-center md:px-10 sm:px-5 px-[60px] py-2.5 w-full">
            <Text
              className="md:text-2xl sm:text-[22px] text-[26px] text-black-900 tracking-[-0.49px] w-auto"
              size="txtInterMedium26Black900"
            >
              {props?.businessinfotext}
            </Text>
            <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
              <Text
                className="md:text-2xl sm:text-[22px] text-[26px] text-black-900 tracking-[-0.49px] w-auto"
                size="txtInterMedium26Black900"
              >
                {props?.termstext}
              </Text>
              <Text
                className="md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-400 tracking-[-0.49px] w-auto"
                size="txtInterMedium26Bluegray400"
              >
                {props?.privacypolicytext}
              </Text>
            </div>
          </div>
          <Img
            className="h-[92px] w-full"
            src="images/img__blue_gray_100.svg"
            alt="TwentyTwo"
          />
        </div>
      </div>
    </>
  );
};

FrameTwoColumnThree.defaultProps = {
  customerservicetext: "고객센터",
  noticetext: "공지사항",
  businessinfotext: "사업자 정보",
  termstext: "이용약관",
  privacypolicytext: "개인정보 처리방침",
};

export default FrameTwoColumnThree;
