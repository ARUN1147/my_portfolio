/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#f8fafc',
          dark: '#0a0b1e',
        },
        card: {
          light: '#ffffff',
          dark: '#161b22',
        },
        accent: {
          primary: '#6366f1', // Indigo
          secondary: '#8b5cf6', // Violet
          success: '#10b981', // Emerald
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        }
      }
    },
  },
  plugins: [],
}
