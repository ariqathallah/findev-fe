/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        "blue-base": "#99B2F3",
        "gray-base": "#F3F3F3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
