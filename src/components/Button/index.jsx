import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[5px]", square: "rounded-none" };
const variants = {
  fill: {
    gray_200_01: "bg-gray-200_01 text-black-900",
    black_900_60: "bg-black-900_60",
    blue_gray_50_01: "bg-blue_gray-50_01 text-black-900",
    yellow_200: "bg-yellow-200",
    blue_gray_100_01: "bg-blue_gray-100_01 text-black-900",
    gray_100_01: "bg-gray-100_01 text-black-900",
    gray_600: "bg-gray-600",
    blue_gray_100: "bg-blue_gray-100 text-black-900",
    gray_300: "bg-gray-300",
    amber_A100: "bg-amber-A100 text-black-900",
  },
  outline: {
    amber_A100: "border-amber-A100 border-b-[5px] border-solid text-black-900",
  },
};
const sizes = {
  xs: "p-1.5",
  sm: "p-[9px]",
  md: "p-3.5",
  lg: "p-[17px]",
  xl: "p-5",
  "2xl": "p-[23px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "gray_200_01",
    "black_900_60",
    "blue_gray_50_01",
    "yellow_200",
    "blue_gray_100_01",
    "gray_100_01",
    "gray_600",
    "blue_gray_100",
    "gray_300",
    "amber_A100",
  ]),
};

export { Button };
