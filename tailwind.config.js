/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        prim: ["Magnat Head", "sans-serif"],
        sec: ["Magnat Text", "sans-serif"],
      },
      colors: {
        cover: "#161616",
        prim: "#414141",
        sec: "#343434",
        third: "#1F1F1F",
      },
    },
  },
  plugins: [],
};
