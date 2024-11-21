/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",
  
  theme: {
    extend: {
      colors:{
        bghome:"#1F1F1F",
        txtclr:"#353535",
        Bluecor:"#030924",
        Orangecor:"#eb9c23",
        },

      fontFamily: {
        rubik : ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

