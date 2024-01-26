/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkpurple': '#635FC7',
        'lightpurple': '#A8A4FF',
        'black1': '#000112',
        'black2': '#20212C',
        'black3': '#2B2C37',
        'greyblack': '#3E3F4E',
        'mediumgrey': '#828FA3',
        'greywhite1': '#E4EBFA',
        'greywhite2': '#F4F7FD',
        'white': '#FFFFFF',
        'red': '#EA5555',
        'lightred': '#FF9898',
        'turk': '#49C4E5'
      },
    },
  },
  plugins: [],
}
