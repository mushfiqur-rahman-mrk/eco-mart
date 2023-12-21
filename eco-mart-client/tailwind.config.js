/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ['"Poppins"', "sans-serif"],
    },
    extend: {
      colors: {
        'primary': '#00B207',
        'hard-primary':'#2C742F',
        'soft-primary':'#84D187',
        'danger':'#FF8A00',
        'warning':'#FF8A00',
        'text':'#808080',
        'black':'#1A1A1A'
      },
    },
  },
  plugins: [],
};
