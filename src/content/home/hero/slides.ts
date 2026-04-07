import { Slide } from "@interfaces/interfaces";

export const slides: Slide[] = [
  {
    id: 1,
    image: "/assets/" + "images/carrera-balance.webp",
    ctaPrimary: {
      text: "Inscríbete aquí",
      url: "https://asdeporte.com/evento/carrera-san-rafael-balance--2026-qk6/datos-del-evento",
      external: true,
    },
  },
  {
    id: 2,
    image: "/assets/" + "images/desidete-productos.webp",
    ctaPrimary: {
      text: "Conoce más recetas",
      url: "/recetas",
    },
  },
  {
    id: 3,
    image: "/assets/" + "images/desidete-cuidados.webp",
    ctaPrimary: {
      text: "Descúbre el Balance",
      url: "https://www.youtube.com/@VidaEnBalanceMX",
      external: true,
    },
  },
  {
    id: 4,
    image: "/assets/" + "images/desidete-receta.webp",
    ctaPrimary: {
      text: "Recetas",
      url: "https://www.instagram.com/sanrafaelbalance",
      external: true
    },
  },
];
