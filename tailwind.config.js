/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-ravcare": "#3A8EF6",
        "secondary-ravcare": "#5564f8",
        "yellow-ravcare": "#feb60d",
        "purple-ravcare": "#9771ff",
        "iris-blue-ravcare": "#01b5c5",
        "heading-color-ravcare": "#181a1e",
        "text-color-ravcare": "#6C87AE",
      },
      boxShadow: {
        "panel-shadow": "rgba(17,12,46,0.15) 0px 48px 100px 0px",
      },
    },
    screens: {
      xxs: "390px",
      xs: "480px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
