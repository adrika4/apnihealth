/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nature: {
          sage: '#9EBA9C',
          peach: '#F7C5A8',
          cream: '#FAF6ED',
          moss: '#4A6B46',
          gold: '#E8D293',
          lavender: '#C4B5D6',
          coral: '#E78077',
          surface: '#FDFBF7',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'blob-spin': 'blobSpin 20s infinite linear',
        'pulse-slow': 'pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'subtle-rise': 'subtleRise 0.4s ease-in-out forwards',
        'fade-in-slow': 'fadeIn 1.2s ease-in-out forwards',
        'fade-in-fast': 'fadeIn 0.6s ease-in-out forwards',
        'drift-in': 'driftIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        blobSpin: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '33%': { transform: 'rotate(120deg) scale(1.1)' },
          '66%': { transform: 'rotate(240deg) scale(0.9)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.7', transform: 'scale(1.05)' },
        },
        subtleRise: {
          '0%': { transform: 'translateY(0)', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' },
          '100%': { transform: 'translateY(-4px)', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        driftIn: {
          '0%': { opacity: '0', transform: 'translateY(40px) translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0) translateX(0)' },
        }
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        'blob': '40% 60% 70% 30% / 40% 50% 60% 50%',
        'blob2': '60% 40% 30% 70% / 60% 30% 70% 40%',
      }
    },
  },
  plugins: [],
}
