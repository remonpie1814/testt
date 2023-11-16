import React from "react";

const sizeClasses = {
  txtInterMedium26Black900: "font-inter font-medium",
  txtInterRegular64: "font-inter font-normal",
  txtInterMedium24: "font-inter font-medium",
  txtInterMedium35: "font-inter font-medium",
  txtInterMedium24Black900: "font-inter font-medium",
  txtInterMedium22: "font-inter font-medium",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium26: "font-inter font-medium",
  txtInterMedium15: "font-inter font-medium",
  txtInterMedium22Bluegray400: "font-inter font-medium",
  txtInterMedium24WhiteA700: "font-inter font-medium",
  txtInterMedium16Black900: "font-inter font-medium",
  txtInterMedium15Gray900: "font-inter font-medium",
  txtInterMedium24Gray900: "font-inter font-medium",
  txtInterRegular24: "font-inter font-normal",
  txtInterMedium16GreenA700: "font-inter font-medium",
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
