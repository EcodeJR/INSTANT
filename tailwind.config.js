/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 10s linear infinite",
        shake: "shake 2s linear infinite",
      },
      keyframes: {
        marquee: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(calc(-100% - 2.5rem))',
          },
        },
        shake: {
          '0%': {
            transform: 'rotate(10deg)',
          },
          '50%': {
            transform: 'rotate(-10deg)',
          },
          '100%': {
            transform: 'rotate(10deg)',
          }
        }
      },
      colors: {
        'primary': '#1a1a1a',
        'secondary': '#ddc676',
        'bg-blur': 'rgba(0, 0, 0, 0.1)',
        'bord-blur': '1px solid rgba(255, 255, 255, 0.3)',
      },
      backgroundImage: {
        'homebg': "url('./assets/homebg.jpg')",
        'aboutbg': "url('./assets/about.jpg')",
        'contactbg': "url('./assets/contact.jpg')",
        'servicesbg': "url('./assets/services.jpg')",
        'gallarybg': "url('./assets/gallary.jpg')",
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