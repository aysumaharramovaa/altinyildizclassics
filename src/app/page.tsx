import Footer from "@/components/Header&Footer/Footer";
import Header from "@/components/Header&Footer/Header";
import CircleCard from "@/components/MainSections/CircleCard";
import FlashProducts from "@/components/MainSections/FlashProducts";
import GiftGuide from "@/components/MainSections/GiftGuide";
import { HeroCarousel } from "@/components/MainSections/HeroCarousel";
import PhotoCard from "@/components/MainSections/PhotoCard";
import SuitCards from "@/components/MainSections/SuitCards";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Header />

      <section className="mt-4">
        <HeroCarousel />
      </section>

      <section className="mt-8">
        <FlashProducts />
      </section>
      <section className="p-0 m-0">
        <GiftGuide />
      </section>
      <section className="mt-2">
        <PhotoCard />
      </section>
      <section className="mt-2">
        <CircleCard />
      </section>
      <section className="mt-2">
        <SuitCards />
      </section>

      <Footer />
    </>
  );
}
