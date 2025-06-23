"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import Header from "@/components/Header&Footer/Header";
import Footer from "@/components/Header&Footer/Footer";

export default function Sepet() {
  return (
    <div>
        <Header />
      <div className="flex flex-col items-center justify-start text-center mt-24 mb-20 px-4">
      <div className="bg-white p-8 rounded-lg  max-w-md w-full">
        <div className="flex justify-center mb-4">
          <ShoppingCart size={48} className="text-gray-600" />
        </div>
        <p className="text-sm text-gray-600 mb-6">
          Sepetinizde ürün bulunmamaktadır.
        </p>
        <Link
          href="/"
          className="inline-block bg-black hover:bg-gray-700 text-white px-4 py-2 rounded transition"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
    <Footer />
    </div>
  );
}
