/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryColor": " #E275FF",
        "BgPrimaryColor": " #b751d3",
        "secondaryColor": " #0F101E",
        "BgSecondaryColor": " #1e1f2f",

        "facebookColor": " #3b5998",
        "twitterColor": " #00acee",
        "linkedinColor": " #1976d2",
        "youtubeColor": " #c4302b",
        "skypeColor": " #00aff0",
      },
      boxShadow: {
        '3xl': '0px 10px 50px 0px rgba(0, 0, 0, 0.15) '
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

