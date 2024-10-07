/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bg_anime': 'bg_anime 10s infinite',
      },
      keyframes: {
        'bg_anime': {
          '0%': { backgroundImage: 'url(/hero1_new.jpeg)' },
          '50%': { backgroundImage: 'url(/hero2_new.jpeg)' },
          '100%': { backgroundImage: 'url(/hero3_new.jpeg)' },
        },
      },
    },
  },
  plugins: [],
}

