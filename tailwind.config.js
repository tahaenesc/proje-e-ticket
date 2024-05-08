/* @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",

    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        // dark colors
        grey1: "#eeeeee",
        grey2: "#464646",
        grey3: "#adadad",
        grey4: "#494949",
        grey5: "##dbdbdb",
        grey6: "#C5C5C5",
        // white
        white: "#fff",
        // Blue colors
        lightBlue: "#00affe",
        darkBlue: "#536FFC",
        transparent: "transparent",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
