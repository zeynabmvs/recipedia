/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      "display-1": ["clamp(2.8rem, 2.5rem + 1vw, 4rem)", "1.2"],
      "display-2": ["clamp(2.5rem, 2rem + 1vw, 4rem)", "1.1"],
      "display-3": ["clamp(2rem, 1.5rem + 1vw, 3.5rem)", "1.4"],
      btn: ["clamp(1rem, 0.8rem + 0.5vw, 1.25rem)", "1.5"],
      "body-lg": ["clamp(1.125rem, 0.9rem + 0.5vw, 1.375rem)", "1.6"],
      "body-base": ["clamp(0.875rem, 0.7rem + 0.5vw, 1rem)", "1.4"],
      "body-sm": ["clamp(0.75rem, 0.65rem + 0.3vw, 0.875rem)", "1.4"],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      boxShadow: {
        card: "0px 4px 30px 0px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: ["tailwindcss-animate"],
};
