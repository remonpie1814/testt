import React from "react";

import { Button, Img, Text } from "components";

const Columnfourhundredninetytwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
          <Text
            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.46px]"
            size="txtInterMedium24Gray900_1"
          >
            {props?.fourhundredninetytwo}
          </Text>
          <div className="flex flex-col h-20 items-center justify-end p-6 sm:px-5 w-20">
            <Text
              className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[-0.46px]"
              size="txtInterMedium24Black900"
            >
              {props?.x}
            </Text>
          </div>
        </div>
        <div className="flex flex-row gap-[30px] h-20 md:h-auto items-center justify-start outline outline-gray-400 py-2.5 w-full">
          <Text
            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.46px] w-auto"
            size="txtInterMedium24Gray900_1"
          >
            {props?.fourhundredninetythree}
          </Text>
          <Img
            className="h-[50px] md:h-auto object-cover w-[50px]"
            src="images/img_image505.png"
            alt="image505"
          />
        </div>
        <div className="flex flex-row gap-[30px] h-20 md:h-auto items-center justify-start outline outline-gray-400 py-2.5 w-full">
          <Text
            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.46px] w-auto"
            size="txtInterMedium24Gray900_1"
          >
            {props?.fourhundredninetyfour}
          </Text>
          <Img
            className="h-[50px] md:h-auto object-cover w-[50px]"
            src="images/img_image505_50x50.png"
            alt="image505_One"
          />
        </div>
        <div className="flex flex-row gap-[30px] h-20 md:h-auto items-center justify-start outline outline-gray-400 py-2.5 w-full">
          <Text
            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.46px] w-auto"
            size="txtInterMedium24Gray900_1"
          >
            {props?.fourhundredninetyfive}
          </Text>
          <Img
            className="h-[50px] md:h-auto object-cover w-[50px]"
            src="images/img_image505_1.png"
            alt="image505_Two"
          />
        </div>
        <div className="flex flex-row gap-[30px] h-20 md:h-auto items-center justify-start outline outline-gray-400 py-2.5 w-full">
          <Text
            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.46px] w-auto"
            size="txtInterMedium24Gray900_1"
          >
            {props?.fourhundredninetysix}
          </Text>
          <Img
            className="h-[50px] md:h-auto object-cover w-[50px]"
            src="images/img_image505_2.png"
            alt="image505_Three"
          />
        </div>
        <div className="flex flex-row gap-[30px] h-20 md:h-auto items-center justify-start outline outline-gray-400 py-2.5 w-full">
          <Text
            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.46px] w-auto"
            size="txtInterMedium24Gray900_1"
          >
            {props?.fourhundredninetyseven}
          </Text>
          <Img
            className="h-[50px] md:h-auto object-cover w-[50px]"
            src="images/img_image505_3.png"
            alt="image505_Four"
          />
        </div>
        <div className="flex flex-row gap-[30px] h-20 md:h-auto items-center justify-start outline outline-gray-400 py-2.5 w-full">
          <Text
            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.46px] w-auto"
            size="txtInterMedium24Gray900_1"
          >
            {props?.fourhundredninetyeight}
          </Text>
          <Img
            className="h-[50px] md:h-auto object-cover w-[50px]"
            src="images/img_image505_4.png"
            alt="image505_Five"
          />
        </div>
        <div className="flex flex-row gap-[30px] h-20 md:h-auto items-center justify-start outline outline-gray-400 py-2.5 w-full">
          <Text
            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.46px] w-auto"
            size="txtInterMedium24Gray900_1"
          >
            {props?.fourhundredninetynine}
          </Text>
          <Img
            className="h-[50px] md:h-auto object-cover w-[50px]"
            src="images/img_image505_5.png"
            alt="image505_Six"
          />
        </div>
        <div className="flex flex-row gap-[30px] h-20 md:h-auto items-center justify-start outline outline-gray-400 py-2.5 w-full">
          <Text
            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.46px] w-auto"
            size="txtInterMedium24Gray900_1"
          >
            {props?.fivehundred}
          </Text>
          <Img
            className="h-[50px] md:h-auto object-cover w-[50px]"
            src="images/img_image505_6.png"
            alt="image505_Seven"
          />
        </div>
        <div className="flex flex-col items-center justify-end pt-[130px] w-[98%] md:w-full">
          <Button
            className="cursor-pointer font-inter font-medium min-w-[520px] sm:min-w-full text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.42px]"
            shape="square"
            color="blue_gray_100"
            size="3xl"
            variant="fill"
          >
            {props?.logoutbutton}
          </Button>
        </div>
      </div>
    </>
  );
};

Columnfourhundredninetytwo.defaultProps = {
  fourhundredninetytwo: "사용자님 환영합니다",
  x: "X",
  fourhundredninetythree: "내 프로필",
  fourhundredninetyfour: "좋아요 누른 동화",
  fourhundredninetyfive: "최근 본 동화",
  fourhundredninetysix: "팔로우한 작가의 동화",
  fourhundredninetyseven: "1:1 문의 내역",
  fourhundredninetyeight: "공지사항",
  fourhundredninetynine: "고객센터",
  fivehundred: "계정정보",
  logoutbutton: "로그아웃",
};

export default Columnfourhundredninetytwo;
