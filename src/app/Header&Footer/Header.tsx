import React, { FC } from "react";
import { Menu } from "lucide-react";
import {
  FiSearch,
  FiHeart,
  FiEye,
  FiUser,
  FiShoppingBag,
} from "react-icons/fi";
import Link from "next/link";

type IconWithTooltipProps = {
  Icon: FC<{ size?: number; className?: string }>;
  label: string;
  badgeCount?: number;
};

const IconWithTooltip: FC<IconWithTooltipProps> = ({
  Icon,
  label,
  badgeCount = 0,
}) => (
  <div className="relative group cursor-pointer">
    <Icon size={20} className="text-gray-700" />
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

export default function Header() {
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

      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-2 text-gray-700">
              <Menu size={20} />
              <span className="text-sm font-medium">MENÜ</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-wider">
                ALTINYILDIZ
              </span>
              <span className="text-2xl">★</span>
              <span className="text-2xl font-bold tracking-wider">
                CLASSICS
              </span>
            </div>

            <div className="flex items-center gap-6">
              <IconWithTooltip Icon={FiSearch} label="Ara" />
              <IconWithTooltip Icon={FiHeart} label="Favorilerim" />
              <IconWithTooltip Icon={FiEye} label="Sənin baxdıqların" />
              <IconWithTooltip Icon={FiUser} label="Hesabım" />
              <IconWithTooltip
                Icon={FiShoppingBag}
                label="Səbətim"
                badgeCount={0}
              />
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
            <Link href={`/suit`} className="text-gray-700 hover:text-red-500">
              Takım Elbise
            </Link>
            |
            <a href="#" className="text-gray-700 hover:text-red-500">
              Gömlek
            </a>
            |
            <a href="#" className="text-gray-700 hover:text-red-500">
              Basic Tişört
            </a>
            |
            <a href="#" className="text-gray-700 hover:text-red-500">
              Polo Tişört
            </a>
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
