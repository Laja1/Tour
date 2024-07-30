/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primaryRegular: ['Regular', 'san-seriff'],
        primaryMedium: ['medium'],
        primaryThin: ['thin']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}