import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

import { Img, Text } from "components";
import Rowthree from "components/Rowthree";

const PageDrawer = (props) => {
  return (
    <Drawer placement="bottom" className="!w-full" {...props}>
      <div>
        <div className="flex flex-col font-inter items-start justify-start max-w-[1920px] mx-auto w-full">
          <div className="bg-orange-50 flex flex-col h-20 md:h-auto items-center justify-center w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[210px] h-[77px] md:h-auto items-center justify-start md:px-5 w-[600px] md:w-full">
              <div className="flex flex-row items-center justify-start w-auto">
                <div className="flex flex-col gap-0.5 items-center justify-center w-auto">
                  <Img
                    className="h-10 md:h-auto object-cover w-10"
                    src="images/img_image933.png"
                    alt="image933"
                  />
                  <Text
                    className="text-base text-center text-gray-900 w-auto"
                    size="txtInterMedium16"
                  >
                    자동 책넘김
                  </Text>
                </div>
                <div className="flex flex-col h-[65px] md:h-auto items-center justify-start w-[67px]">
                  <Img
                    className="h-10 md:h-auto object-cover w-10"
                    src="images/img_image589_81x81.png"
                    alt="image589"
                  />
                  <Text
                    className="text-base text-center text-gray-900 w-auto"
                    size="txtInterMedium16Gray900"
                  >
                    정지
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-auto">
                <Rowthree className="flex flex-row gap-[30px] items-start justify-center w-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default PageDrawer;
