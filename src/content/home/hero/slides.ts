import { Slide } from "@interfaces/interfaces";

export const slides: Slide[] = [
  {
    id: 1,
    title: "Disfruta cuidándote",
    subtitle: "Conoce nuestros productos y tips para llevar una vida saludable.",
    image: "/assets/images/disfruta-cuidandote.webp",
    ctaPrimary: {
      text: "Tips Balance",
      url: "/tips-balance"
    },
    ctaSecondary: {
      text: "Recetas",
      url: "/recetas"
    }
  },
  {
    id: 2,
    title: "Family Size",
    subtitle: "Más productos para toda la familia.",
    image: "/assets/images/family-size.webp",
    ctaPrimary: {
      text: "Mente en Balance",
      url: "/mente-en-balance"
    },
  },
];
