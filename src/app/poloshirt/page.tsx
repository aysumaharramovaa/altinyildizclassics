"use client";
import React, { useState, useMemo } from "react";
import { productpolo } from "@/app/poloshirt/products";
import Link from "next/link";
import Header from "@/components/Header&Footer/Header";
import { Rate } from "antd";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useFavorites } from "@/components/Header&Footer/FavoritesContext";
import Navigation from "@/components/Header&Footer/Navigation";
import MenuSidebar from "@/components/MenuSidebar";

const sortOptions = [
  { value: "0", label: "Editör Sıralaması" },
  { value: "10", label: "Fiyata Göre Artan" },
  { value: "11", label: "Fiyata Göre Azalan" },
  { value: "15", label: "Yeni Ürünler" },
  { value: "20", label: "En Çok Satanlar" },
  { value: "25", label: "En Çok Değerlendirilen" },
];

export default function ProductLayout() {
  const [activeMenu, setActiveMenu] = useState({
    label: "Yeni Sezon",
    href: "/",
  });
  const [activeSort, setActiveSort] = useState(sortOptions[0].value);
  const [columns, setColumns] = useState(4);
  const { favorites, toggleFavorite } = useFavorites();

  const sortedProducts = useMemo(() => {
    switch (activeSort) {
      case "10":
        return [...productpolo].sort((a, b) => a.price - b.price);
      case "11":
        return [...productpolo].sort((a, b) => b.price - a.price);
      case "15":
        return [...productpolo].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case "20":
        return [...productpolo].sort((a, b) => b.salesCount - a.salesCount);
      case "25":
        return [...productpolo].sort((a, b) => b.ratingCount - a.ratingCount);
      default:
        return productpolo;
    }
  }, [activeSort]);

  return (
    <>
      <Header />
      <Navigation />
      <p className="text-sm pl-5 text-gray-600 mt-1  pt-3">
        Ana Sayfa / Giyim / Polo Tişört
      </p>

      <div className="min-h-screen flex font-sans text-gray-800">
        <MenuSidebar
          activeHref={activeMenu.href}
          onChange={(item) => setActiveMenu(item)}
        />

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
            {sortedProducts.map((productpolo, idx) => {
              const images = [
                productpolo.image,
                productpolo.image1,
                productpolo.image2,
                productpolo.image3,
              ];
              const [selectedImage, setSelectedImage] = useState(0);
              const isFavorite = favorites.includes(productpolo.id);

              return (
                <Link
                  href={`/poloshirt/${productpolo.id}`}
                  key={`${productpolo.id}-${idx}`}
                  className="block group"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition w-full h-60 relative">
                    <img
                      src={images[selectedImage]}
                      alt={productpolo.title}
                      className="w-full h-full object-cover object-top rounded-t-lg transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(productpolo.id);
                      }}
                      className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-gray-100 transition z-10"
                      aria-label={
                        isFavorite ? "Favoritdən sil" : "Favoritə əlavə et"
                      }
                    >
                      {isFavorite ? (
                        <AiFillHeart className="text-red-500 w-5 h-5" />
                      ) : (
                        <AiOutlineHeart className="text-gray-500 w-5 h-5" />
                      )}
                    </button>

                    {productpolo.oldPrice &&
                      productpolo.oldPrice > productpolo.price && (
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
                      {productpolo.title}
                    </h3>
                    <Rate
                      allowHalf
                      disabled
                      defaultValue={
                        typeof productpolo.ratingCount === "number"
                          ? productpolo.ratingCount / 10
                          : 0
                      }
                    />
                    <div className="flex items-center space-x-2 text-xs mt-1">
                      <span className="text-black font-semibold">
                        {typeof productpolo.price === "number"
                          ? `$${productpolo.price.toFixed(2)}`
                          : "Fiyat Yok"}
                      </span>
                      {productpolo.oldPrice &&
                        productpolo.oldPrice > productpolo.price && (
                          <span className="text-gray-400 line-through">
                            {typeof productpolo.oldPrice === "number"
                              ? `$${productpolo.oldPrice.toFixed(2)}`
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
