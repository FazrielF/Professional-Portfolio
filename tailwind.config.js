/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Sora'", "sans-serif"],
        mono: ["'DM Mono'", "'Courier New'", "monospace"],
      },
      colors: {
        cream: "#ECD5BC",
        slate: "#758A93",
        terra: "#C66E52",
        dark: "#000000",
        light: "#FFFFFF",
      },
      boxShadow: {
        neo: "4px 4px 0px 0px #000000",
        "neo-sm": "3px 3px 0px 0px #000000",
        "neo-lg": "6px 6px 0px 0px #000000",
        "neo-xl": "8px 8px 0px 0px #000000",
        "neo-hover": "2px 2px 0px 0px #000000",
        "neo-terra": "4px 4px 0px 0px #C66E52",
      },
    },
  },
  plugins: [],
};
