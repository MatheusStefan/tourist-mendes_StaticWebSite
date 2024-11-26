/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      blue: {
        100: "#27A4BD",
      },
      black: {
        100: "#000",
        200: "#1B1B1B",
      },
      white: {
        100: "#fff"
      }
    }
  },
  darkMode: 'class',
  plugins: [],
}

