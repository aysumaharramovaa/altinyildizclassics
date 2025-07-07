"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { productpolo } from "@/app/poloshirt/products";
import Link from "next/link";

export default function FlashProducts() {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 5.5,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1279px)": {
        slides: { perView: 3.2, spacing: 16 },
      },
      "(max-width: 1023px)": {
        slides: { perView: 2.2, spacing: 12 },
      },
      "(max-width: 639px)": {
        slides: { perView: 1.2, spacing: 8 },
      },
    },
  });

  const coupons = [
    {
      id: "coupon1",
      title: "%100 Pamuk Oxford Slim Fit Dar Kesim Düğmeli Yaka Beyaz...",
      price: 743.5,
      oldPrice: 773.99,
      image: "/flashproducts/kupon.jpg",
    },
  ];

  const combinedItems = [...coupons, ...productpolo];

  return (
    <div className="min-h-screen bg-white py-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold uppercase border-gray-300 pb-2 mb-6">
          Flaş Ürünler
        </h2>
        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {combinedItems.map((item, index) => {
              const card = (
                <Card className="group cursor-pointer overflow-hidden shadow-md h-[480px] flex flex-col justify-between">
                  <div className={`relative ${index === 0 ? "h-[32rem]" : "h-[280px]"}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {index !== 0 && (
                    <CardContent className="p-3 flex flex-col justify-between flex-grow">
                      <h3 className="font-semibold text-base line-clamp-2 min-h-[2rem]">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        {item.oldPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {item.oldPrice} TL
                          </span>
                        )}
                        <span className="text-lg font-bold text-black">
                          {item.price} TL
                        </span>
                      </div>
                      <Badge className="bg-yellow-800 text-white mt-1">
                        Sepette %10 Az Öde
                      </Badge>
                    </CardContent>
                  )}
                </Card>
              );

              return (
                <div className="keen-slider__slide" key={index}>
                  {index !== 0 ? (
                    <Link href={`/poloshirt/${item.id}`}>{card}</Link>
                  ) : (
                    card
                  )}
                </div>
              );
            })}
          </div>

          <button
            onClick={() => slider.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full hover:bg-gray-800"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full hover:bg-gray-800"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
