"use client"
import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";

const footerLinks = [
  {
    title: "Bilgi",
    links: [
      "Hakkımızda",
      "Kurumsal Web Sitesi",
      "Bayilik Başvuru",
      "Kişisel Verilerin Korunması Politikası",
      "Sürdürülebilirlik",
    ],
  },
  {
    title: "Genel",
    links: [
      "Ödeme",
      "Mağazalar",
      "Kampanyalar",
      "Mağaza Kampanyaları",
      "Kurumsal Satış",
    ],
  },
  {
    title: "Yardım",
    links: [
      "Sıkça Sorulan Sorular / İletişim Rehberi",
      "İade ve Değişim Şartları",
      "Sipariş Takibi",
      "Güvenli Alışveriş",
    ],
  },
  {
    title: "Özel Sayfalar",
    links: [
      "Burak Özçivit",
      "Babalar Günü",
      "Damat Bohçası",
      "Mezuniyet Stili",
    ],
  },
  {
    title: "Müşteri Hizmetleri",
    links: [
      {
        label: "o (850) 455 56 57",
        href: "tel:+908504555657",
      },
      {
        label: "destek@altinyildizclassics.com",
        href: "mailto:destek@altinyildizclassics.com",
      },
      {
        label: "Çalışma Saatleri Hafta içi 08:00 - 17:20",
        href: "#",
      },
      {
        label: "İletişim",
        href: "#",
      },
    ],
  },
];

const Footer: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleIndex = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <footer className="bg-white text-black py-10 px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-6 text-sm text-center md:text-left overflow-x-hidden">

        {footerLinks.map((section, index) => (
          <div key={index}>
            <button
              type="button"
              onClick={() => toggleIndex(index)}
              className="font-semibold mb-2 w-full flex justify-between items-center md:block"
            >
              {section.title}
              <span className="md:hidden">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
                md:overflow-visible md:max-h-full
                ${
                  openIndex === index
                    ? "max-h-[1000px]" 
                    : "max-h-0"
                }
              `}
            >
              {section.links.map((link, i) => {
                if (typeof link === "string") {
                  return (
                    <a
                      key={i}
                      href="#"
                      className="block hover:underline py-1"
                    >
                      {link}
                    </a>
                  );
                } else {
                  return (
                    <a
                      key={i}
                      href={link.href}
                      className="block hover:underline py-1"
                    >
                      {link.label}
                    </a>
                  );
                }
              })}
            </div>
          </div>
        ))}
      </div>

      <hr className="my-8 border-gray-300" />
      <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-4 px-4">
        <div>
          <h2>Güvenli Ödeme</h2>
        </div>

        <div className="flex gap-4 flex-wrap justify-end">
          <img src="/footer/mastercard.png" alt="mastercard" className="h-8" />
          <img src="/footer/visa.png" alt="visa" className="h-8" />
          <img src="/footer/troy.svg" alt="troy" className="h-8" />
          <img src="/footer/express.png" alt="express" className="h-8" />
          <img src="/footer/pcilogo2.png" alt="pci" className="h-8" />

          <a
            href="https://www.eticaret.gov.tr/siteprofil/F4C6C3E39C1B457893E19527AA89DBEA/wwwaltinyildizclassicscom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/footer/qrcode.jpeg" alt="qr" className="h-8 cursor-pointer" />
          </a>
        </div>
      </div>
      <div>
        <hr className="h-[2px] my-8 border-gray-300 " />
        <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap px-4 gap-20">
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/AltinyildizClassics/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-lg"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/altinyildizclassics"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/AltnyldzClsscs"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-lg"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.youtube.com/c/Alt%C4%B1ny%C4%B1ld%C4%B1zClassicsTR"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-lg"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.tiktok.com/@altinyildizclassics"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-lg"
            >
              <FaTiktok />
            </a>
          </div>
          <div className="flex gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.brmagazacilik.altinyildiz&referrer=utm_source%3DWebsite%26utm_medium%3DFooter-button&pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/footer/google-play.svg"
                alt="googleplay"
                className="h-8"
              />
            </a>

            <a
              href="https://apps.apple.com/us/app/alt%C4%B1ny%C4%B1ld%C4%B1z-classics/id1483910505?utm_source=Website&utm_medium=Footer-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/footer/app-store.svg" alt="appstore" className="h-8" />
            </a>

            <a
              href="https://appgallery.huawei.com/#/app/C102893581"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/footer/app-gallery.svg" alt="app-gallery" className="h-8" />
            </a>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-8">
          <hr className="h-[2px] my-4 border-gray-300" />
          <p>© 2025 Altınyıldız Classics, Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
