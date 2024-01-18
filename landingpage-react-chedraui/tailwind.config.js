/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: '3e57308',
        customBlue: '#0077c8',
        customGrind: '#f2f3f5',
        customBackground:'#f5f5f5',
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [],
}

