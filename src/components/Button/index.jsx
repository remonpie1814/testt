import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[10px]", square: "rounded-none" };
const variants = {
  fill: {
    deep_orange_100: "bg-deep_orange-100 text-black-900",
    black_900_60: "bg-black-900_60",
    blue_gray_100_01: "bg-blue_gray-100_01 text-black-900",
    blue_gray_100: "bg-blue_gray-100 text-black-900",
    amber_A100: "bg-amber-A100 text-black-900",
    gray_300: "bg-gray-300",
  },
};
const sizes = { xs: "p-1", sm: "p-[11px]", md: "p-[15px]" };

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
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "deep_orange_100",
    "black_900_60",
    "blue_gray_100_01",
    "blue_gray_100",
    "amber_A100",
    "gray_300",
  ]),
};

export { Button };
