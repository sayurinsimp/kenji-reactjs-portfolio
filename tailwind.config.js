/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Jost", "sans-serif"],
    },

    extend: {
      // Colors used in the project
      colors: {
        primary: "#A590ED",
        background: "#C6A8E4",
        cardbg: "#9295E4",
        white: "#FBFBFB",

        navbg: "#4247C9",

        overlayBg: "rgba(0,0,0,70)",
      },
    },
  },
  plugins: [],
};
