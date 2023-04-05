/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans"],
      },
      colors: {
        black: "#000",
        white: "#ffffff",
        lightBlue: "#3EBFFF",
        footerBg: "#92D2C4",
        footerText: "#2C7566",
        yellow: "#FFD101",
      },
    },
  },
  plugins: [],
};
