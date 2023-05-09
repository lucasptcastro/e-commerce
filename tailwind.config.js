/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        showRight: {
          "100%": { width: 0 },
        },
      },
      animation: {
        showRight: "showRight 1s ease forwards;",
      },
    },
    screens: {
      phones: { min: "320px", max: "480px" },
    },
  },
  plugins: [],
};
