import { FC, useState } from 'react';
import { Link } from "react-router-dom";

import { social } from "@content/navigation/navigation.json";

import { FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon } from "@assets/icons";

interface Product {
  id: string;
  name: string;
  weight: string;
  image: string;
  url: string;
  ingredients: string;
}

interface ProductHeaderProps {
  products: Product[];
  onProductChange: (product: Product) => void;
}

const iconComponents = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YouTubeIcon,
  tiktok: TikTokIcon,
}

export const NutritionalHeader: FC<ProductHeaderProps> = ({ products, onProductChange }) => {
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const [otherProducts, setOtherProducts] = useState(products.slice(1, 5));

  const handleProductClick = (clickedProduct: Product) => {
    setActiveProduct(clickedProduct);
    setOtherProducts(prevProducts => [
      ...prevProducts.filter(p => p.id !== clickedProduct.id),
      activeProduct
    ]);
    onProductChange(clickedProduct);
  };

  return (
    <header className="bg-gradient-to-r from-[#40BFB4] to-[#2A9D8F] py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Active Product */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="transition-transform duration-300 hover:scale-105">
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                className="w-full h-80 max-w-44 object-contain rounded-lg"
              />
            </div>
            <div className="text-white text-center md:text-left">
              <h1 className="text-2xl font-montserrat-bold w-full max-w-60">{activeProduct.name}</h1>
              <p className="text-xl font-montserrat-regular">{activeProduct.weight}</p>
            </div>
          </div>

          {/* Product Navigation */}
          <div className="flex flex-wrap justify-center gap-4">
            {otherProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => handleProductClick(product)}
                className="relative p-2 rounded-lg transition-all hover:bg-white/10"
                title={product.name}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-28 h-28 object-contain"
                />
              </button>
            ))}
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <span className="text-white font-medium">Síguenos:</span>
            <div className="flex gap-4">
              {
                social.map((item) => {
                  const IconComponent = iconComponents[item.icon as keyof typeof iconComponents];
                  return (
                    <Link key={item.name} to={item.path} target="_blank"
                          className="hover:text-white hover:transform hover:scale-110 transition-transform duration-200">
                      <img src={IconComponent} alt={item.name} title={item.name} className="w-6 h-6"/>
                    </Link>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
