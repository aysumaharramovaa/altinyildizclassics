"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header&Footer/Header";
import { useFavorites } from "@/components/Header&Footer/FavoritesContext";

export default function Siparislerim() {
  return (
    <>
      <Header />
      <div className="container mx-auto p-5">
        <h1 className="text-xl font-semibold mb-4">Siparişlerim</h1>
        <p className="text-red-600 text-center">
          Şu anda sipariş kabul edicek halde deyğiliz, burası Aysu'nun FİNAL projesidir
        </p>
      </div>
    </>
  );
}
