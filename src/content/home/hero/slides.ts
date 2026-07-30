import { Slide } from "@interfaces/interfaces";

export const slides: Slide[] = [
  {
    id: 1,
    image: "/assets/images/desidete-productos.webp",
    alt: "Desídete y disfruta cuidándote. Línea de productos San Rafael Balance®: salchicha de pavo, pechuga de pavo receta tradicional y pechuga de pavo receta original.",
    ctaPrimary: {
      text: "Conoce más recetas",
      url: "/recetas",
    },
  },
  {
    id: 2,
    image: "/assets/images/desidete-cuidados.webp",
    alt: "Desídete y disfruta cuidándote. Una mujer sentada en una terraza rodeada de plantas disfruta un bocado de pechuga de pavo San Rafael Balance®.",
    ctaPrimary: {
      text: "Descúbre el Balance",
      url: "https://www.youtube.com/@VidaEnBalanceMX",
      isExternal: true,
    },
  },
  {
    id: 3,
    image: "/assets/images/desidete-receta.webp",
    alt: "Desídete y disfruta cuidándote. Botana de salchicha de pavo San Rafael Balance® con calabacita y aceitunas, acompañada de totopos y agua de limón.",
    ctaPrimary: {
      text: "Recetas",
      url: "https://www.instagram.com/sanrafaelbalance",
      isExternal: true,
    },
  },
];
