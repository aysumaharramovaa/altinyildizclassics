import React from "react";
import Header from "../../components/Header&Footer/Header";
import Footer from "../../components/Header&Footer/Footer";
import { HeroCarousel } from "../../components/MainSections/HeroCarousel";
import FlashProducts from "../../components/MainSections/FlashProducts";
import GiftGuide from "../../components/MainSections/GiftGuide";
import PhotoCard from "../../components/MainSections/PhotoCard";
import CircleCard from "../../components/MainSections/CircleCard";
import SuitCards from "../../components/MainSections/SuitCards";

export default function HomePage() {
  return (
    <div>
      <section>
        <Header />
      </section>

      <section className="mt-4">
        <HeroCarousel />
      </section>
      
      {<section className="mt-8">
        <FlashProducts />
      </section> }

      { <section className="p-0 m-0">
        <GiftGuide />
      </section> }

      {<section className="mt-2">
        <PhotoCard />
      </section> }

      { <section className="mt-2">
        <CircleCard />
      </section> }

      {<section className="mt-2">
        <SuitCards />
      </section> }

      <Footer />
    </div>
  );
}
