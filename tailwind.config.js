/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        pas: {
          forest:  '#0D472F',
          leaf:    '#298246',
          lime:    '#A3E34C',
        },
      },
    },
  },
  plugins: [],
}

