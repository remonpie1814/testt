import React from "react";

const sizeClasses = {
  txtInterMedium26Black900: "font-inter font-medium",
  txtInterMedium16Gray900_1: "font-inter font-medium",
  txtInterMedium16Gray400: "font-inter font-medium",
  txtInterMedium16Gray600: "font-inter font-medium",
  txtInterMedium16WhiteA700: "font-inter font-medium",
  txtInterRegular64: "font-inter font-normal",
  txtInterMedium14Gray400: "font-inter font-medium",
  txtInterMedium24: "font-inter font-medium",
  txtInterMedium22: "font-inter font-medium",
  txtInterBold22: "font-bold font-inter",
  txtInterMedium26: "font-inter font-medium",
  txtInterMedium24Gray900_1: "font-inter font-medium",
  txtInterLight16: "font-inter font-light",
  txtInterMedium22Gray900: "font-inter font-medium",
  txtInterBold20: "font-bold font-inter",
  txtInterMedium16Black900: "font-inter font-medium",
  txtInterMedium15Gray900: "font-inter font-medium",
  txtInterMedium22Black900: "font-inter font-medium",
  txtInterMedium14Gray900: "font-inter font-medium",
  txtInterMedium16Gray900: "font-inter font-medium",
  txtInterMedium24Gray900: "font-inter font-medium",
  txtInterMedium24Gray600: "font-inter font-medium",
  txtInterRegular24: "font-inter font-normal",
  txtInterMedium16GreenA700: "font-inter font-medium",
  txtInterMedium20Black900: "font-inter font-medium",
  txtInterMedium12: "font-inter font-medium",
  txtInterMedium35: "font-inter font-medium",
  txtInterMedium32: "font-inter font-medium",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium14: "font-inter font-medium",
  txtInterMedium36: "font-inter font-medium",
  txtInterMedium15: "font-inter font-medium",
  txtInterMedium16Gray40001: "font-inter font-medium",
  txtInterMedium24WhiteA700: "font-inter font-medium",
  txtInterMedium14Gray900_1: "font-inter font-medium",
  txtInterMedium20: "font-inter font-medium",
  txtInterMedium24Orange400: "font-inter font-medium",
  txtInterMedium16Bluegray400: "font-inter font-medium",
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
