/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        creos: '#F7CB9C',
        primary: { DEFAULT: '#012B1D', faded: '#B0BDB9' },
        light: '#D9DFDD',
        brown: '#564737',
        dark: '#222222' 
      },
      fontFamily: {
        sat: ['Satoshi', 'sans-serif'],
        jar: ['Plus Jakarta Sans', 'sans-serif'],
        int: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
