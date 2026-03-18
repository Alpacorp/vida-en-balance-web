import { Slide } from "@interfaces/interfaces";

export const slides: Slide[] = [
  {
    id: 1,
    title: "Carrera San Rafael Balance",
    subtitle:
      "Descubre cómo mantener tu cuerpo en equilibrio con nuestros productos y consejos para una vida saludable.",
    image: "/assets/" + "images/carrera-balance.webp",
    ctaPrimary: {
      text: "Cuerpo en Balance",
      url: "/cuerpo-en-balance",
    },
  },
  {
    id: 2,
    title: "DeSídete",
    subtitle:
      "Conoce nuestros productos y tips para llevar una vida saludable.",
    image: "/assets/" + "images/desidete-productos.webp",
    ctaPrimary: {
      text: "Tips Balance",
      url: "/tips-balance",
    },
  },
  {
    id: 3,
    title: "DeSídete",
    subtitle: "Cuerpo en Balance, Mente en Balance y Tips Balance.",
    image: "/assets/" + "images/desidete-cuidados.webp",
    ctaPrimary: {
      text: "Mente en Balance",
      url: "/mente-en-balance",
    },
  },
  {
    id: 4,
    title: "DeSídete recetas",
    subtitle:
      "Descubre deliciosas recetas saludables con DeSídete, ideales para mantener tu cuerpo en balance y disfrutar de una alimentación equilibrada.",
    image: "/assets/" + "images/desidete-receta.webp",
    ctaPrimary: {
      text: "Tips Balance",
      url: "/tips-balance",
    },
    ctaSecondary: {
      text: "Recetas",
      url: "/recetas",
    },
  },
];
