import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Product, NutritionalHeaderProps } from "@interfaces/interfaces";

export const NutritionalHeader: FC<NutritionalHeaderProps> = ({
  products,
  onProductChange,
  activeProduct,
}) => {
  const navigate = useNavigate();
  const [otherProducts, setOtherProducts] = useState<Product[]>([]);

  useEffect(() => {
    const remainingProducts = products.filter(
      (product) => product.id !== activeProduct.id,
    );
    setOtherProducts(remainingProducts.slice(0, 4));
  }, [activeProduct, products]);

  const handleProductClick = (clickedProduct: Product) => {
    const remainingProducts = products.filter(
      (product) => product.id !== clickedProduct.id,
    );
    setOtherProducts(remainingProducts.slice(0, 4));
    onProductChange(clickedProduct);
    navigate(clickedProduct.url as string);
  };

  const gradientStyle = {
    background: `linear-gradient(to right, ${activeProduct.gradient.to}, ${activeProduct.gradient.from})`,
    transition: "background 0.6s ease",
  };

  return (
    <header className="py-8 mt-20" style={gradientStyle}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Active Product */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="transition-transform duration-300 hover:scale-105">
              <img
                src={activeProduct.image}
                alt={activeProduct.name}
                className="w-full h-80 max-w-48 object-contain"
                height="320"
                width="192"
              />
            </div>
            <div className="text-white text-center md:text-left">
              <h1 className="text-2xl font-montserrat-bold w-full max-w-60">
                {activeProduct.name}
              </h1>
              <p className="text-xl font-montserrat-medium">
                {activeProduct.weight}
              </p>
            </div>
          </div>

          {/* Product Navigation */}
          <div className="flex flex-wrap justify-center gap-3">
            {otherProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => handleProductClick(product)}
                className="flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200 hover:scale-105 hover:bg-white/20 hover:ring-2 hover:ring-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full max-h-24 max-w-28 object-contain"
                  height="96"
                  width="112"
                />
                <span className="text-white text-xs font-montserrat-medium text-center w-28 leading-tight line-clamp-2">
                  {product.name}
                </span>
              </button>
            ))}
          </div>

        </div>
      </div>
    </header>
  );
};
