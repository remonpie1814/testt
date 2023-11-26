import React from "react";

import { Button, Img, Line, List, Text } from "components";
import FrameTwoColumn from "components/FrameTwoColumn";
import SanseColumntwo from "components/SanseColumntwo";
import SanseHeader from "components/SanseHeader";

const SansePage = () => {
  const sanseColumntwoPropList = [
    {},
    { language: "댓글댓글" },
    { language: "댓글댓글" },
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
                alt="Twenty"
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
        <FrameTwoColumn className="flex flex-col items-center justify-start w-full" />
        <div className="flex flex-col gap-[22px] h-[1779px] md:h-auto items-center justify-start max-w-[1180px] mx-auto md:px-5 py-5 w-full">
          <div className="flex flex-col h-[280px] md:h-auto items-center justify-start max-w-[1180px] w-full">
            <div className="flex md:flex-col flex-row md:gap-[57px] items-start justify-between pt-8 w-full">
              <div className="h-[248px] relative w-[17%] md:w-full">
                <div className="absolute h-[248px] inset-[0] justify-center m-auto w-full">
                  <div className="h-[248px] m-auto w-full">
                    <div className="h-[248px] m-auto w-full">
                      <div className="h-[248px] m-auto w-full">
                        <div className="h-[248px] m-auto w-full">
                          <div className="h-[248px] m-auto w-full">
                            <div className="h-[248px] m-auto w-full">
                              <div className="h-[248px] m-auto w-full">
                                <div className="h-[248px] m-auto w-full">
                                  <div className="h-[248px] m-auto w-full">
                                    <div className="h-[248px] m-auto rounded-md w-full"></div>
                                    <Img
                                      className="absolute h-3.5 left-[35%] top-[40%]"
                                      src="images/img_reply.svg"
                                      alt="vector1295"
                                    />
                                  </div>
                                  <div
                                    className="absolute bg-cover bg-no-repeat flex flex-row h-max inset-y-[0] items-end justify-center left-[31%] my-auto pb-0.5 px-0.5 w-1/4"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group1253.svg')",
                                    }}
                                  >
                                    <div className="flex flex-col ml-3 relative w-[41%]">
                                      <div className="flex flex-col items-center justify-start mx-auto w-full">
                                        <div className="flex flex-col gap-4 items-end justify-start w-full">
                                          <div className="flex flex-row items-start justify-evenly w-[71%] md:w-full">
                                            <Img
                                              className="h-0.5 w-px"
                                              src="images/img_vector1301.svg"
                                              alt="vector1301"
                                            />
                                            <Img
                                              className="h-0.5 w-px"
                                              src="images/img_vector1302.svg"
                                              alt="vector1302"
                                            />
                                            <Img
                                              className="h-px"
                                              src="images/img_vector1303.svg"
                                              alt="vector1303"
                                            />
                                          </div>
                                          <div className="flex flex-row items-start justify-evenly mr-[3px] w-[83%] md:w-full">
                                            <Img
                                              className="h-px"
                                              src="images/img_vector1302.svg"
                                              alt="vector1304"
                                            />
                                            <Img
                                              className="h-0.5"
                                              src="images/img_vector1305.svg"
                                              alt="vector1305"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <Img
                                        className="h-1 mt-[-0.57px] z-[1]"
                                        src="images/img_vector1306.svg"
                                        alt="vector1306"
                                      />
                                    </div>
                                    <div className="flex flex-col items-start justify-start mt-[21px] w-[22%]">
                                      <Img
                                        className="h-px md:ml-[0] ml-[3px]"
                                        src="images/img_vector1303.svg"
                                        alt="vector1343"
                                      />
                                      <Img
                                        className="h-[3px]"
                                        src="images/img_vector1302.svg"
                                        alt="vector1344"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  className="absolute bottom-[40%] h-[26px] right-[15%]"
                                  src="images/img_car.svg"
                                  alt="refresh"
                                />
                              </div>
                              <div className="absolute flex flex-row gap-[18px] items-start justify-between right-[8%] top-[33%] w-[34%]">
                                <Img
                                  className="h-4"
                                  src="images/img_signal.svg"
                                  alt="settings"
                                />
                                <Img
                                  className="h-9 mt-1"
                                  src="images/img_checkmark.svg"
                                  alt="user"
                                />
                              </div>
                            </div>
                            <div
                              className="absolute bg-cover bg-no-repeat flex flex-col h-[11px] items-end justify-start p-[3px] right-[35%] top-[39%] w-[10%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group1255.svg')",
                              }}
                            >
                              <Img
                                className="h-px mb-0.5 mr-0.5 w-px"
                                src="images/img_vector1303.svg"
                                alt="vector1310"
                              />
                            </div>
                          </div>
                          <Img
                            className="absolute h-2 right-[44%] top-[37%]"
                            src="images/img_call.svg"
                            alt="user_One"
                          />
                          <Img
                            className="absolute h-[13px] right-[31%] top-[42%]"
                            src="images/img_fire.svg"
                            alt="television"
                          />
                          <div
                            className="absolute bg-cover bg-no-repeat bottom-[29%] flex flex-col h-[13px] items-start justify-start left-[9%] p-0.5 w-[11%]"
                            style={{
                              backgroundImage:
                                "url('images/img_group1254.svg')",
                            }}
                          >
                            <Img
                              className="h-px my-[3px]"
                              src="images/img_vector1314.svg"
                              alt="vector1314"
                            />
                          </div>
                        </div>
                        <div className="absolute bottom-1/4 flex flex-col justify-start left-[8%] w-[35%]">
                          <div className="flex flex-row items-end justify-end ml-2.5 md:ml-[0] w-[85%] md:w-full">
                            <Img
                              className="h-[7px] mt-[18px]"
                              src="images/img_vector1315.svg"
                              alt="vector1315"
                            />
                            <Img
                              className="h-[9px] ml-[17px] my-[7px]"
                              src="images/img_signal_gray_900.svg"
                              alt="settings_One"
                            />
                            <Img
                              className="h-[13px] mb-1 ml-0.5 mt-[7px]"
                              src="images/img_vector1318.svg"
                              alt="vector1318"
                            />
                            <Img
                              className="h-[25px] ml-1.5"
                              src="images/img_checkmark_gray_900.svg"
                              alt="settings_Two"
                            />
                            <Img
                              className="h-[11px] my-[7px]"
                              src="images/img_vector1320.svg"
                              alt="contrast"
                            />
                          </div>
                          <Img
                            className="h-[3px]"
                            src="images/img_vector1303.svg"
                            alt="vector1316"
                          />
                        </div>
                      </div>
                      <Img
                        className="absolute bottom-[27%] h-2 left-[37%]"
                        src="images/img_vector1321.svg"
                        alt="vector1321"
                      />
                    </div>
                    <div className="absolute bottom-1/4 flex flex-row items-end justify-center left-[35%] w-[14%]">
                      <Img
                        className="h-px mb-1 mt-6"
                        src="images/img_vector1322.svg"
                        alt="vector1322"
                      />
                      <Img
                        className="h-[29px]"
                        src="images/img_car_gray_900.svg"
                        alt="settings_Three"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-[24%] flex flex-col items-start justify-start right-[36%] w-[17%]">
                    <div className="flex flex-col gap-[5px] items-center justify-start md:ml-[0] ml-[17px] w-[44%] md:w-full">
                      <Img
                        className="h-px"
                        src="images/img_vector1302.svg"
                        alt="vector1325"
                      />
                      <Img
                        className="h-px"
                        src="images/img_vector1322.svg"
                        alt="vector1326"
                      />
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-between mt-1 w-[91%] md:w-full">
                      <Img
                        className="h-px"
                        src="images/img_vector1315.svg"
                        alt="vector1324"
                      />
                      <Img
                        className="h-[7px]"
                        src="images/img_play.svg"
                        alt="contrast_One"
                      />
                    </div>
                    <Img
                      className="h-[5px] md:ml-[0] ml-[19px]"
                      src="images/img_vector1315.svg"
                      alt="vector1328"
                    />
                  </div>
                </div>
                <div className="absolute bottom-[23%] flex flex-row items-start justify-center right-[9%] w-[38%]">
                  <div className="flex flex-col justify-start w-[74%]">
                    <div className="flex flex-row items-start justify-end md:ml-[0] ml-[22px] w-[56%] md:w-full">
                      <div className="flex flex-col items-end justify-start mt-[7px] w-[59%]">
                        <Img
                          className="h-2 w-2"
                          src="images/img_question.svg"
                          alt="settings_Four"
                        />
                        <div className="flex flex-col items-start justify-start w-full">
                          <Img
                            className="h-px"
                            src="images/img_vector1331.svg"
                            alt="vector1331"
                          />
                          <Img
                            className="h-[3px] md:ml-[0] ml-[3px]"
                            src="images/img_vector1332.svg"
                            alt="vector1332"
                          />
                        </div>
                      </div>
                      <Line className="bg-gray-900 h-6 w-[5px]" />
                      <Img
                        className="h-0.5 mt-3 w-[3px]"
                        src="images/img_vector1334.svg"
                        alt="vector1334"
                      />
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start mr-[7px] mt-0.5 w-[85%] md:w-full">
                      <Img
                        className="h-0.5"
                        src="images/img_vector1329.svg"
                        alt="vector1329"
                      />
                      <Img
                        className="h-1.5 w-[7px]"
                        src="images/img_eye.svg"
                        alt="eye"
                      />
                    </div>
                  </div>
                  <Img
                    className="h-1.5 ml-1 mt-[11px] w-1.5"
                    src="images/img_vector1336.svg"
                    alt="user_Two"
                  />
                  <Line className="bg-gray-900 h-7 ml-1 w-[3px]" />
                </div>
                <Line className="absolute bg-gray-900 h-[29px] left-[16%] top-[37%] w-[3px]" />
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-16 items-start justify-start left-[12%] p-[7px] top-1/4 w-[26%]"
                  style={{ backgroundImage: "url('images/img_group1252.svg')" }}
                >
                  <Img
                    className="h-[25px] my-[11px]"
                    src="images/img_home.svg"
                    alt="refresh_One"
                  />
                </div>
                <div className="absolute bottom-[45%] flex flex-col items-end justify-start left-[28%] w-[8%]">
                  <Img
                    className="h-0.5"
                    src="images/img_vector1341.svg"
                    alt="vector1341"
                  />
                  <Img
                    className="h-[3px]"
                    src="images/img_vector1341.svg"
                    alt="vector1342"
                  />
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-1 items-start justify-start w-auto md:w-full">
                <div className="flex md:flex-col flex-row gap-1 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.79px] w-auto"
                    size="txtInterMedium36"
                  >
                    토끼와 호랑이
                  </Text>
                  <div className="flex flex-col h-[54px] md:h-auto items-center justify-start max-w-[644px] md:pl-10 sm:pl-5 pl-[620px] pt-3 w-full">
                    <Text
                      className="rotate-[-90deg] text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[-0.46px] w-1.5"
                      size="txtInterMedium24Gray900"
                    >
                      ···
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-base text-gray-400 tracking-[-0.18px] w-[131px]"
                  size="txtInterMedium16Gray400"
                >
                  작성일 2023.10.06
                </Text>
                <div className="flex flex-row gap-[11px] items-center justify-start w-auto">
                  <Img
                    className="h-[31px] md:h-auto object-cover w-[33px]"
                    src="images/img_image804.png"
                    alt="image804"
                  />
                  <a
                    href="https://naver.com"
                    className="font-medium text-base text-gray-600 tracking-[-0.18px] underline w-auto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text>
                      <>가나다라마바사아자차카 &gt;</>
                    </Text>
                  </a>
                </div>
                <SanseHeader className="flex flex-row gap-[27px] items-center justify-start py-2.5 w-auto" />
                <Text
                  className="leading-[150.00%] max-w-[932px] md:max-w-full text-base text-gray-600 tracking-[-0.18px]"
                  size="txtInterMedium16Gray600"
                >
                  책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명책설명
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[21px] h-12 md:h-auto items-start justify-end w-full">
            <div className="bg-amber-A100 flex flex-row gap-2.5 items-start justify-start p-2.5 rounded-[5px] w-auto">
              <Img
                className="h-[25px] md:h-auto object-cover w-[25px]"
                src="images/img_play11.png"
                alt="playEleven"
              />
              <Text
                className="text-base text-black-900 text-center tracking-[-0.18px] w-[46px]"
                size="txtInterMedium16"
              >
                책 읽기
              </Text>
            </div>
            <Button
              className="cursor-pointer font-medium h-12 text-base text-center tracking-[-0.18px] w-[195px]"
              shape="round"
              color="amber_A100"
              size="md"
              variant="fill"
            >
              내 목소리로 녹음하기
            </Button>
          </div>
          <div className="bg-white-A700 gap-[31px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-end md:pl-10 sm:pl-5 pl-[818px] w-full">
            <Button
              className="cursor-pointer flex-1 font-medium min-w-[100px] text-base text-center tracking-[-0.18px] w-full"
              shape="round"
              color="yellow_200_b2"
              size="md"
              variant="fill"
            >
              그림 수정
            </Button>
            <Button
              className="cursor-pointer flex-1 font-medium min-w-[100px] text-base text-center tracking-[-0.18px] w-full"
              shape="round"
              color="orange_100_b2"
              size="md"
              variant="fill"
            >
              녹음 수정
            </Button>
            <Button
              className="cursor-pointer flex-1 font-medium min-w-[100px] text-base text-center tracking-[-0.18px] w-full"
              shape="round"
              color="gray_300"
              size="md"
              variant="fill"
            >
              삭제
            </Button>
          </div>
          <div className="flex flex-col h-[211px] md:h-auto items-center justify-start w-full">
            <Text
              className="text-base text-gray-900 tracking-[-0.30px] w-full"
              size="txtInterMedium16Gray900"
            >
              이 동화를 녹음한 사람
            </Text>
            <div className="flex md:flex-col flex-row gap-[35px] items-center justify-between px-[3px] py-5 w-full">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[38px] grid grid-cols-2 w-[23%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-3 items-center justify-start w-auto">
                  <Img
                    className="h-[114px] md:h-auto object-cover w-[113px] sm:w-full"
                    src="images/img_image804.png"
                    alt="image607"
                  />
                  <Text
                    className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
                    size="txtInterMedium16Gray900_1"
                  >
                    초록이
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-center justify-start w-auto">
                  <Img
                    className="h-[114px] md:h-auto object-cover w-[113px] sm:w-full"
                    src="images/img_image520.png"
                    alt="image520"
                  />
                  <Text
                    className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
                    size="txtInterMedium16Gray900_1"
                  >
                    스파르탄
                  </Text>
                </div>
              </List>
              <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                <div className="h-[114px] relative w-[113px]">
                  <Img
                    className="h-[114px] m-auto object-cover w-[113px]"
                    src="images/img_6.png"
                    alt="Six"
                  />
                  <div className="absolute h-[113px] inset-[0] justify-center m-auto w-28">
                    <div className="h-[113px] m-auto rounded-md w-28"></div>
                    <div className="absolute h-[61px] inset-[0] justify-center m-auto rotate-[-90deg] rounded-[3px] w-[42%]"></div>
                  </div>
                </div>
                <Text
                  className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
                  size="txtInterMedium16Gray900_1"
                >
                  멈뭄미
                </Text>
              </div>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[38px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 w-[62%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-3 items-center justify-start w-auto">
                  <Img
                    className="h-[114px] md:h-auto object-cover w-[113px] sm:w-full"
                    src="images/img_image520.png"
                    alt="image520"
                  />
                  <Text
                    className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
                    size="txtInterMedium16Gray900_1"
                  >
                    스파르탄
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-center justify-start w-auto">
                  <Img
                    className="h-[114px] md:h-auto object-cover w-[113px] sm:w-full"
                    src="images/img_image520.png"
                    alt="image520"
                  />
                  <Text
                    className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
                    size="txtInterMedium16Gray900_1"
                  >
                    스파르탄
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-center justify-start w-auto">
                  <Img
                    className="h-[114px] md:h-auto object-cover w-[113px] sm:w-full"
                    src="images/img_image520.png"
                    alt="image520"
                  />
                  <Text
                    className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
                    size="txtInterMedium16Gray900_1"
                  >
                    스파르탄
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-center justify-start w-auto">
                  <Img
                    className="h-[114px] md:h-auto object-cover w-[113px] sm:w-full"
                    src="images/img_image520.png"
                    alt="image520"
                  />
                  <Text
                    className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
                    size="txtInterMedium16Gray900_1"
                  >
                    스파르탄
                  </Text>
                </div>
                <div className="flex flex-col gap-3 items-center justify-start w-auto">
                  <Img
                    className="h-[114px] md:h-auto object-cover w-[113px] sm:w-full"
                    src="images/img_image520.png"
                    alt="image520"
                  />
                  <Text
                    className="text-base text-center text-gray-900 tracking-[-0.18px] w-auto"
                    size="txtInterMedium16Gray900_1"
                  >
                    스파르탄
                  </Text>
                </div>
              </List>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start p-[11px] w-full">
            <div className="bg-yellow-100 flex sm:flex-col flex-row gap-[30px] items-start justify-start sm:px-5 px-[30px] py-[13px] rounded-[10px] w-auto sm:w-full">
              <div className="flex flex-col h-[134px] md:h-auto items-center justify-start">
                <div className="flex flex-col gap-[7px] items-center justify-start w-auto">
                  <Img
                    className="h-[49px] md:h-auto object-cover w-10 sm:w-full"
                    src="images/img__49x40.png"
                    alt="ThirtyEight"
                  />
                  <Text
                    className="leading-[150.00%] text-base text-center text-gray-900 tracking-[-0.18px]"
                    size="txtInterMedium16Gray900_1"
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
                  alt="ThirtyNine"
                />
                <Text
                  className="leading-[150.00%] text-base text-center text-gray-900 tracking-[-0.18px]"
                  size="txtInterMedium16Gray900_1"
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
                    alt="Forty"
                  />
                  <Text
                    className="leading-[150.00%] text-base text-center text-gray-900 tracking-[-0.18px]"
                    size="txtInterMedium16Gray900_1"
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
                    alt="FortyOne"
                  />
                  <Text
                    className="leading-[150.00%] text-base text-center text-gray-900 tracking-[-0.18px]"
                    size="txtInterMedium16Gray900_1"
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
          <div className="bg-gray-100 flex flex-col gap-5 h-[536px] md:h-auto items-center justify-start sm:px-5 px-[35px] py-5 w-full">
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
              {sanseColumntwoPropList.map((props, index) => (
                <React.Fragment key={`SanseColumntwo${index}`}>
                  <SanseColumntwo
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
          <div className="bg-amber-A100 flex flex-col items-center justify-start p-4 rounded-[5px] w-[30%] md:w-full">
            <div className="flex flex-row gap-[3px] items-start justify-start w-auto">
              <Img
                className="h-6 md:h-auto object-cover w-6"
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

export default SansePage;
