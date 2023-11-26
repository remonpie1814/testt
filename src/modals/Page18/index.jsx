import React from "react";
import { default as ModalProvider } from "react-modal";

import { Text } from "components";

const Page18Modal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[35%]"
      overlayClassName="bg-black-900_75 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-end p-[178px] md:px-5 w-full">
          <Text
            className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl"
            size="txtInterMedium22Black900_1"
          >
            삭제하시겠습니까?
          </Text>
        </div>
      </div>
    </ModalProvider>
  );
};

export default Page18Modal;
