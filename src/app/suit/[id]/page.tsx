import React from "react";
import { products } from "@/app/products";
import { Rate } from "antd";
import Header from "@/components/Header&Footer/Header";

type Product = {
  title: string;
  price: number;
  oldPrice?: number | null;
  image: string;
  ratingCount: number;
  id: number;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden h-full">
      <div className="w-1/2 bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="w-1/2 p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-center">
            {product.title}
          </h2>
          <p className="text-gray-600 mb-1 text-center">Elbise</p>
          <p className="text-gray-500 mb-4 text-center">ET3024200071LAC</p>

          <div className="flex items-center gap-2 mb-4">
            <Rate allowHalf disabled defaultValue={product.ratingCount / 10} />
            <span className="text-gray-600">
              {product.ratingCount} Değerlendirme
            </span>
          </div>

          <div className="flex items-center gap-3 mb-4">
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

          <p className="text-green-600 font-semibold mb-4">Sepette Az Öde</p>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Beden Seçin</label>
            <select className="border border-gray-300 rounded px-3 py-2 w-full">
              <option>Bedenimi Bul</option>
              <option>38N</option>
              <option>40N</option>
              <option>42N</option>
              <option>44N</option>
              <option>46N</option>
              <option>48N</option>
              <option>50N</option>
              <option>52N</option>
              <option>54N</option>
            </select>
          </div>

          <button className="bg-black text-white py-3 rounded w-full hover:bg-gray-800 transition">
            Sepete Ekle
          </button>
        </div>
        <div className="mt-6 text-gray-500 text-sm border-t pt-4">
          <p>
            Beden Kılavuzu, kumaş ve yıkama talimatları burada gösterilebilir.
          </p>
        </div>
      </div>
    </div>
  );
};
export default function Page({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return <div>Ürün bulunamadı.</div>;
  }

  return <ProductCard product={product} />;
}
