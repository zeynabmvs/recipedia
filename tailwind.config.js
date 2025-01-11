/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: "true",
    },
    extend: {
      boxShadow: {
        'card': '0px 4px 30px 0px rgba(0, 0, 0, 0.05)',
      },
      colors: {
        primary: {
          DEFAULT: "#F39D1A",
          2: '#F79F1A',
        },
        text: {
          // 1: "#000",
          // 2: '#7F7D7D',
        },
        // white: "#F3F3F3",
        secondary: "#046E1B",
      }
    },
  },
  plugins: [],
};
