"use client";
import React, { FC, useState, useEffect } from "react";
import {
  FiSearch,
  FiHeart,
  FiEye,
  FiUser,
  FiShoppingBag,
  FiX,
} from "react-icons/fi";
import Link from "next/link";
import { useFavorites } from "@/components/Header&Footer/FavoritesContext";
import { useCart } from "@/components/Header&Footer/CartContext";
import { Menu as MenuIcon } from "lucide-react";

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

  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim();
    if (!trimmedQuery) {
      alert("Axtarış üçün bir söz yazın.");
      return;
    }
    window.location.href = `/search?q=${encodeURIComponent(trimmedQuery)}`;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  

  return (
    <div>
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          {showSearch ? (
            <div className="flex justify-center">
              <div className="w-full max-w-4xl flex items-center border border-gray-300 rounded overflow-hidden">
                  <FiSearch size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Badic Tişört..."
                  className="flex-grow px-4 py-2 text-lg outline-none"
                  autoFocus
                />
                <button
                  onClick={handleSearch}
                  aria-label="Ara"
                  className="bg-gray-200 hover:bg-gray-300 px-4 py-2 text-gray-700 font-medium flex items-center justify-center"
                >
                  Ara
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <Link href="/menu">
                <button className="flex items-center gap-2 text-gray-700">
                  <MenuIcon size={20} />
                  <span className="text-sm font-medium">MENÜ</span>
                </button>
              </Link>

              <Link href="/" passHref>
                <div className="flex items-center gap-2 cursor-pointer">
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
                <button
                  onClick={() => setShowSearch(true)}
                  aria-label="Axtar"
                  className="cursor-pointer"
                >
                  <FiSearch
                    size={isMobile ? 5 : 10}
                    className="text-gray-700"
                  />
                </button>

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
          )}
        </div>
      </header>
    </div>
  );
}
