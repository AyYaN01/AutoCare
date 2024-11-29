/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#08041D',
        secondary: '#FF4040'
        
      },
      fontFamily: {
        sfregular: ["SF-Regular", "sans-serif"],
        sfsemibold: ["SF-SemiBold", "sans-serif"],
        sfbold: ["SF-Bold", "sans-serif"]
      }
    },
    
  },
  plugins: [],
}
