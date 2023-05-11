/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
