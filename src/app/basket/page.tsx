"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Sepet() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="flex justify-center mb-4">
          <ShoppingCart size={48} className="text-gray-600" />
        </div>
        <h2 className="text-xl font-semibold mb-2">Sepetiniz Boş</h2>
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
  );
}
