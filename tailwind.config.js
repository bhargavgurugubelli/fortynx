// import flowbite from "flowbite-react/tailwind";

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
//   darkMode: 'class',
//   theme: {
//     fontFamily: {
//       sans: ['"Anonymous Pro"', 'monospace'],
//     },
//   },
//   plugins: [flowbite.plugin()],
// };

import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  darkMode: 'class',
  theme: {
    fontFamily: {
      // normal body font: system-ui sans-serif
      sans: [
        'ui-sans-serif', 'system-ui', 
        '-apple-system', 'BlinkMacSystemFont', 
        '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 
        'Arial', '"Noto Sans"', 'sans-serif',
        '"Apple Color Emoji"', '"Segoe UI Emoji"', 
        '"Segoe UI Symbol"', '"Noto Color Emoji"',
      ],
      // header font: monospace Anonymous Pro
      header: ['"Anonymous Pro"', 'monospace'],
    },
  },
  plugins: [flowbite.plugin()],
};
