"use client";

import React, { useState } from "react";
import { productsshirts } from "@/app/shirt/products";
import { Rate } from "antd";
import Header from "@/components/Header&Footer/Header";
import { useCart } from "@/components/Header&Footer/CartContext";
import Navigation from "@/components/Header&Footer/Navigation";

type Product = {
  title: string;
  price: number;
  oldPrice?: number | null;
  image: string;
  image1?: string;
  image2?: string;
  image3?: string;
  ratingCount: number;
  id: number;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const images = [
    product.image,
    product.image1,
    product.image2,
    product.image3,
  ].filter(Boolean);
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      },
      quantity
    );
  };

  return (
    <>
      <Header />
      <Navigation />
      <div className="flex max-w-6xl mx-auto bg-white rounded-lg overflow-hidden h-full">
        <div className="w-1/2 p-4 grid grid-cols-2 gap-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`product-${index}`}
              className="w-full h-64 object-contain rounded bg-white"
            />
          ))}
        </div>
        <div className="w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-center">
              {product.title}
            </h2>
            <p className="text-gray-600 mb-1 text-center">Gömlek</p>

            <div className="flex items-center gap-2 mb-4 justify-center">
              <Rate
                allowHalf
                disabled
                defaultValue={product.ratingCount / 10}
              />
              <span className="text-gray-600">
                {product.ratingCount} Değerlendirme
              </span>
            </div>

            <div className="flex items-center gap-3 mb-4 justify-center">
              <span className="text-3xl font-bold text-black">
                {product.price.toLocaleString("tr-TR", {
                  style: "currency",
                  currency: "TRY",
                })}
              </span>
              {product.oldPrice && (
                <span className="line-through text-gray-400">
                  {product.oldPrice.toLocaleString("tr-TR", {
                    style: "currency",
                    currency: "TRY",
                  })}
                </span>
              )}
            </div>

            <div className="flex items-center justify-center gap-4 mb-4">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="border px-3 py-1 rounded hover:bg-gray-200"
              >
                -
              </button>
              <span className="text-xl font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="border px-3 py-1 rounded hover:bg-gray-200"
              >
                +
              </button>
            </div>
              <p className="text-green-600 font-semibold mb-4 text-center">Sepette Az Öde</p>
              
            <div className="mb-4">
              <label className="block mb-1 font-medium">Beden Seçin</label>
              <select className="border border-gray-300 rounded px-3 py-2 w-full">
                <option>Bedenimi Bul</option>
                {[38, 40, 42, 44, 46, 48, 50, 52, 54].map((size) => (
                  <option key={size}>{size}N</option>
                ))}
              </select>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-black text-white py-3 rounded w-full hover:bg-gray-800 transition"
            >
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const product = productsshirts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-10 text-red-500 font-semibold text-xl">
        Ürün bulunamadı.
      </div>
    );
  }

  return <ProductCard product={product} />;
}
