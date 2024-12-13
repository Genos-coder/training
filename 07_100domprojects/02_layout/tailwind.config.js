/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.html"],
  theme: {
    extend: {
      animation: {
        "roller": "roller 1s ease-in-out infinite",
      },
      keyframes: {
        "roller": {
          "0%": {
            "transform": "translateX(0) rotate(0deg)",
          },
          "50%": {
            "transform": "translateX(10rem) rotate(180deg)",
          },
          "100%": {
            "transform": "translateX(0) rotate(0deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
