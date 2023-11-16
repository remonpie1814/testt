import React from "react";

import { Img, Text } from "components";

const Page6 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[155px] items-center justify-start mx-auto pb-[441px] shadow-bs w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1180px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-center px-4 w-auto">
              <Img
                className="h-[51px] md:h-auto object-cover w-[170px]"
                src="images/img_.png"
                alt="Sixty"
              />
            </div>
            <div className="flex flex-row gap-2.5 items-start justify-start py-2.5 w-auto">
              <Img
                className="h-12 md:h-auto object-cover w-12"
                src="images/img_bell111.png"
                alt="bell111"
              />
              <Img
                className="h-12 md:h-auto object-cover w-12"
                src="images/img_search111.png"
                alt="search111"
              />
              <Img
                className="h-12 md:h-auto object-cover w-12"
                src="images/img_menu11.png"
                alt="menuEleven"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1180px] mx-auto md:px-5 w-full">
          <Text
            className="leading-[150.00%] sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900 tracking-[-0.66px]"
            size="txtInterMedium35"
          >
            <>
              xxx@xxx.com으로
              <br />
              이메일을 발송했습니다
            </>
          </Text>
          <Text
            className="leading-[150.00%] max-w-[287px] md:max-w-full text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[-0.46px]"
            size="txtInterMedium24"
          >
            이메일로 전송된 링크를 클릭하신 후에 가입한 이메일로 로그인하실 수
            있습니다.
          </Text>
          <div className="relative w-[387px] sm:w-full">
            <div className="h-[49px] m-auto rounded-[3px] w-full"></div>
            <Text
              className="absolute h-max inset-y-[0] my-auto right-[30%] text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[-0.46px] w-[134px]"
              size="txtInterMedium24"
            >
              둘러보러 가기
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page6;
