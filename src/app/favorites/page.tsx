"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header&Footer/Header";
import { useFavorites } from "@/components/Header&Footer/FavoritesContext";
import { products } from "@/app/suit/products";
import { productsshirts } from "@/app/shirt/products";
import { productbasictshirt } from "@/app/basictshirt/products";
import { productpolo } from "@/app/poloshirt/products";

type ProductType =
  | (typeof products)[number]
  | (typeof productsshirts)[number]
  | (typeof productbasictshirt)[number]
  | (typeof productpolo)[number];

export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();

  const uniqueFavorites = Array.from(new Set(favorites));

  const favoriteSuits = uniqueFavorites
    .map((favId) => products.find((p) => p.id === favId))
    .filter((p): p is (typeof products)[number] => p !== undefined);

  const favoriteShirts = uniqueFavorites
    .map((favId) => productsshirts.find((s) => s.id === favId))
    .filter((s): s is (typeof productsshirts)[number] => s !== undefined);

  const favoriteBasicTshirts = uniqueFavorites
    .map((favId) => productbasictshirt.find((b) => b.id === favId))
    .filter((b): b is (typeof productbasictshirt)[number] => b !== undefined);

  const favoritePolos = uniqueFavorites
    .map((favId) => productpolo.find((p) => p.id === favId))
    .filter((p): p is (typeof productpolo)[number] => p !== undefined);

  const favoriteProducts: ProductType[] = [
    ...favoriteSuits,
    ...favoriteShirts,
    ...favoriteBasicTshirts,
    ...favoritePolos,
  ];

  const uniqueFavoriteProducts = favoriteProducts.filter(
    (product, index, self) =>
      index ===
      self.findIndex(
        (p) =>
          p.id === product.id &&
          (
            products.some((s) => s.id === p.id) === products.some((s) => s.id === product.id) &&
            productsshirts.some((s) => s.id === p.id) === productsshirts.some((s) => s.id === product.id) &&
            productbasictshirt.some((b) => b.id === p.id) === productbasictshirt.some((b) => b.id === product.id) &&
            productpolo.some((polo) => polo.id === p.id) === productpolo.some((polo) => polo.id === product.id)
          )
      )
  );

  if (uniqueFavoriteProducts.length === 0) {
    return (
      <>
        <Header />
        <div className="container mx-auto p-5">
          <h1 className="text-xl font-semibold mb-4">Favorilerim</h1>
          <p>Henüz favorilere eklenmiş ürün yok.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto p-5">
        <h1 className="text-xl font-semibold mb-4">Favorilerim</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {uniqueFavoriteProducts.map((product) => {
            const isSuit = products.some((p) => p.id === product.id);
            const isShirt = productsshirts.some((p) => p.id === product.id);
            const isBasicTshirt = productbasictshirt.some((p) => p.id === product.id);
            const isPolo = productpolo.some((p) => p.id === product.id);

            let urlPrefix = "";
            if (isSuit) urlPrefix = "suit";
            else if (isShirt) urlPrefix = "shirt";
            else if (isBasicTshirt) urlPrefix = "basictshirt";
            else if (isPolo) urlPrefix = "poloshirt";

            const key = `${urlPrefix}-${product.id}`;

            return (
              <div
                key={key}
                className="relative border rounded p-4 hover:shadow-lg transition"
              >
                <button
                  onClick={() => toggleFavorite(product.id)}
                  aria-label="Favorilerden sil"
                  className="
                    absolute top-2 right-2
                    w-7 h-7
                    flex items-center justify-center
                    bg-gray-700 rounded-full shadow-md
                    text-white hover:text-red-600
                    hover:bg-gray-100
                    transition
                    cursor-pointer
                    select-none
                    z-10
                    font-bold text-lg
                  "
                >
                  X
                </button>

                <Link href={`/${urlPrefix}/${product.id}`} className="block cursor-pointer">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover object-top rounded"
                  />
                  <h2 className="mt-2 font-semibold text-sm">{product.title}</h2>
                  <p className="text-red-600 font-bold">${product.price.toFixed(2)}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
