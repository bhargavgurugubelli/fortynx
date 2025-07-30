const flowbitePlugin = require('flowbite/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // for components
    "./node_modules/flowbite/**/*.js", // for plugin
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      fontFamily: {
        // extend is needed here to merge with root fontFamily config
        sans: [
          'ui-sans-serif', 'system-ui', 
          '-apple-system', 'BlinkMacSystemFont', 
          '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 
          'Arial', '"Noto Sans"', 'sans-serif',
          '"Apple Color Emoji"', '"Segoe UI Emoji"', 
          '"Segoe UI Symbol"', '"Noto Color Emoji"',
        ],
        header: ['"Anonymous Pro"', 'monospace'],
      },
    },
  },
  plugins: [flowbitePlugin],
};
