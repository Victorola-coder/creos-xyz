/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        creos: '#F7CB9C',
        primary: '#012B1D',
      },
      fontFamily: {
        sat: ['Satoshi', 'sans-serif'],
        jar: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
