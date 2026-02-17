/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      colors: {
        sea: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b9dfff',
          300: '#7cc4ff',
          400: '#36a5ff',
          500: '#0c84f0',
          600: '#0066cc',
          700: '#0052a5',
          800: '#004688',
          900: '#003a70',
          950: '#00254a',
        },
        sand: {
          50: '#fdf8f0',
          100: '#f9edd8',
          200: '#f2d9b0',
          300: '#e9bf7e',
          400: '#e0a34e',
          500: '#d88d2e',
          600: '#c47424',
          700: '#a35a1f',
          800: '#854920',
          900: '#6d3d1e',
        },
        olive: {
          50: '#f6f7f0',
          100: '#e9ecdb',
          200: '#d4daba',
          300: '#b7c291',
          400: '#9caa6e',
          500: '#7f8f51',
          600: '#63713e',
          700: '#4c5833',
          800: '#3f472c',
          900: '#363d28',
        },
      },
    },
  },
  plugins: [],
}
