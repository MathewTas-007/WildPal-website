/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./*.html"],
  theme: {
    extend: {
      colors: {
        blue: "#1E88E5",
        green: "#2E7D32",
        brown: "#8D6E63",
        gold: "#FFB300",
      },
    },
  },
  plugins: [],
};