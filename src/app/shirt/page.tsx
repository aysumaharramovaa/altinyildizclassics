"use client";
import React, { useState, useMemo } from "react";
import { productsshirts } from "@/app/shirt/products";
import Link from "next/link";
import Header from "@/components/Header&Footer/Header";
import { Rate } from "antd";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useFavorites } from "@/components/Header&Footer/FavoritesContext";
import Navigation from "@/components/Header&Footer/Navigation";

type MenuItem = {
  label: string;
  href: string;
};
const menuItems = [
  { label: "Yeni Sezon", href: "/" },
  { label: "Giyim", href: "/giyim" },
  { label: "Basic Tişört", href: "/basictshirt" },
  { label: "Gömlek", href: "/shirt" },
  { label: "Pantolon", href: "/trousers" },
  { label: "Takım Elbise", href: "/suit" },
  { label: "Polo Tişört", href: "/poloshirt" },
  { label: "Her Daim Basic", href: "/her-daim-basic" },
  { label: "Şort", href: "/sort" },
  { label: "Mayo / Deniz Şortu", href: "/mayo-deniz-sortu" },
  { label: "Klasik Takım Elbise", href: "/klasik-takim-elbise" },
  { label: "Nano Takım Elbise", href: "/nano-takim-elbise" },
  { label: "Yelekli Takım Elbise", href: "/yelekli-takim-elbise" },
  { label: "Yelekli Takm Elbise", href: "/yelekli-takm-elbise" },
  { label: "Sweatshirt", href: "/sweatshirt" },
  { label: "Smokin / Damatlik", href: "/smokin-damatlik" },
  { label: "Esofman", href: "/esofman" },
  { label: "Triko / Kazak", href: "/triko-kazak" },
  { label: "DIS Giyim", href: "/dis-giyim" },
  { label: "Polar", href: "/polar" },
  { label: "IQ Giyim", href: "/iq-giyim" },
  { label: "Kadin Giyim", href: "/kadin-giyim" },
  { label: "Online Exclusive", href: "/online-exclusive" },
  { label: "Coklu Paket Urünler", href: "/coklu-paket-urunler" },
  { label: "Ayakkabı", href: "/ayakkabi" },
  { label: "Aksesuar", href: "/aksesuar" },
  { label: "Kampanyalar", href: "/kampanyalar" },
  { label: "AC x Burak ÖZGivit", href: "/ac-x-burak-ozgivit" },
  { label: "Koleksiyon", href: "/koleksiyon" },
  { label: "Mega Outlet", href: "/mega-outlet" },
  { label: "AC Home", href: "/ac-home" },
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
  const { favorites, toggleFavorite } = useFavorites();

  const sortedProducts = useMemo(() => {
    switch (activeSort) {
      case "10":
        return [...productsshirts].sort((a, b) => a.price - b.price);
      case "11":
        return [...productsshirts].sort((a, b) => b.price - a.price);
      case "15":
        return [...productsshirts].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case "20":
        return [...productsshirts].sort((a, b) => b.salesCount - a.salesCount);
      case "25":
        return [...productsshirts].sort(
          (a, b) => b.ratingCount - a.ratingCount
        );
      default:
        return productsshirts;
    }
  }, [activeSort]);

  return (
    <>
      <Header />
      <Navigation />
      <p className="text-sm pl-5 text-gray-600 mt-1">
        Ana Sayfa / Giyim / Gömlek
      </p>

      <div className="min-h-screen flex font-sans text-gray-800">
       <aside className="hidden lg:flex w-48 h-screen overflow-y-auto flex-col">
          <nav className="flex flex-col mt-4 px-4 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-3 px-4 rounded-lg text-left text-black text-sm ${
                  activeMenu.href === item.href
                    ? "underline font-semibold"
                    : "hover:underline"
                } transition`}
                onClick={() => setActiveMenu(item)}
              >
                {item.label}
              </Link>
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
            {sortedProducts.map((productsshirts, idx) => {
              const images = [
                productsshirts.image,
                productsshirts.image1,
                productsshirts.image2,
                productsshirts.image3,
              ];
              const [selectedImage, setSelectedImage] = useState(0);
              const isFavorite = favorites.includes(productsshirts.id);

              return (
                <Link
                  href={`/shirt/${productsshirts.id}`}
                  key={`${productsshirts.id}-${idx}`}
                  className="block group"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition w-full h-60 relative">
                    <img
                      src={images[selectedImage]}
                      alt={productsshirts.title}
                      className="w-full h-full object-cover object-top rounded-t-lg transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault(); 
                        toggleFavorite(productsshirts.id);
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

                    {productsshirts.oldPrice &&
                      productsshirts.oldPrice > productsshirts.price && (
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
                      {productsshirts.title}
                    </h3>
                    <Rate
                      allowHalf
                      disabled
                      defaultValue={
                        typeof productsshirts.ratingCount === "number"
                          ? productsshirts.ratingCount / 10
                          : 0
                      }
                    />
                    <div className="flex items-center space-x-2 text-xs mt-1">
                      <span className="text-black font-semibold">
                        {typeof productsshirts.price === "number"
                          ? `$${productsshirts.price.toFixed(2)}`
                          : "Fiyat Yok"}
                      </span>
                      {productsshirts.oldPrice &&
                        productsshirts.oldPrice > productsshirts.price && (
                          <span className="text-gray-400 line-through">
                            {typeof productsshirts.oldPrice === "number"
                              ? `$${productsshirts.oldPrice.toFixed(2)}`
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
