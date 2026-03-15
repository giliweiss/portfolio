/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        hero: ['Nunito', 'sans-serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        maroon: '#8B3A3A',
      },
    },
  },
  plugins: [],
} 