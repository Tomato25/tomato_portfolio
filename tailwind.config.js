/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
  ],
  theme: {
    extend: {
      colors:{
        "green":"#004211",
        "red" : "#A8001E"
      },
      backgroundImage: {
        bg1: "url('../public/images/backgroundGreen.png')",
    },
    fontFamily: {
      notosans:["var(--font-notosans)"]
    },
    height:{
      90:"90vh",
      10:"10vh",
    },

  },
},
  plugins: [],
}
