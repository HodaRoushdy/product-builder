/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,tsx,jsx}",
            "./components/**/*.{js,ts,tsx,jsx}"
],
  theme: {
    extend: {
      container:{
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      }
    },
  },
  plugins: [],
}

