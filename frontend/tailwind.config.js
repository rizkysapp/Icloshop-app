/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rampart: ["Merriweather", "cursive"],
        Alata: ["Alata", "cursive"],
        Cinzel: ["Cinzel", "cursive"],
      },
    },
  },
  plugins: ["tailwind-scrollbar-hide"],
};
