/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-in-out forwards",
      },
      screens: {
        md: "800px",
        lg: "1200px",
        xl: "1400px",
      },
    },
  },
  plugins: [],
};
