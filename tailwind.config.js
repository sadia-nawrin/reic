/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors :{
        grey: "#353535" ,
        white: "#FEFEFE" ,
        paste: "#CED8D9" ,
        black: "#181818",
        ogrey: "#344356", 
      }
    },
  },
  plugins: [],
}
