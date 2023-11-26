import React from "react";

import { Text } from "components";

const Rowonehundredtwentythree = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.22px] w-auto"
          size="txtInterMedium22Black900_1"
        >
          {props?.userid}
        </Text>
        <Text
          className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.22px] w-auto"
          size="txtInterMedium22Black900_1"
        >
          {props?.username}
        </Text>
        <Text
          className="text-[22px] text-black-900 sm:text-lg md:text-xl tracking-[-0.22px] w-[119px]"
          size="txtInterMedium22Black900_1"
        >
          {props?.userdate}
        </Text>
      </div>
    </>
  );
};

Rowonehundredtwentythree.defaultProps = {
  userid: "123",
  username: "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ...",
  userdate: "2023. 11. 17",
};

export default Rowonehundredtwentythree;
