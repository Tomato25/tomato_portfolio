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
        "primary": 'white',
        "green":"#003D2B",
        "red" : "#A8001E",
        "lightGreen" : "#ADE6B9"
      },
      backgroundImage: {
        bg1: "url('../public/Images/backgroundGreen.png')",
        bg2: "url('../public/Images/contactBg.png')",

    },
    fontFamily: {
      notosans:["var(--font-notosans)"]
    },

    textShadow: {
      sm: '0 1px 2px var(--tw-shadow-color)',
      DEFAULT: '0 2px 4px var(--tw-shadow-color)',
      lg: '0 8px 16px var(--tw-shadow-color)',
    },


    height:{
      900:"90vh",
      800:"80vh",
      700:"70vh",
      600:"60vh",
      500:"50vh",
      450:"45vh",
      400:"40vh",
      100:"10vh",

    },
    width:{
      900:"90vw",
      600:"60vw",
      500:"50vw",
      400:"40vw",
      100:"10vw",

    },
    boxShadowColor:{
      "green":"163deg 100% 3%"
    },

    boxShadow:{
      "medium": ["0.2px 0.4px 0.5px hsl(var(--shadow-color) / 0.48)",
                  "1.2px 2px 2.6px -1.2px hsl(var(--shadow-color) / 0.48)",
                   "4.5px 7.7px 10px -2.5px hsl(var(--shadow-color) / 0.48)"],

      "large": [ "1.6px 1.6px 1.2px -6px rgba(0, 0, 0, 0.015)",
        "3.4px 3.4px 2.7px -6px rgba(0, 0, 0, 0.022)",
       " 5.8px 5.8px 4.6px -6px rgba(0, 0, 0, 0.027)",
        "8.7px 8.7px 6.9px -6px rgba(0, 0, 0, 0.031)",
        "12.5px 12.5px 10px -6px rgba(0, 0, 0, 0.035)",
        "17.7px 17.7px 14.2px -6px rgba(0, 0, 0, 0.039)",
        "25.1px 25.1px 20.1px -6px rgba(0, 0, 0, 0.043)",
        "36.5px 36.5px 29.2px -6px rgba(0, 0, 0, 0.048)",
        "56.3px 56.3px 45px -6px rgba(0, 0, 0, 0.055)",
        "100px 100px 80px -6px rgba(0, 0, 0, 0.07)" ] 
    }

  },
},
  plugins:[require("daisyui"),
]
}
