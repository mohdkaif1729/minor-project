/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fromLeftToCenter: 'fromLeftToCenter 1s ease-in-out 1'
      },
      keyframes: {
        fromLeftToCenter: {
          '0%': {
            transform: 'translate(-250%)'
          },
          '100%': {
            transform: 'translate(0%)'
          }
        }
      }
    },
  },
  plugins: [],
}