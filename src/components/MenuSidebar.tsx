"use client";

import React from "react";
import { useRouter } from "next/navigation";

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
  { label: "404", href: "/not-found" }
];

export default function MenuSidebar() {
  const router = useRouter();

  function handleClick(href: string) {
    const exists = menuItems.some(item => item.href === href);
    if (exists) {
      router.push(href);
    } else {
      router.push("/not-found");
    }
  }

  return (
    <aside className="hidden lg:flex w-48 h-screen overflow-y-auto flex-col">
      <nav className="flex flex-col mt-4 px-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.href}
            onClick={() => handleClick(item.href)}
            className="py-3 px-4 rounded-lg text-left text-black text-sm hover:underline"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
