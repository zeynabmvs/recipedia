/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: "true",
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F39D1A",
          2: '#F79F1A',
        },
        text: {
          1: "#000",
          2: '#7F7D7D',
        },
        white: "#F3F3F3",
        secondary: "#FE5E54",
      }
    },
  },
  plugins: [],
};
