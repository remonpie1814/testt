import React from "react";

import { Button, Img, Text } from "components";
import Footer1 from "components/Footer1";
import FrameTwoHeader from "components/FrameTwoHeader";

const Page11 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto shadow-bs w-auto sm:w-full md:w-full">
        <FrameTwoHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <div className="flex flex-col gap-[50px] md:h-auto items-center justify-start md:px-5 py-[120px] w-[720px] md:w-full">
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
            className="leading-[150.00%] text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[-0.46px]"
            size="txtInterMedium24Gray900_1"
          >
            <>
              이메일로 전송된 링크를 클릭하신 후에
              <br />
              가입한 이메일로 로그인하실 수 있습니다.
            </>
          </Text>
          <Button
            className="border-[5px] border-orange-200 border-solid cursor-pointer font-medium min-w-[400px] sm:min-w-full text-[22px] text-center sm:text-lg md:text-xl tracking-[-0.42px]"
            shape="round"
            color="amber_A100"
            size="md"
            variant="fill"
          >
            메인페이지로
          </Button>
        </div>
        <Footer1 className="bg-blue_gray-50 flex gap-2.5 items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default Page11;
