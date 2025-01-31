/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#42b883",
        secondary: "#35495e",
        darkbg: "#0F172A",
        darkerbg: "#010317",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        herotitle: ["Gasoek One", "sans-serif"],
      },
      outlineOffset: {
        3: "1rem",
      },
      height: {
        section: "calc(100vh - 100px)",
      },
      keyframes: {
        fadeInOut: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(360deg) scale(10)" },
        },
      },
      animation: {
        "fade-in-out": "fadeInOut 5s infinite",
        rotate: "rotate 4s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
