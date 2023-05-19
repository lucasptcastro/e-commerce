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
      responsive: { max: "761px" },
    },
    colors: {
      textColor: "black",
      headerBg: "white",
      textBlue: "#3b82f6",
      colorBlueHover: "#3b99f6",
      bodyBg: "#fbfaff",
      secundaryBodyBg: "#efefef",

      white: "#fff",
      blue: "#1fb6ff",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      principalCard: "rgba(59, 130, 246, 0.8)",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
