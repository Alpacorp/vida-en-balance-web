/** @type {import('tailwindcss').Config} */

import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";
import headlessUi from "@headlessui/tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: "#4C50A2",
        main: "#0F2641",
        secondary: "#00B4C2",
        tertiary: "#009ED0",
        quaternary: "#88C2C8",
        white: "#FFFFFF",
      },
      fontFamily: {
        "montserrat-black": ["Montserrat Black", "sans-serif"],
        "montserrat-black-italic": ["Montserrat BlackItalic", "sans-serif"],
        "montserrat-bold": ["Montserrat Bold", "sans-serif"],
        "montserrat-bold-italic": ["Montserrat BoldItalic", "sans-serif"],
        "montserrat-extra-bold": ["Montserrat ExtraBold", "sans-serif"],
        "montserrat-extra-bold-italic": [
          "Montserrat ExtraBoldItalic",
          "sans-serif",
        ],
        "montserrat-extra-light": ["Montserrat ExtraLight", "sans-serif"],
        "montserrat-extra-light-italic": [
          "Montserrat ExtraLightItalic",
          "sans-serif",
        ],
        "montserrat-italic": ["Montserrat Italic", "sans-serif"],
        "montserrat-light": ["Montserrat Light", "sans-serif"],
        "montserrat-light-italic": ["Montserrat LightItalic", "sans-serif"],
        "montserrat-medium": ["Montserrat Medium", "sans-serif"],
        "montserrat-medium-italic": ["Montserrat MediumItalic", "sans-serif"],
        "montserrat-regular": ["Montserrat Regular", "sans-serif"],
        "montserrat-semiBold": ["Montserrat SemiBold", "sans-serif"],
        "montserrat-thin": ["Montserrat Thin", "sans-serif"],
        "montserrat-thin-italic": ["Montserrat ThinItalic", "sans-serif"],
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
  plugins: [typography, aspectRatio, headlessUi],
};
