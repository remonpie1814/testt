import React from "react";

import { Img, List, Text } from "components";

const Page2 = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter gap-8 items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1180px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-center px-4 w-auto">
              <Img
                className="h-[51px] md:h-auto object-cover w-[170px]"
                src="images/img_.png"
                alt="FortyEight"
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
        <div className="flex flex-col gap-[35px] items-center justify-start max-w-[1180px] mx-auto md:px-5 w-full">
          <div className="flex flex-row md:gap-10 gap-[1000px] items-center justify-center max-w-[1180px] w-full">
            <div className="flex flex-row items-center justify-start w-auto">
              <div className="flex flex-col items-center justify-center w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.46px] w-auto"
                  size="txtInterMedium24Gray900"
                >
                  최신순
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-[42px]">
                <Text
                  className="rotate-[-90deg] md:text-3xl sm:text-[28px] text-[32px] text-gray-900 tracking-[-0.70px] w-[21px]"
                  size="txtInterMedium32"
                >
                  <>&lt;</>
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end w-auto">
              <Img
                className="h-[33px] md:h-auto object-cover w-[35px]"
                src="images/img_image914.png"
                alt="image925"
              />
            </div>
          </div>
          <List
            className="flex flex-col gap-5 items-center p-5 rounded-[5px] w-full"
            orientation="vertical"
          >
            <div className="flex md:flex-1 md:flex-col flex-row gap-8 items-start justify-center w-auto md:w-full">
              <Img
                className="h-[222px] w-[205px]"
                src="images/img__blue_gray_100_222x205.svg"
                alt="FiftyOne"
              />
              <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-[15px] items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <Text
                      className="leading-[150.00%] text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.26px]"
                      size="txtInterMedium24"
                    >
                      <>
                        신데렐라는 어려서 부모님을 발로 차 싸커
                        <br />
                        발로 차 싸커
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                    <Text
                      className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                      size="txtInterMedium16"
                    >
                      10p
                    </Text>
                    <Img
                      className="h-6 md:h-auto object-cover w-[25px]"
                      src="images/img__24x25.png"
                      alt="FiftyThree"
                    />
                  </div>
                  <div className="flex flex-row gap-5 items-start justify-start w-auto">
                    <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                      <Img
                        className="h-6 md:h-auto object-cover w-[25px]"
                        src="images/img__1.png"
                        alt="FiftyFour"
                      />
                      <Text
                        className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                        size="txtInterMedium16Gray900"
                      >
                        5
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                      <Img
                        className="h-6 md:h-auto object-cover w-[25px]"
                        src="images/img__2.png"
                        alt="FiftyFive"
                      />
                      <Text
                        className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                        size="txtInterMedium16Gray900"
                      >
                        5
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[65px]">
                    <Text
                      className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                      size="txtInterMedium16Gray900"
                    >
                      유미엄마
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:pr-5 pr-[25px] w-auto">
                    <Text
                      className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                      size="txtInterMedium16"
                    >
                      2023. 10. 08
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 md:flex-col flex-row gap-8 items-start justify-center w-auto md:w-full">
              <Img
                className="h-[222px] w-[205px]"
                src="images/img__blue_gray_100_222x205.svg"
                alt="FiftySeven"
              />
              <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-[15px] items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <Text
                      className="leading-[150.00%] text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.26px]"
                      size="txtInterMedium24"
                    >
                      <>
                        신데렐라는 어려서 부모님을 발로 차 싸커
                        <br />
                        발로 차 싸커
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                    <Text
                      className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                      size="txtInterMedium16"
                    >
                      10p
                    </Text>
                    <Img
                      className="h-6 md:h-auto object-cover w-[25px]"
                      src="images/img__24x25.png"
                      alt="FiftyNine"
                    />
                  </div>
                  <div className="flex flex-row gap-5 items-start justify-start w-auto">
                    <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                      <Img
                        className="h-6 md:h-auto object-cover w-[25px]"
                        src="images/img__1.png"
                        alt="Sixty"
                      />
                      <Text
                        className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                        size="txtInterMedium16Gray900"
                      >
                        5
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                      <Img
                        className="h-6 md:h-auto object-cover w-[25px]"
                        src="images/img__2.png"
                        alt="SixtyOne"
                      />
                      <Text
                        className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                        size="txtInterMedium16Gray900"
                      >
                        5
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[65px]">
                    <Text
                      className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                      size="txtInterMedium16Gray900"
                    >
                      유미엄마
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:pr-5 pr-[25px] w-auto">
                    <Text
                      className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                      size="txtInterMedium16"
                    >
                      2023. 10. 08
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 md:flex-col flex-row gap-8 items-start justify-center w-auto md:w-full">
              <Img
                className="h-[222px] w-[205px]"
                src="images/img__blue_gray_100_222x205.svg"
                alt="SixtyThree"
              />
              <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-[15px] items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <Text
                      className="leading-[150.00%] text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.26px]"
                      size="txtInterMedium24"
                    >
                      <>
                        신데렐라는 어려서 부모님을 발로 차 싸커
                        <br />
                        발로 차 싸커
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                    <Text
                      className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                      size="txtInterMedium16"
                    >
                      10p
                    </Text>
                    <Img
                      className="h-6 md:h-auto object-cover w-[25px]"
                      src="images/img__24x25.png"
                      alt="SixtyFive"
                    />
                  </div>
                  <div className="flex flex-row gap-5 items-start justify-start w-auto">
                    <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                      <Img
                        className="h-6 md:h-auto object-cover w-[25px]"
                        src="images/img__1.png"
                        alt="SixtySix"
                      />
                      <Text
                        className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                        size="txtInterMedium16Gray900"
                      >
                        5
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                      <Img
                        className="h-6 md:h-auto object-cover w-[25px]"
                        src="images/img__2.png"
                        alt="SixtySeven"
                      />
                      <Text
                        className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                        size="txtInterMedium16Gray900"
                      >
                        5
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[65px]">
                    <Text
                      className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                      size="txtInterMedium16Gray900"
                    >
                      유미엄마
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:pr-5 pr-[25px] w-auto">
                    <Text
                      className="text-base text-gray-900 tracking-[-0.18px] w-auto"
                      size="txtInterMedium16"
                    >
                      2023. 10. 08
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-row gap-8 h-[90px] md:h-auto items-center justify-center pt-[60px] md:px-5 w-auto">
          <div className="h-[39px] rounded-[3px] w-[14%]"></div>
          <Text
            className="text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[-0.46px] w-auto"
            size="txtInterMedium24Gray600"
          >
            2
          </Text>
          <Text
            className="text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[-0.46px] w-auto"
            size="txtInterMedium24Gray600"
          >
            3
          </Text>
          <Text
            className="text-2xl md:text-[22px] text-orange-400 sm:text-xl tracking-[-0.46px] w-auto"
            size="txtInterMedium24Orange400"
          >
            4
          </Text>
          <Text
            className="text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[-0.46px] w-auto"
            size="txtInterMedium24Gray600"
          >
            5
          </Text>
          <Text
            className="text-2xl md:text-[22px] text-gray-600 sm:text-xl tracking-[-0.46px] w-auto"
            size="txtInterMedium24Gray600"
          >
            6
          </Text>
          <div className="h-[39px] rounded-[3px] w-[14%]"></div>
        </div>
      </div>
    </>
  );
};

export default Page2;
