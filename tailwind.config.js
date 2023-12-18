/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      
        Poppin: 'Poppins',
        Ralewey:'Raleway'
        
      },
      colors:{
        primary:'#DA722C',
        secondary:'#6F7DFB'
      }
    },
  },
  plugins: [],
}