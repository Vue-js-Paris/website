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
        tertiary: "#FFB05B",
      },
      outlineOffset: {
        3: "1rem",
      },
      height: {
        section: "calc(100vh - 150px)",
      },
      keyframes: {
        fadeInOut: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in-out": "fadeInOut 5s infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
