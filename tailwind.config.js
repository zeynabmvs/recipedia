/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      'display-1': ['clamp(2.8rem, 2.5rem + 1vw, 4rem)', '1.2'],
      'display-2': ['clamp(2.5rem, 2rem + 1vw, 4rem)', '1.1'],
      'display-3': ['clamp(2rem, 1.5rem + 1vw, 3.5rem)', '1.4'],
      btn: ['clamp(1rem, 0.8rem + 0.5vw, 1.25rem)', '1.5'],
      'body-lg': ['clamp(1.125rem, 0.9rem + 0.5vw, 1.375rem)', '1.6'],
      'body-base': ['clamp(0.875rem, 0.7rem + 0.5vw, 1rem)', '1.4'],
      'body-sm': ['clamp(0.75rem, 0.65rem + 0.3vw, 0.875rem)', '1.4'],
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
