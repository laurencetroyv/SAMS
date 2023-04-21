/** @type {import('tailwindcss').Config} */
const colors = require("./src/infrastructure/themes/colors.js");
module.exports = {
  content: ["./App.js", "./src/components/*.jsx", "./src/features/**/*.jsx"],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
