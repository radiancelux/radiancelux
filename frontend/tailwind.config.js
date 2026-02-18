/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#f59e0b',
          hover: '#d97706',
          muted: 'rgba(245, 158, 11, 0.15)',
        },
        surface: {
          900: '#0f0f0f',
          800: '#171717',
          700: '#262626',
          600: '#404040',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
