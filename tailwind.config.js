/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      purple: {
        DEFAULT: "#8F48FF",
        50: "#FFFFFF",
        100: "#F3EBFF",
        200: "#DAC2FF",
        300: "#C19AFF",
        400: "#A871FF",
        500: "#8F48FF",
        600: "#6D10FF",
        700: "#5300D7",
        800: "#3E009F",
        900: "#280067",
      },
      green: {
        DEFAULT: "#00FF9F",
        50: "#B8FFE4",
        100: "#A3FFDC",
        200: "#7AFFCD",
        300: "#52FFBE",
        400: "#29FFAE",
        500: "#00FF9F",
        600: "#00C77C",
        700: "#008F59",
        800: "#005736",
        900: "#001F13",
      },
      red: {
        DEFAULT: "#E82868",
        50: "#FACEDC",
        100: "#F8BBD0",
        200: "#F497B6",
        300: "#F0729C",
        400: "#EC4D82",
        500: "#E82868",
        600: "#C3154F",
        700: "#900F3A",
        800: "#5E0A26",
        900: "#2B0511",
      },
      pink: {
        DEFAULT: "#EC00FF",
        50: "#FAB8FF",
        100: "#F8A3FF",
        200: "#F57AFF",
        300: "#F252FF",
        400: "#EF29FF",
        500: "#EC00FF",
        600: "#B800C7",
        700: "#84008F",
        800: "#500057",
        900: "#1C001F",
      },
    },
  },
  plugins: [],
};