"use client";

import Header from "@/components/Header&Footer/Header";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Menu() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<
    "giyim" | "ayakkabi" | "aksesuar" | "kampanyalar"
  >("giyim");

  const handleClose = () => {
    router.push("/");
  };

  const categoryData: Record<string, { label: string; href: string }[]> = {
    giyim: [
      { label: "Tüm Giyim", href: "/tum-giyim" },
      { label: "Tişört", href: "/basictshirt" },
      { label: "Gömlek", href: "/shirt" },
      { label: "Pantolon", href: "/pantolon" },
      { label: "Takım Elbise", href: "/suit" },
      { label: "Smokin / Damatlık", href: "/smokin" },
      { label: "Sweatshirt", href: "/sweatshirt" },
      { label: "Eşofman", href: "/esofman" },
      { label: "Ceket", href: "/ceket" },
      { label: "Dış Giyim", href: "/dis-giyim" },
      { label: "Polar", href: "/polar" },
    ],
    ayakkabi: [
      { label: "Tüm Ayakkabı ve Botlar", href: "/tum-ayakkabi" },
      { label: "Casual Ayakkabı", href: "/casual-ayakkabi" },
      { label: "Klasik Ayakkabı", href: "/klasik-ayakkabi" },
      { label: "Sneaker / Spor Ayakkabı", href: "/sneaker" },
      { label: "Bot", href: "/bot" },
      { label: "Terlik", href: "/terlik" },
    ],
    aksesuar: [
      { label: "Tüm Aksesuarlar", href: "/tum-aksesuar" },
      { label: "Takım Elbise Aksesuarları", href: "/takim-elbise-aksesuar" },
      { label: "Aksesuar Setleri", href: "/aksesuar-setleri" },
      { label: "Parfüm", href: "/parfum" },
      { label: "Kemer", href: "/kemer" },
      { label: "Cüzdan / Kartlık", href: "/cuzdan" },
      { label: "Sırt Çantası", href: "/sirt-cantasi" },
      { label: "Çanta / Valiz", href: "/canta-valiz" },
    ],
    kampanyalar: [
      { label: "En Uzun Alışveriş Günleri", href: "/kampanya/uzun-gunler" },
      { label: "5 Al 4 Öde", href: "/kampanya/5-al-4-ode" },
      { label: "Yeni Sezon Kampanyaları", href: "/kampanya/yeni-sezon" },
      { label: "Aksesuar - 2 Al Sepette %20", href: "/kampanya/aksesuar-20" },
      { label: "FLASH SALE", href: "/kampanya/flash-sale" },
      { label: "MEGA OUTLET", href: "/kampanya/mega-outlet" },
    ],
  };

  return (
    <>
      <div className="fixed inset-0 z-50 bg-white overflow-y-auto p-6">
        <button onClick={handleClose} className="text-xl font-bold mb-6">
          ✕ Bağla
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-2/3">
            <div className="flex gap-4 mb-6 text-lg font-semibold flex-wrap">
              <button
                onClick={() => setActiveCategory("giyim")}
                className={activeCategory === "giyim" ? "underline" : ""}
              >
                GİYİM
              </button>
              <button
                onClick={() => setActiveCategory("ayakkabi")}
                className={activeCategory === "ayakkabi" ? "underline" : ""}
              >
                AYAKKABI
              </button>
              <button
                onClick={() => setActiveCategory("aksesuar")}
                className={activeCategory === "aksesuar" ? "underline" : ""}
              >
                AKSESUAR
              </button>
              <button
                onClick={() => setActiveCategory("kampanyalar")}
                className={activeCategory === "kampanyalar" ? "underline" : ""}
              >
                KAMPANYALAR
              </button>
            </div>

            <ul className="space-y-4 text-lg">
              {categoryData[activeCategory].map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full flex flex-row gap-4 pt-0 mt-0">
            <div className="w-1/2 overflow-hidden rounded h-[40rem]">
              <img
                src="/suitcard/takım1.jpeg"
                alt="Kampaniya 1"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-1/2 overflow-hidden rounded h-[40rem]">
              <img
                src="/suitcard/takim2.jpeg"
                alt="Kampaniya 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
