"use client";
import React, { FC, useState, useEffect } from "react";
import { Menu } from "lucide-react";
import {
  FiSearch,
  FiHeart,
  FiEye,
  FiUser,
  FiShoppingBag,
} from "react-icons/fi";
import Link from "next/link";
import { useFavorites } from "@/components/Header&Footer/FavoritesContext";
import { useCart } from "@/components/Header&Footer/CartContext";

type IconWithTooltipProps = {
  Icon: FC<{ size?: number; className?: string }>;
  label: string;
  badgeCount?: number;
  size?: number;
};

const IconWithTooltip: FC<IconWithTooltipProps> = ({
  Icon,
  label,
  badgeCount = 0,
  size = 5,
}) => (
  <div className="relative group cursor-pointer">
    <Icon size={size} className="text-gray-700" />
    {badgeCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        {badgeCount}
      </span>
    )}
    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      {label}
    </span>
  </div>
);

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 640);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

export default function Header() {
  const isMobile = useIsMobile();
  const { favorites } = useFavorites();
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-2 text-gray-700">
              <Menu size={20} />
              <span className="text-sm font-medium">MENÜ</span>
            </button>
            <Link href="/" passHref>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wider">
                  ALTINYILDIZ
                </span>
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl">
                  ★
                </span>
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wider">
                  CLASSICS
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-2 md:gap-6">
              <IconWithTooltip
                Icon={FiSearch}
                label="Ara"
                size={isMobile ? 5 : 10}
              />
              <Link href="/favorites">
                <IconWithTooltip
                  Icon={FiHeart}
                  label="Favorilerim"
                  size={isMobile ? 5 : 10}
                  badgeCount={favorites.length}
                />
              </Link>

              <Link href="/myorders">
                <IconWithTooltip
                  Icon={FiEye}
                  label="Siparişlerim"
                  size={isMobile ? 5 : 10}
                />
              </Link>

              <Link href="/login">
                <IconWithTooltip
                  Icon={FiUser}
                  label="Hesabım"
                  size={isMobile ? 5 : 10}
                />
              </Link>

              <Link href="/basket">
                <IconWithTooltip
                  Icon={FiShoppingBag}
                  label="Sebetim"
                  badgeCount={totalItems}
                  size={isMobile ? 5 : 10}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
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
            <a href="#" className="text-gray-700 hover:text-red-500">
              Pantolon
            </a>
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
    </div>
  );
}
