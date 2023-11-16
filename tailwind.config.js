module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          300: "#e6e6e6",
          400: "#b3b3b3",
          600: "#757575",
          900: "#1e1e1e",
          "600_01": "#7e7d7d",
          "400_01": "#c0bfbf",
          "400_02": "#c0c0c0",
        },
        blue_gray: { 100: "#d9d9d9", 400: "#8e8e8e" },
        red: { A100: "#ff8c8c" },
        light_blue: { 50: "#d1ebff" },
        orange: { 50: "#fff6d6", 400: "#ffa629" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        amber: { A100: "#ffec8a" },
        green: { A700: "#14ae5c" },
        white: { A700: "#ffffff" },
        deep_orange: { 100: "#ffc7c2" },
        yellow: { 200: "#ffe8a3" },
      },
      fontFamily: { inter: "Inter" },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
