/** @type {import('tailwindcss').Config} */

import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#0F2641",
        secondary: "#00B4C2",
        tertiary: "#009ED0",
        quaternary: "#88C2C8",
        white: "#FFFFFF",
      },
      // Only families with a @font-face declared in styles.css. Exposing
      // utilities for fonts that are never loaded silently renders text in the
      // fallback with no warning.
      fontFamily: {
        "montserrat-medium": ["Montserrat Medium", "sans-serif"],
        "montserrat-bold": ["Montserrat Bold", "sans-serif"],
      },
      keyframes: {
        "fade-in-right": {
          "0%": {
            "-webkit-transform": "translateX(50px)",
            transform: "translateX(50px)",
            opacity: "0",
          },
          "100%": {
            "-webkit-transform": "translateX(0)",
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in-right":
          "fade-in-right 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      },
    },
  },
  plugins: [typography, aspectRatio],
};
