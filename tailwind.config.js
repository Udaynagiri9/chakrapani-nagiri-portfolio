/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#080808',
          secondary: '#111111',
          card: '#161616',
          elevated: '#1f1f1f',
        },
        accent: {
          red: '#C1121F',
          highlight: '#E63946',
          darkRed: '#780000',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B8B8B8',
          muted: '#808080',
        }
      },
      fontFamily: {
        helvetica: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'system-ui', 'sans-serif'],
        telugu: ['"Noto Sans Telugu"', '"Helvetica Neue"', 'Helvetica', 'sans-serif'],
        cinematic: ['"Cinzel"', 'serif'],
        serifDisplay: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'radial-vignette': 'radial-gradient(circle at center, transparent 0%, #080808 90%)',
        'red-spotlight': 'radial-gradient(ellipse at 50% 0%, rgba(193, 18, 31, 0.35) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
