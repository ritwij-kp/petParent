/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports ={
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primaryBrown':'#3f2305',
      'lund':'#f2ead3',
      'darkCream':'#dfd7bf',
    }
  },
  plugins: [],
}

