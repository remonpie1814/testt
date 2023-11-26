import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[5px]", square: "rounded-none" };
const variants = {
  fill: {
    yellow_200_b2: "bg-yellow-200_b2 text-black-900",
    orange_100_b2: "bg-orange-100_b2 text-black-900",
    black_900_60: "bg-black-900_60",
    blue_gray_50_02: "bg-blue_gray-50_02 text-black-900",
    yellow_200: "bg-yellow-200",
    blue_gray_100_01: "bg-blue_gray-100_01 text-black-900",
    amber_200: "bg-amber-200",
    gray_600: "bg-gray-600",
    gray_300: "bg-gray-300 text-black-900",
    blue_gray_100: "bg-blue_gray-100 text-black-900",
    amber_A100: "bg-amber-A100 text-black-900",
  },
  outline: {
    amber_A100: "border-amber-A100 border-b-[5px] border-solid text-black-900",
  },
};
const sizes = {
  xs: "p-2",
  sm: "p-[11px]",
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
    "yellow_200_b2",
    "orange_100_b2",
    "black_900_60",
    "blue_gray_50_02",
    "yellow_200",
    "blue_gray_100_01",
    "amber_200",
    "gray_600",
    "gray_300",
    "blue_gray_100",
    "amber_A100",
  ]),
};

export { Button };
