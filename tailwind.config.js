/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-text": "#2C2E55",
        "secondary-text": "#A1A4B8",
        "icon": "#5D5E7C",
        "pokemon-name": "#36385C",
        'not-active': "#D5D7D9",
        'transp': "#F5F6F5",
        'bug': "#A7B723",
        'dark': "#75574C",
        'dragon': "#7037FF",
        'electric': "#F9CF30",
        'fairy': "#E69EAC",
        'fighting': "#C12239",
        'fire': "#F57D31",
        'flying': "#A891EC",
        'ghost': "#70559B",
        'normal': "#AAA67F",
        'grass': "#74CB48",
        'ground': "#DEC16B",
        'ice': "#9AD6DF",
        'poison': "#A43E9E",
        'psychic': "#FB5584",
        'rock': "#B69E31",
        'steel': "#B7B9D0",
        'water': "#6493EB",
      },
      spacing: {
        '75': '75%',
        '184': '184px'
      },
      borderRadius: {
        '4xl': '46px'
      }
    },
  },
  plugins: [],
}

