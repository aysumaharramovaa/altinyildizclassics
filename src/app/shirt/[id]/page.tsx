"use client";

import React from "react";
import { shirts } from "@/app/shirt/data";
import { Rate } from "antd";
import Header from "@/components/Header&Footer/Header";
import { useParams } from "next/navigation";

type Shirt = {
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
  shirt: Shirt;
};

const ProductCard: React.FC<ProductCardProps> = ({ shirt }) => {
  const images = [
    shirt.image,
    shirt.image1,
    shirt.image2,
    shirt.image3,
  ].filter(Boolean);

  return (
    <>
      <Header />

      <div className="flex max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden h-full">
        <div className="w-1/2 p-4 grid grid-cols-2 gap-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`shirt-${index}`}
              className="w-full h-180 object-cover rounded"
            />
          ))}
        </div>

        <div className="w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-center">
              {shirt.title}
            </h2>
            <p className="text-gray-600 mb-1 text-center">Elbise</p>
            <p className="text-gray-500 mb-4 text-center">ET3024200071LAC</p>

            <div className="flex items-center gap-2 mb-4">
              <Rate allowHalf disabled defaultValue={shirt.ratingCount / 10} />
              <span className="text-gray-600">
                {shirt.ratingCount} Değerlendirme
              </span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-bold text-black">
                {shirt.price.toLocaleString("tr-TR", {
                  style: "currency",
                  currency: "TRY",
                })}
              </span>
              {shirt.oldPrice && (
                <span className="line-through text-gray-400">
                  {shirt.oldPrice.toLocaleString("tr-TR", {
                    style: "currency",
                    currency: "TRY",
                  })}
                </span>
              )}
            </div>

            <p className="text-green-600 font-semibold mb-4">Sepette Az Öde</p>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Beden Seçin</label>
              <select className="border border-gray-300 rounded px-3 py-2 w-full">
                <option>Bedenimi Bul</option>
                {[38, 40, 42, 44, 46, 48, 50, 52, 54].map((size) => (
                  <option key={size}>{size}N</option>
                ))}
              </select>
            </div>

            <button className="bg-black text-white py-3 rounded w-full hover:bg-gray-800 transition">
              Sepete Ekle
            </button>
          </div>

          <div className="mt-6 text-gray-500 text-sm border-t pt-4">
            <p>
              Beden Kılavuzu, kumaş və yıkama talimatları burada gösterilebilir.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Page() {
  const params = useParams();
  const id = Number(params?.id);

  const shirt = shirts.find((p) => p.id === id);

  if (!shirt) {
    return <div className="text-center text-red-500 mt-10">Ürün bulunamadı.</div>;
  }

  return <ProductCard shirt={shirt} />;
}
