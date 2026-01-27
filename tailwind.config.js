/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}", // this will look for Tailwind classes in all JS and JSX files in your src folder
];
export const theme = {
  extend: {
    colors: {
      'royal-azure': {
        DEFAULT: '#2953D7',
        light: '#5476E4',
        lighter: '#8099F0',
        pale: '#D4DDFB',
      },
      'carbon-black': {
        DEFAULT: '#202020',
        light: '#333333',
        dark: '#141414'
      },
      'radioactive-grass': {
        DEFAULT: '#68DF5F',
        light: '#89E682',
        lighter: '#AAEDA5',
        pale: '#DDF8DB',
      },
      'phantom-white': '#FFFFFF',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
};
export const plugins = [];
