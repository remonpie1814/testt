import React from "react";

import { Button, Img, List, Text } from "components";
import Page29Column from "components/Page29Column";
import Page29Columnspeakerfilledau from "components/Page29Columnspeakerfilledau";
import Page29Columntwo from "components/Page29Columntwo";
import Page30Columnfiftynine from "components/Page30Columnfiftynine";

const Page30 = () => {
  const page30ColumnfiftyninePropList = [
    {},
    {},
    {},
    {},
    {},
    { username: "멍멍" },
  ];
  const page29ColumntwoPropList = [
    {},
    { languagetext: "댓글댓글" },
    { languagetext: "댓글댓글" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto shadow-bs w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1180px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-center px-4 w-auto">
              <Img
                className="h-[51px] md:h-auto object-cover w-[170px]"
                src="images/img_.png"
                alt="FortyTwo"
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
        <Page29Column className="flex flex-col items-center justify-start w-full" />
        <div className="flex flex-col gap-[22px] h-[1705px] md:h-auto items-center justify-start max-w-[1182px] mx-auto md:px-5 py-5 w-full">
          <Page29Columnspeakerfilledau className="flex flex-col items-center justify-start w-full" />
          <div className="flex md:flex-col flex-row gap-[45px] items-center justify-start w-full">
            <div className="bg-yellow-100 border border-amber-A100 border-solid flex flex-row gap-2.5 h-[60px] md:h-auto items-center justify-center py-2.5 rounded-[5px] w-[300px]">
              <Img
                className="h-8 md:h-auto object-cover w-8"
                src="images/img_videoplay31.png"
                alt="videoplayThirtyOne"
              />
              <Text
                className="text-base text-center text-gray-900_01 tracking-[-0.18px] w-auto"
                size="txtInterSemiBold16"
              >
                책 읽기
              </Text>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col h-[60px] md:h-auto items-center justify-start w-full">
              <div className="flex flex-col h-[60px] md:h-auto items-center justify-center w-[300px]">
                <Button
                  className="border border-gray-200 border-solid cursor-pointer font-medium min-w-[300px] text-base text-center tracking-[-0.18px]"
                  shape="round"
                  color="gray_100"
                  size="xl"
                  variant="fill"
                >
                  내 목소리로 녹음하기
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-[211px] md:h-auto items-center justify-start w-full">
            <Text
              className="text-base text-gray-900 tracking-[-0.30px] w-full"
              size="txtInterMedium16"
            >
              이 동화를 녹음한 사람
            </Text>
            <div className="flex md:flex-col flex-row gap-8 items-center justify-start px-[3px] py-5 w-full">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 w-[72%] md:w-full"
                orientation="horizontal"
              >
                {page30ColumnfiftyninePropList.map((props, index) => (
                  <React.Fragment key={`Page30Columnfiftynine${index}`}>
                    <Page30Columnfiftynine
                      className="flex flex-col gap-3 items-center justify-start w-auto"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
              <Page30Columnfiftynine
                className="flex flex-col gap-3 items-center justify-start w-auto"
                backgroundimage="images/img__gray_900.svg"
              />
              <Page30Columnfiftynine
                className="flex flex-col gap-3 items-center justify-start w-auto"
                userimage="images/img_image607_114x114.png"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start p-[11px] w-full">
            <div className="bg-yellow-100 flex sm:flex-col flex-row gap-[30px] items-start justify-start sm:px-5 px-[30px] py-[13px] rounded-[10px] w-auto sm:w-full">
              <div className="flex flex-col h-[134px] md:h-auto items-center justify-start">
                <div className="flex flex-col gap-[7px] items-center justify-start w-auto">
                  <Img
                    className="h-[49px] md:h-auto object-cover w-10 sm:w-full"
                    src="images/img__49x40.png"
                    alt="SixtyTwo"
                  />
                  <Text
                    className="leading-[150.00%] text-base text-center text-gray-900 tracking-[-0.18px]"
                    size="txtInterMedium16Gray900"
                  >
                    <span className="text-gray-900 font-inter font-medium">
                      <>
                        유익해요
                        <br />
                      </>
                    </span>
                    <span className="text-gray-900 font-inter font-medium">
                      1
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[7px] items-center justify-start w-auto">
                <Img
                  className="h-[49px] md:h-auto object-cover w-10 sm:w-full"
                  src="images/img__3.png"
                  alt="SixtyThree"
                />
                <Text
                  className="leading-[150.00%] text-base text-center text-gray-900 tracking-[-0.18px]"
                  size="txtInterMedium16Gray900"
                >
                  <span className="text-gray-900 font-inter font-medium">
                    <>
                      재미있어요
                      <br />
                    </>
                  </span>
                  <span className="text-gray-900 font-inter font-medium">
                    1
                  </span>
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-[30px] grid grid-cols-2 w-[47%] sm:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-[7px] h-[134px] md:h-auto items-center justify-start w-auto">
                  <Img
                    className="h-[49px] md:h-auto object-cover w-10 sm:w-full"
                    src="images/img__4.png"
                    alt="SixtyFour"
                  />
                  <Text
                    className="leading-[150.00%] text-base text-center text-gray-900 tracking-[-0.18px]"
                    size="txtInterMedium16Gray900"
                  >
                    <span className="text-gray-900 font-inter font-medium">
                      <>
                        슬퍼요
                        <br />
                      </>
                    </span>
                    <span className="text-gray-900 font-inter font-medium">
                      1
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col gap-[7px] h-[134px] md:h-auto items-center justify-start w-auto">
                  <Img
                    className="h-[49px] md:h-auto object-cover w-10 sm:w-full"
                    src="images/img__5.png"
                    alt="SixtyFive"
                  />
                  <Text
                    className="leading-[150.00%] text-base text-center text-gray-900 tracking-[-0.18px]"
                    size="txtInterMedium16Gray900"
                  >
                    <span className="text-gray-900 font-inter font-medium">
                      <>
                        화나요
                        <br />
                      </>
                    </span>
                    <span className="text-gray-900 font-inter font-medium">
                      4
                    </span>
                  </Text>
                </div>
              </List>
            </div>
          </div>
          <div className="bg-gray-100_01 flex flex-col gap-5 h-[536px] md:h-auto items-center justify-start sm:px-5 px-[35px] py-5 w-full">
            <Text
              className="text-base text-gray-900 tracking-[-0.30px] w-full"
              size="txtInterBold16"
            >
              댓글 3
            </Text>
            <List
              className="flex flex-col gap-5 items-center w-full"
              orientation="vertical"
            >
              {page29ColumntwoPropList.map((props, index) => (
                <React.Fragment key={`Page29Columntwo${index}`}>
                  <Page29Columntwo
                    className="border-b border-blue_gray-100_01 border-solid flex flex-1 flex-col gap-[7px] h-[142px] md:h-auto items-center justify-start w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
          </div>
          <div className="flex md:flex-col flex-row gap-5 items-start justify-between w-full">
            <div className="border border-blue_gray-100_01 border-solid flex flex-1 flex-col h-[135px] md:h-auto items-start justify-start max-w-[1067px] p-2.5 rounded-[3px] w-full">
              <Text
                className="text-base text-blue_gray-100_01 tracking-[-0.18px] w-auto"
                size="txtInterMedium16Bluegray10001"
              >
                댓글 입력
              </Text>
            </div>
            <div className="bg-amber-A100 flex flex-col items-center justify-center p-8 sm:px-5 rounded-[5px]">
              <Text
                className="my-[25px] text-base text-black-900 tracking-[-0.18px]"
                size="txtInterMedium16Black900"
              >
                등록
              </Text>
            </div>
          </div>
          <div className="bg-amber-A100 flex flex-col items-center justify-end pt-4 px-4 rounded-[5px] w-[30%] md:w-full">
            <div className="flex flex-row gap-[3px] items-start justify-start w-auto">
              <Img
                className="h-5 md:h-auto object-cover w-6"
                src="images/img_arrow1.png"
                alt="arrowOne"
              />
              <Text
                className="text-base text-black-900 text-center tracking-[-0.18px] w-auto"
                size="txtInterMedium16Black900"
              >
                맨 위로
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page30;
