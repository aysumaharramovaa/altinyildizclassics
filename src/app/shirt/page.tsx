"use client";
import React, { useState, useMemo } from "react";
import { products } from "@/app/shirt/products";
import Link from "next/link";
import Header from "@/components/Header&Footer/Header";
import { Rate } from "antd";


const menuItems = [
  "Yeni Sezon", "Giyim", "Tişört", "Her Daim Basic", "Şort",
  "Mayo / Deniz Şortu", "Gömlek", "Pantolon", "Takım Elbise",
  "Kombinli Takım Elbise", "Klasik Takım Elbise", "Nano Takım Elbise",
  "Yelekli Takım Elbise", "Yelekli Takm Elbise", "Sweatshirt",
  "Smokin / Damatlik", "Esofman", "Triko / Kazak", "DIS Giyim", "Polar",
  "IQ Giyim", "Kadin Giyim", "Online Exclusive", "Coklu Paket Urünler",
  "Ayakkabı", "Aksesuar", "Kampanyalar", "AC x Burak ÖZGivit",
  "Koleksiyon", "Mega Outlet", "AC Home",
];



const sortOptions = [
  { value: "0", label: "Editör Sıralaması" },
  { value: "10", label: "Fiyata Göre Artan" },
  { value: "11", label: "Fiyata Göre Azalan" },
  { value: "15", label: "Yeni Ürünler" },
  { value: "20", label: "En Çok Satanlar" },
  { value: "25", label: "En Çok Değerlendirilen" },
];

export default function ProductLayout() {
  const [activeMenu, setActiveMenu] = useState(menuItems[0]);
  const [activeSort, setActiveSort] = useState(sortOptions[0].value);
  const [columns, setColumns] = useState(4);

  const sortedProducts = useMemo(() => {
    switch (activeSort) {
      case "10":
        return [...products].sort((a, b) => a.price - b.price);
      case "11":
        return [...products].sort((a, b) => b.price - a.price);
      case "15":
        return [...products].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case "20":
        return [...products].sort((a, b) => b.salesCount - a.salesCount);
      case "25":
        return [...products].sort((a, b) => b.ratingCount - a.ratingCount);
      default:
        return products;
    }
  }, [activeSort]);

  return (
    <>
      <Header />
      <p className="text-sm pl-5 text-gray-600 mt-1">
        Ana Sayfa / Giyim / Gömlek
      </p>

      <div className="min-h-screen flex font-sans text-gray-800">
        <aside className="w-48 h-screen overflow-y-auto flex flex-col">
          <nav className="flex flex-col mt-4 px-4 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveMenu(item)}
                className={`py-3 px-4 rounded-lg text-left text-black text-sm ${
                  activeMenu === item
                    ? "underline font-semibold"
                    : "hover:underline"
                } transition`}
                type="button"
              >
                {item}
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-5 overflow-auto">
          <div className="px-2 pt-4 flex items-center gap-4">
            <div>
              <label
                htmlFor="sort-select"
                className="block mb-1 text-gray-700 font-semibold text-sm"
              >
                Sıralama
              </label>
              <select
                id="sort-select"
                value={activeSort}
                onChange={(e) => setActiveSort(e.target.value)}
                className="w-40 px-2 py-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                {sortOptions.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2 mt-6">
              {[2, 3, 4].map((num) => (
                <button
                  key={num}
                  onClick={() => setColumns(num)}
                  className={`px-3 py-1 text-sm border rounded ${
                    columns === num
                      ? "bg-black text-white"
                      : "bg-white text-black border-gray-300"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <div
            className={`grid gap-8 mt-6 ${
              columns === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : columns === 3
                ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            }`}
          >
            {sortedProducts.map((product, idx) => {
              const images = [
                product.image,
                product.image1,
                product.image2,
                product.image3,
              ];
              const [selectedImage, setSelectedImage] = useState(0);

              return (
                <Link
                  href={`/suit/${product.id}`}
                  key={`${product.id}-${idx}`}
                  className="block group"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition w-full h-60 relative">
                    <img
                      src={images[selectedImage]}
                      alt={product.title}
                      className="w-full h-full object-cover object-top rounded-t-lg transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                    {product.oldPrice && product.oldPrice > product.price && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        İndirim
                      </span>
                    )}
                  </div>

                  <div className="flex justify-center mt-2 space-x-2">
                    {images.map((_, i) => (
                      <div
                        key={i}
                        onMouseEnter={() => setSelectedImage(i)}
                        className={`h-1.5 w-6 rounded-full cursor-pointer transition-all ${
                          selectedImage === i
                            ? "bg-black"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="mt-3 p-3 rounded-b-lg">
                    <h3 className="text-xs font-light text-gray-900 mb-1 line-clamp-2">
                      {product.title}
                    </h3>
                    <Rate
                      allowHalf
                      disabled
                      defaultValue={
                        typeof product.ratingCount === "number"
                          ? product.ratingCount / 10
                          : 0
                      }
                    />
                    <div className="flex items-center space-x-2 text-xs mt-1">
                      <span className="text-black font-semibold">
                        {typeof product.price === "number"
                          ? `$${product.price.toFixed(2)}`
                          : "Fiyat Yok"}
                      </span>
                      {product.oldPrice && product.oldPrice > product.price && (
                        <span className="text-gray-400 line-through">
                          {typeof product.oldPrice === "number"
                            ? `$${product.oldPrice.toFixed(2)}`
                            : ""}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}
