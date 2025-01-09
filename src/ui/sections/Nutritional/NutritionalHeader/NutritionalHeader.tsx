import { FC, useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { social } from "@content/navigation/navigation.json";

import { FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon } from "@assets/icons";

import { Product, ProductHeaderProps} from "@interfaces/interfaces";

const iconComponents: Record<string,
  | typeof FacebookIcon
  | typeof InstagramIcon
  | typeof YouTubeIcon
  | typeof TikTokIcon
> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YouTubeIcon,
  tiktok: TikTokIcon,
}

export const NutritionalHeader: FC<ProductHeaderProps> = ({ products, onProductChange, activeProduct }) => {
  const navigate = useNavigate();
  const [otherProducts, setOtherProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Calculamos los otros productos, excluyendo el producto activo.
    const remainingProducts = products.filter(product => product.id !== activeProduct.id);
    setOtherProducts(remainingProducts.slice(0, 4));  // Limitamos a 4 productos
  }, [activeProduct, products]); // Dependencias: recalculamos cuando activeProduct o products cambian

  const handleProductClick = (clickedProduct: Product) => {
    // Establecemos el producto activo y actualizamos los otros productos
    const remainingProducts = products.filter(product => product.id !== clickedProduct.id);
    setOtherProducts(remainingProducts.slice(0, 4));  // Limitamos a 4 productos

    onProductChange(clickedProduct);  // Llamamos a la función de cambio de producto

    // Navegamos a la nueva URL
    navigate(clickedProduct.url);
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
