import Footer from "@/components/Header&Footer/Footer";
import Header from "@/components/Header&Footer/Header";
import ScrollingBanner from "@/components/Header&Footer/ScrollingBanner";
import CircleCard from "@/components/MainSections/CircleCard";
import FlashProducts from "@/components/MainSections/FlashProducts";
import GiftGuide from "@/components/MainSections/GiftGuide";
import { HeroCarousel } from "@/components/MainSections/HeroCarousel";
import PhotoCard from "@/components/MainSections/PhotoCard";
import SuitCards from "@/components/MainSections/SuitCards";
import Navigation from "@/components/Header&Footer/Navigation";
import React from "react";

export default function HomePage() {
  return (
    <>
      <ScrollingBanner />
      <Header />
      <Navigation />
      <main>
        <section className="mt-2">
          <HeroCarousel />
          <FlashProducts />
          <GiftGuide />
          <PhotoCard />
          <CircleCard />
          <SuitCards />
        </section>
      </main>

      <Footer />
    </>
  );
}
