"use client";
import React from "react";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="hidden lg:flex items-center justify-center gap-6 py-4 text-xs">
          <a href="#" className="text-red-500 font-medium">
            EN BABA BAYRAM
          </a>
          |
          <Link href="/suit" className="text-gray-700 hover:text-red-500">
            Takım Elbise
          </Link>
          |
          <Link href="/shirt" className="text-gray-700 hover:text-red-500">
            Gömlek
          </Link>
          |
          <Link
            href="/basictshirt"
            className="text-gray-700 hover:text-red-500"
          >
            Basic Tişört
          </Link>
          |
          <Link
            href="/poloshirt"
            className="text-gray-700 hover:text-red-500"
          >
            Polo Tişört
          </Link>
          |
          <Link href="/trousers" className="text-gray-700 hover:text-red-500">
            Pantolon
          </Link>
          |
          <a href="#" className="text-gray-700 hover:text-red-500">
            Jean
          </a>
          |
          <a href="#" className="text-gray-700 hover:text-red-500">
            Şort / Mayo
          </a>
          |
          <a href="#" className="text-gray-700 hover:text-red-500">
            Sweatshirt
          </a>
          |
          <a href="#" className="text-red-500 font-medium">
            Çok Satanlar
          </a>
          |
          <a href="#" className="text-gray-700 hover:text-red-500">
            STARS
          </a>
        </div>
      </div>
    </nav>
  );
}