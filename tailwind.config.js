/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['"Poppins"', "sans-serif"],
      },
      colors: {
        'green': '#33956D',
        'black': '#3C4347',
        'red': '#F07167',
        'gray': '#E9E9E9',
      }

    },
  },
  plugins: [],
}

