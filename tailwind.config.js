/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    // "./src/page/index.html",

  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
      unique: ["Protest Guerrilla", 'sans-serif'],
    },
    extend: {
      colors: {

      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
