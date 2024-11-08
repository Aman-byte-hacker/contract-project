/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': "4px 10px 24px 0px #0000001A"
      }
    },
    screens: {
      sm: '640px',  // Small devices
      md: '768px',  // Medium devices
      lg: '1024px', // Large devices
      xl: '1280px',
    },
    colors: {
      lightGreyColor: '#6B6B6B',
      lightBlueColor: "#003FB4",
      white: "#FFFFFF",
    },
  },
  plugins: [],
}