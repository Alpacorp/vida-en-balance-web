import { useState } from 'react';
import {NutritionalDetails} from "@ui/sections/Nutritional/NutritionalDetails/NutritionalDetails.tsx";
import {NutritionalHeader} from "@ui/sections/Nutritional/NutritionalHeader/NutritionalHeader.tsx";
import {NutritionalInfo} from "@ui/sections/Nutritional/NutritionalInfo/NutritionalInfo.tsx";

interface Product {
  id: string;
  name: string;
  weight: string;
  image: string;
  url: string;
  ingredients: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Pechuga de Pavo Escalonada Balance",
    weight: "250 Gramos",
    image: "/placeholder.svg?height=200&width=150",
    url: "#",
    ingredients: "Pechuga de pavo, agua, azúcares añadidos (azucar), saborizantes, cloruro de potasio, fécula, fosfato de sodio, sal yodada, carragenina, carmín."
  },
  {
    id: "2",
    name: "Pechuga de Pavo Rebanadas Delgadas",
    weight: "200 Gramos",
    image: "/placeholder.svg?height=200&width=150",
    url: "#",
    ingredients: "Pechuga de pavo, agua, sal, especias."
  },
  {
    id: "3",
    name: "Salchicha de Pavo",
    weight: "500 Gramos",
    image: "/placeholder.svg?height=200&width=150",
    url: "#",
    ingredients: "Carne de pavo, agua, especias, conservadores naturales."
  },
  {
    id: "4",
    name: "Pechuga de Pavo Rebanadas Sandwich",
    weight: "300 Gramos",
    image: "/placeholder.svg?height=200&width=150",
    url: "#",
    ingredients: "Pechuga de pavo, agua, sal, especias, conservadores naturales."
  },
  {
    id: "5",
    name: "Salchicha de Pechuga de Pavo",
    weight: "250 Gramos",
    image: "/placeholder.svg?height=200&width=150",
    url: "#",
    ingredients: "Pechuga de pavo, agua, especias, conservadores naturales."
  }
];

const nutritionalInfo = [
  { label: "Contenido energético", value: "96", unit: "Kcal" },
  { label: "Energía", value: "406", unit: "Kj" },
  { label: "Grasas totales", value: "1", unit: "g" },
  { label: "de las cuales", value: "----", unit: "----" },
  { label: "Grasa saturada", value: "0.2", unit: "g" },
  { label: "Grasa Trans", value: "0", unit: "mg" },
  { label: "Hidratos de carbono disponibles", value: "4.1", unit: "g" },
  { label: "de las cuales", value: "----", unit: "----" },
  { label: "Azúcares", value: "2", unit: "g" },
  { label: "Azúcares añadidos", value: "2", unit: "g" },
  { label: "Fibra dietética", value: "0", unit: "g" },
  { label: "Sodio", value: "345", unit: "mg" },
  { label: "Contenido energético por envase", value: "240 kcal (1015 kj)", unit: "" },
  { label: "Contenido energético por envase", value: "438 kcal (1851 kj)", unit: "" }
];

export const SteppedTurkeyBreast = () => {
  const [activeProduct, setActiveProduct] = useState<Product>(products[0]);

  const handleProductChange = (newActiveProduct: Product) => {
    setActiveProduct(newActiveProduct);
  };

  return (
    <div className="min-h-screen bg-white">
      <NutritionalHeader
        products={products}
        onProductChange={handleProductChange}
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <NutritionalDetails product={activeProduct} />
          <NutritionalInfo nutritionalInfo={nutritionalInfo} />
        </div>
      </div>
    </div>
  );
}

