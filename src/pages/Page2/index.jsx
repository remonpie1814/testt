import React from "react";

import { Img, List, Text } from "components";
import Columnonehundredthirty from "components/Columnonehundredthirty";
import Columnonehundredthirtyone from "components/Columnonehundredthirtyone";
import Columnonehundredtwentynine from "components/Columnonehundredtwentynine";
import Columntype from "components/Columntype";
import FrameTwoHeader from "components/FrameTwoHeader";

const Page2 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[219px] items-center justify-start mx-auto pb-[338px] w-full">
        <FrameTwoHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <div className="flex sm:flex-col flex-row md:gap-10 gap-[184px] items-center justify-center max-w-[1180px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-[174px]">
            <div className="flex flex-col gap-1 items-center justify-start w-auto">
              <Img
                className="h-[120px] md:h-auto object-cover w-[120px]"
                src="images/img__120x120.png"
                alt="OneHundredTwentySeven"
              />
              <Text
                className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[-0.42px] w-[63px]"
                size="txtInterMedium22"
              >
                내 계정
              </Text>
              <Text
                className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl tracking-[-0.42px] w-[150px]"
                size="txtInterMedium22"
              >
                test@test.com
              </Text>
            </div>
          </div>
          <List
            className="flex flex-col gap-[61px] items-start w-auto"
            orientation="vertical"
          >
            <Columntype className="border border-black-900 border-solid flex flex-col items-center justify-start my-0 p-2 rounded-[16px] w-full" />
            <Columnonehundredtwentynine className="border border-black-900 border-solid flex flex-col items-center justify-start my-0 p-2 rounded-[16px] w-full" />
            <Columnonehundredthirty className="border border-black-900 border-solid flex flex-col items-center justify-start my-0 p-2 rounded-[16px] w-full" />
            <Columnonehundredthirtyone className="border border-black-900 border-solid flex flex-col items-center justify-start my-0 p-2 rounded-[16px] w-full" />
          </List>
        </div>
      </div>
    </>
  );
};

export default Page2;
