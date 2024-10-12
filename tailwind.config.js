/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        century: ["Century Gothic", "sans-serif"],
        commons: ["TT Commons", "sans-serif"],
      },
      width: {
        128: "42rem",
      },
      height: {
        128: "42rem",
      },
    },
  },
  plugins: [],
};
