import React from "react";

const sizeClasses = {
  txtInterMedium28Gray900: "font-inter font-medium",
  txtInterMedium26Black900: "font-inter font-medium",
  txtInterMedium16Gray900_1: "font-inter font-medium",
  txtInterMedium16Gray400: "font-inter font-medium",
  txtInterMedium16Gray600: "font-inter font-medium",
  txtInterMedium22Gray900_1: "font-inter font-medium",
  txtInterMedium14Deeporange600: "font-inter font-medium",
  txtInterMedium14Gray400: "font-inter font-medium",
  txtInterMedium24: "font-inter font-medium",
  txtInterMedium28Black900: "font-inter font-medium",
  txtInterMedium22: "font-inter font-medium",
  txtInterMedium28: "font-inter font-medium",
  txtInterBold24: "font-bold font-inter",
  txtInterMedium26: "font-inter font-medium",
  txtInterMedium16RedA700: "font-inter font-medium",
  txtInterMedium22Gray900: "font-inter font-medium",
  txtInterMedium22Black900: "font-inter font-medium",
  txtInterMedium24Gray900: "font-inter font-medium",
  txtInterMedium16Bluegray40001: "font-inter font-medium",
  txtInterRegular28: "font-inter font-normal",
  txtInterBold14: "font-bold font-inter",
  txtInterMedium12: "font-inter font-medium",
  txtInterBold16: "font-bold font-inter",
  txtInterMedium16Bluegray10001: "font-inter font-medium",
  txtInterMedium16: "font-inter font-medium",
  txtInterBold16Black900: "font-bold font-inter",
  txtInterMedium14: "font-inter font-medium",
  txtInterMedium14GreenA700: "font-inter font-medium",
  txtInterMedium15: "font-inter font-medium",
  txtInterMedium24WhiteA700: "font-inter font-medium",
  txtInterMedium14Black900: "font-inter font-medium",
  txtInterMedium14Gray900_1: "font-inter font-medium",
  txtInterMedium20: "font-inter font-medium",
  txtInterBold16Bluegray10001: "font-bold font-inter",
  txtInterMedium16Bluegray900: "font-inter font-medium",
  txtInterRegular16: "font-inter font-normal",
  txtInterMedium16RedA700_1: "font-inter font-medium",
  txtInterMedium12Black900: "font-inter font-medium",
  txtInterMedium16Gray400_1: "font-inter font-medium",
  txtInterMedium16WhiteA700: "font-inter font-medium",
  txtInterMedium24Gray900_1: "font-inter font-medium",
  txtInterLight16: "font-inter font-light",
  txtInterMedium12Gray500: "font-inter font-medium",
  txtInterMedium16Black900: "font-inter font-medium",
  txtInterMedium14Gray700: "font-inter font-medium",
  txtInterMedium22Gray600: "font-inter font-medium",
  txtInterMedium14Gray900: "font-inter font-medium",
  txtInterMedium16Gray900: "font-inter font-medium",
  txtInterMedium22Black900_1: "font-inter font-medium",
  txtInterMedium14Green50001: "font-inter font-medium",
  txtInterMedium14Bluegray900cc: "font-inter font-medium",
  txtInterMedium22Orange400: "font-inter font-medium",
  txtInterMedium32: "font-inter font-medium",
  txtInterMedium36: "font-inter font-medium",
  txtInterMedium16Gray40003: "font-inter font-medium",
  txtInterExtraBold22: "font-extrabold font-inter",
  txtInterMedium16Bluegray400: "font-inter font-medium",
  txtInterMedium14Green500: "font-inter font-medium",
  txtInterMedium26Bluegray400: "font-inter font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
