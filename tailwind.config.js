/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '430px',
      ...defaultTheme.screens,
    },
    colors: {
      bgPrimary: "#EDEFF1",
      bgSecondary: "#FFFFFF",
      bgTertiary: "#E1E5E8",
      fontPrimary: "#172033",
      fontSecondary: "#64748B",
      borderPrimary: "#CBD1D6",
      borderSecondary: "#0F766E",
      linkHoverColor: "#0D9488",
      accentPrimary: "#0D9488",
      accentSecondary: "#115E59",
      fontAccent: "#F1F5F4",
    },
  },
  plugins: [],
};

// colors: {
//   "bgPrimary": "#15133c",
//   "bgSecondary": "#181730",
//   "bgTertiary": "#292750",
//   "fontPrimary": "#F1EEE9",
//   "fontSecondary": "#EC994B",
//   "borderPrimary": "#555297",
//   "borderSecondary": "#EC994B",
//   "linkHoverColor": "#a39ef0"
// },