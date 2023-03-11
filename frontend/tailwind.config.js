/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns : {
        'autoVerticalCard' : 'repeat(auto-fit,minmax(280px,1fr))'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
