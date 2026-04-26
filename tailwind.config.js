/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f59e0b',
        slate: {
          900: '#0f172a',
        }
      },
    },
  },
  plugins: [],
}

