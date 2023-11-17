import React from "react";

import { Img, List, Text } from "components";
import FollowRowtwentyfive from "components/FollowRowtwentyfive";

const FollowPage = () => {
  const followRowtwentyfivePropList = [
    {},
    { followers: "팔로우2" },
    { followers: "콩림이" },
    { followers: "콩솔이" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter gap-10 items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 w-full">
          <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1180px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-center px-4 w-auto">
              <Img
                className="h-[51px] md:h-auto object-cover w-[170px]"
                src="images/img_.png"
                alt="TwentyTwo"
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
        <div className="flex flex-col gap-5 items-center justify-start max-w-[720px] md:px-5 w-full">
          <div className="flex flex-row gap-8 items-start justify-center outline outline-gray-300 py-[5px] w-full">
            <Text
              className="text-2xl md:text-[22px] text-center text-gray-600 sm:text-xl tracking-[-0.46px] w-auto"
              size="txtInterMedium24Gray600"
            >
              팔로워
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[-0.46px] w-auto"
              size="txtInterMedium24Gray900"
            >
              팔로우
            </Text>
          </div>
          <List
            className="flex flex-col gap-5 items-center w-full"
            orientation="vertical"
          >
            {followRowtwentyfivePropList.map((props, index) => (
              <React.Fragment key={`FollowRowtwentyfive${index}`}>
                <FollowRowtwentyfive
                  className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-center my-0 w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
        </div>
      </div>
    </>
  );
};

export default FollowPage;
