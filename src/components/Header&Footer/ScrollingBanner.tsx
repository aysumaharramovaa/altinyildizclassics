"use client";
import React from "react";

export default function ScrollingBanner() {
  return (
    <div>
      {/* scrolling banner */}
      <div className="bg-red-500 text-white py-2 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <span className="mx-8">EN BABA BAYRAM</span>
          <span className="mx-8">ŞANSLI SAATLER</span>
          <span className="mx-8">EN BABA BAYRAM</span>
          <span className="mx-8">ŞANSLI SAATLER</span>
          <span className="mx-8">EN BABA BAYRAM</span>
          <span className="mx-8">ŞANSLI SAATLER</span>
          <span className="mx-8">EN BABA BAYRAM</span>
          <span className="mx-8">ŞANSLI SAATLER</span>
          <span className="mx-8">EN BABA BAYRAM</span>
          <span className="mx-8">ŞANSLI SAATLER</span>
        </div>
      </div>
    </div>
  );
}

