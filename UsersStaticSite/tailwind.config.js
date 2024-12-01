/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#27A4BD",
      white: {
        100: "#fff"
      },
      black: {
        100: "#000",
        200: "#1B1B1B"
      },
      secondary: "#BF1A1A",
    }
  },
  darkMode: 'class',
  plugins: [],
}

