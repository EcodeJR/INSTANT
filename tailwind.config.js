/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 50s linear infinite",
      },
      keyframes: {
        marquee: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(calc(-100% - 2.5rem))',
          },
        }
      },
      colors: {
        'primary': '#1a1a1a',
        'secondary': '#ddc676',
      },
      backgroundImage: {
        'homebg': "url('./assets/homebg.jpg')",
        'camp': "url('./assets/camp.jpg')",
        'boats': "url('./assets/boats.jpg')",
        'october': "url('./assets/october.jpg')",
        'wedding': "url('./assets/wedding.jpg')",
        'aboutus': "url('./assets/aboutus.jpg')",
        'team1': "url('./assets/team1.jpg')",
        'team2': "url('./assets/team2.jpg')",
        'team3': "url('./assets/team3.jpg')",
        'team4': "url('./assets/team4.jpg')",
        'questions': "url('./assets/questions.jpg')",
      },
    },
  },
  plugins: [],
}