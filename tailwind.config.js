/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        primary: 'hsl(var(--primary))',
        accent: 'hsl(var(--accent))',
        neutral: {
          DEFAULT: 'hsl(var(--neutral))',
          dark: 'hsl(var(--neutral-dark))',
        },
      },
    },
    fontFamily: {
      base: ['League Spartan', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      xs: '469px',
      sm: '640px',
      md: '960px',
      lg: '1280px',
      xl: '1440px',
    },
    backgroundImage: {
      'header-desktop': "url('/images/bg-header-desktop.svg')",
      'header-mobile': "url('/images/bg-header-mobile.svg')",
    },
    dropShadow: {
      DEFAULT: '0px 5px 8px hsl(var(--shadow) / 20%)',
    },
  },
  plugins: [],
};
