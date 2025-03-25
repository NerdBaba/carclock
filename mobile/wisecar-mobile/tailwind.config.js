/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        proxima: ['Proxima Nova', 'sans-serif'],
        sans: ['Proxima Nova', 'sans-serif']
      },
      colors: {
        background: '#121212',
        foreground: '#f5f5f5',
        primary: {
          DEFAULT: '#1a1a1a',
          foreground: '#ffffff'
        },
        secondary: {
          DEFAULT: '#00b8a9',
          foreground: '#ffffff'
        },
        accent: {
          DEFAULT: '#ff7e67',
          foreground: '#ffffff'
        },
        muted: {
          DEFAULT: '#1e1e1e',
          foreground: '#a0a0a0'
        },
        card: {
          DEFAULT: '#1a1a1a',
          foreground: '#f5f5f5'
        },
        border: '#2a2a2a',
      },
    },
  },
  plugins: [],
}

