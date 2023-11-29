import React from "react";

import { Img } from "components";

const Page23Rowfivehundredtwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2.5 h-[900px] md:h-auto items-center justify-start px-5 w-[540px] sm:w-full">
          <Img
            className="h-[90px] rounded-[5px] w-full"
            src="images/img__white_a700.svg"
            alt="FiveHundredTwo"
          />
          <div className="bg-white-A700 flex sm:flex-col flex-row gap-3 items-center justify-between outline outline-[2px] outline-black-900 px-2.5 py-5 rounded-[5px] w-full">
            <Img
              className="flex-1 h-[95px] w-full"
              src="images/img__gray_400.svg"
              alt="FiveHundredThree"
            />
            <div className="flex flex-col items-center justify-start">
              <Img
                className="h-[102px] md:h-auto object-cover w-full"
                src="images/img_image708.png"
                alt="image708"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col gap-2.5 h-[522px] md:h-auto items-center justify-start px-5 py-[5px] rotate-[-90deg]">
          <Img
            className="h-[38px] w-[41px]"
            src="images/img_thumbsup.svg"
            alt="thumbsup"
          />
          <Img
            className="h-[76px] w-[39px]"
            src="images/img_offer.svg"
            alt="offer"
          />
          <Img
            className="h-[43px] w-[29px]"
            src="images/img_television.svg"
            alt="television"
          />
          <Img
            className="h-[33px] w-[45px]"
            src="images/img_user.svg"
            alt="user"
          />
          <Img
            className="h-[54px] md:h-auto object-cover w-[29px]"
            src="images/img_image754.png"
            alt="image754"
          />
          <Img
            className="h-[54px] md:h-auto object-cover w-[29px]"
            src="images/img_icons8241.png"
            alt="icons8241"
          />
          <Img
            className="h-[54px] md:h-auto object-cover w-[29px]"
            src="images/img_image764.png"
            alt="image764"
          />
          <Img
            className="h-[55px] md:h-auto object-cover w-[30px]"
            src="images/img_image769.png"
            alt="image769"
          />
        </div>
      </div>
    </>
  );
};

Page23Rowfivehundredtwo.defaultProps = {};

export default Page23Rowfivehundredtwo;
