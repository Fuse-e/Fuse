/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      xs: "1.2rem",
      sm: "1.4rem",
      md: "1.6rem",
      lg: ["2.2rem", "1.3"],
      "5xl": ["8rem", '1'],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#000212",
        grey: "#858699",
        "white-ao8": "rgba(255, 255, 255, 0.08)",
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
      
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    spacing: {
        0: "0",
        1: "o.4rem",
        2: "o.8rem",
        3: "1.2rem",
        4: "1.6rem",
        5: "2rem",
        6: "2.4rem",
        7: "2.8rem",
        8: "3.2rem",
        9: "3.6rem",
        10: "4rem",
        11: "4.4rem",
        12: "4.8rem",
        13: "5rem",

      },
    backgroundImage: {
      "primary-gradient": "linear-gradient(92.88deg, rgb(69, 94, 181)9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)",
    },
    boxShadow: {
      primary: "rgb(80 63 205 / 50) 0px 1px 40px",
    }
  },
  plugins: [require("tailwindcss-animate")],
}
