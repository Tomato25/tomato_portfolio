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
        "green":"#003D2B",
        "red" : "#A8001E",
        "lightGreen" : "#ADE6B9"
      },
      backgroundImage: {
        bg1: "url('../public/Images/backgroundGreen.png')",
    },
    fontFamily: {
      notosans:["var(--font-notosans)"]
    },
    height:{
      90:"90vh",
      10:"10vh",
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
  plugins: [],
}
