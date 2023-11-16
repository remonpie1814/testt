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
        blue_gray: { 100: "#d9d9d9", 400: "#8e8e8e" },
        red: { A100: "#ff8c8c" },
        gray: { 300: "#e6e6e6", 900: "#1e1e1e" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        amber: { A100: "#ffec8a" },
        green: { A700: "#14ae5c" },
        orange: { 50: "#fff6d6" },
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
