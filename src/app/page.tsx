import React from "react";
import Header from "../../components/Header&Footer/Header";
import Footer from "../../components/Header&Footer/Footer";
import { HeroCarousel } from "../../components/MainSections/HeroCarousel";
import FlashProducts from "../../components/MainSections/FlashProducts";

export default function HomePage() {
  return (
    <div>
      <section>
        <Header />
      </section>

      { /* hero carusel */}
      <section className="mt-4">
        <HeroCarousel />
      </section>
      
      {/* Category Cards */}
      {<section className="mt-8">
        <FlashProducts />
      </section> }

      {/* Gift Guide */}
      {/* <section className="p-0 m-0">
        <GiftGuide />
      </section> */}

      {/* Photo Card */}
      {/* <section className="mt-2">
        <PhotoCard />
      </section> */}

      {/* <section className="mt-2">
        <CircleCard />
      </section> */}

      {/* <section className="mt-2">
        <SuitCards />
      </section> */}

      <Footer />
    </div>
  );
}
