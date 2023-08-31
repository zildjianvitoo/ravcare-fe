/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-ravcare": "#0067ff",
        "yellow-ravcare": "#feb60d",
        "purple-ravcare": "#9771ff",
        "iris-blue-ravcare": "#01b5c5",
        "heading-color-ravcare": "#181a1e",
        "text-color-ravcare": "#4e545f",
      },
      boxShadow: {
        "panel-shadow": "rgba(17,12,46,0.15) 0px 48px 100px 0px",
      },
    },
  },
  plugins: [],
};
