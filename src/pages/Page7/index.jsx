import React from "react";

import { Img, Text } from "components";
import FollowColumnlanguage from "components/FollowColumnlanguage";
import FrameTwoHeader from "components/FrameTwoHeader";

const Page7 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[1310px] w-full">
        <FrameTwoHeader className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full" />
        <FollowColumnlanguage className="flex flex-col items-center justify-start outline outline-blue_gray-100 p-2 w-full" />
      </div>
    </>
  );
};

export default Page7;
