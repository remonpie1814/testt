import React from "react";

import { Img, Text } from "components";

const Columnfivehundredfour = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start p-[30px] sm:px-5 w-full">
          <Text
            className="mb-0.5 text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[-0.42px]"
            size="txtInterMedium22Gray900_1"
          >
            {props?.recordingtime}
          </Text>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] h-full items-center justify-center py-[7px] w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start p-[5px] w-[14%] md:w-full">
            <div className="bg-gray-300 flex flex-row gap-2.5 items-center justify-center my-2 sm:px-5 px-[30px] py-2.5 rounded-[20px] w-auto">
              <Img
                className="h-[61px] md:h-auto object-cover w-[61px]"
                src="images/img_image889.png"
                alt="image889"
              />
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl w-auto"
                size="txtInterMedium22Gray900_1"
              >
                {props?.effectsound}
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[90px]">
            <Img
              className="h-[90px] md:h-auto object-cover w-[90px]"
              src="images/img_image589_90x90.png"
              alt="image589"
            />
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start p-3 w-[14%] md:w-full">
            <div className="flex flex-row gap-[30px] items-start justify-center my-6 w-auto">
              <div className="flex flex-col items-center justify-center w-auto">
                <Img
                  className="h-10 md:h-auto object-cover w-10"
                  src="images/img_image689_30x30.png"
                  alt="image655"
                />
                <Text
                  className="text-base text-center text-gray-900 w-auto"
                  size="txtInterMedium16"
                >
                  {props?.fivehundredfive}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[-0.42px]"
                  size="txtInterBold22"
                >
                  {props?.recordingprogress}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center w-auto">
                <Img
                  className="h-10 md:h-auto object-cover w-10"
                  src="images/img_image690_30x30.png"
                  alt="image656"
                />
                <Text
                  className="text-base text-center text-gray-900 w-auto"
                  size="txtInterMedium16"
                >
                  {props?.fivehundredsix}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Columnfivehundredfour.defaultProps = {
  recordingtime: "음성 녹음은 한 쪽당 최대 5분까지 할 수 있습니다.",
  effectsound: "효과음 넣기",
  fivehundredfive: "이전",
  recordingprogress: "25 / 30",
  fivehundredsix: "다음",
};

export default Columnfivehundredfour;
