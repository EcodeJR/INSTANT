/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1a1a1a',
        'secondary': '#979013',
      },
      backgroundImage: {
        'homebg': "url('./assets/homebg.jpg')",
        'camp': "url('./assets/camp.jpg')",
        'boats': "url('./assets/boats.jpg')",
        'october': "url('./assets/october.jpg')",
        'wedding': "url('./assets/wedding.jpg')",
      }
    },
  },
  plugins: [],
}