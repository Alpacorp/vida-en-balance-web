/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';
import headlessUi from '@headlessui/tailwindcss';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: "#4C50A2",
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
        "slide-in-bottom": {
          "0%": {
            "-webkit-transform": "translateY(1000px)",
            transform: "translateY(1000px)",
            opacity: "0",
          },
          "100%": {
            "-webkit-transform": "translateY(0)",
            transform: "translateY(0)",
            opacity: "1",
          }
        }
      },
      animation: {
        "slide-in-bottom": "slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
    },
  },
  plugins: [
    typography,
    aspectRatio,
    headlessUi,
  ],
};
