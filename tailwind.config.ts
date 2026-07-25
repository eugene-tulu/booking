/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: "380px",
        "w-400": "400px",
        "w-590": "590px",
        "w-768": "768px",
        "w-1170": "1170px",
        "w-1400": "1400px",
        "w-1496": "1496px",
      },
      flex: {
        full: "0 0 100%",
      },
      fontFamily: {
        BalooTamma: ["BalooTamma", "sans-serif"],
        Baloo: ["Baloo", "cursive"],
      },
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
        emeraldPrimary: "var(--emeraldPrimary)",
        sageAccent: "var(--sageAccent)",
        deepEmerald: "var(--deepEmerald)",
        softSage: "var(--softSage)",
        darkCharcoal: "var(--darkCharcoal)",
        emeraldGradientFrom: "var(--emeraldGradientFrom)",
        emeraldGradientTo: "var(--emeraldGradientTo)",
        whiteGradientFrom: "var(--whiteGradientFrom)",
        whiteGradientTo: "var(--whiteGradientTo)",
        primaryEmerald: "var(--primaryEmerald)",
        secondaryEmerald: "var(--secondaryEmerald)",
        sageText: "var(--sageText)",
        navbarText: "var(--navbarText)",
        navbarHover: "var(--navbarHover)",
        buttonBackground: "var(--buttonBackground)",
        buttonText: "var(--buttonText)",
        locationText: "var(--locationText)",
        emeraldButtonBorder: "var(--emeraldButtonBorder)",
        secondaryButtonBorder: "var(--secondaryButtonBorder)",
        appointmentButtonBorder: "var(--appointmentButtonBorder)",
        contactButtonBorder: "var(--contactButtonBorder)",
        contactButtonBackground: "var(--contactButtonBackground)",
        offWhiteText: "var(--offWhiteText)",
        lightSectionText: "var(--lightSectionText)",
        darkSectionText: "var(--darkSectionText)",
        greenButtonBackground: "var(--greenButtonBackground)",
        greenButtonText: "var(--greenButtonText)",
        greenNavbarText: "var(--greenNavbarText)",
        primaryButtonBorder: "var(--primaryButtonBorder)",
        peach: "var(--peach)",
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
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
