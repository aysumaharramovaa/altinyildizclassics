"use client"
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const images = [
  "/herocarousel/hero-bg.jpeg",
  "/herocarousel/hero-bg2.jpeg",
  "/herocarousel/hero-bg3.jpeg",
  "/herocarousel/hero-bg4.jpeg",
  "/herocarousel/hero-bg5.jpeg",
  "/herocarousel/hero-bg6.jpeg",
  "/herocarousel/hero-bg7.jpeg",
  "/herocarousel/hero-bg8.jpeg",
  "/herocarousel/hero-bg9.jpeg",
  "/herocarousel/hero-bg10.jpeg",
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000); 

    return () => clearInterval(interval);
  }, [instanceRef]);

  const handleClick = () => {
    router.push("/suit");
  };

  return (
    <div className="relative pt-3">
      <div ref={sliderRef} className="keen-slider w-screen h-screen">
        {images.map((src, index) => (
          <div
            key={index}
            className="keen-slider__slide relative cursor-pointer w-screen h-screen"
            onClick={handleClick}
          >
            <img
              src={src}
              alt={`Hero ${index + 1}`}
             className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-[4px] w-6 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
