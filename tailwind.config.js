/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff5622",
        secondary: "#212565",
        customcolor: {
          100: "#259855",
          500: "#850797",
          800: "#123485",
        },
      },
      fontFamily: {
        custom: ["LWSFont", "Arial", "sans"],
      },
    },
  },
  plugins: [],
};
