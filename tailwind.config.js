/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'BioRhyme': ["BioRhyme", "serif"],
        'Poppins': ["Poppins", "sans-serif"],
        'Manrope': ["Manrope", "sans-serif"],
      }
    },
  },
  plugins: [],
};
