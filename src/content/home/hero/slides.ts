import { Slide } from "@interfaces/interfaces";

export const slides: Slide[] = [
  {
    id: 1,
    title: "Disfruta cuidándote",
    subtitle: "Conoce nuestros productos y tips para llevar una vida saludable.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&h=800",
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
    image: "https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&w=1200&h=800",
    ctaPrimary: {
      text: "Mente en Balance",
      url: "/mente-en-balance"
    },
  },
];
