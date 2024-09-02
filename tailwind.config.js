/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'pops': ['Poppins', 'sans-serif'],
      'robo': ['Roboto', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}