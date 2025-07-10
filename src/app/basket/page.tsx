"use client";

import { useCart } from "@/components/Header&Footer/CartContext";
import Header from "@/components/Header&Footer/Header";
import Navigation from "@/components/Header&Footer/Navigation";
import { ShoppingCart, Trash2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Sepet() {
  const { cart, removeFromCart, changeQuantity, clearCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handlePayment = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      clearCart();
      router.push("/");
    }, 1000);
  };

  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
  const discount = total * 0.1;
  const shipping = 44.99;
  const tax = 54.89;
  const finalTotal = total - discount + shipping + tax;

  return (
    <div>
      <Header />
      <Navigation />
      <div className="flex flex-col items-center justify-start mt-24 mb-20 px-4">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-semibold mb-6 flex items-center gap-2">
              <ShoppingCart size={36} /> Sepetim
            </h1>

            {cart.length === 0 ? (
              <div className="bg-white p-8 rounded-lg max-w-md mx-auto text-center">
                <p className="text-gray-600 mb-6">
                  Sepetinizde ürün bulunmamaktadır.
                </p>
                <Link
                  href="/"
                  className="inline-block bg-black hover:bg-gray-700 text-white px-4 py-2 rounded transition"
                >
                  Ana Sayfaya Dön
                </Link>
              </div>
            ) : (
              <div className="bg-white rounded-lg p-6">
                <ul>
                  {cart.map(({ id, title, price, quantity, image, size }) => (
                    <div
                      key={id}
                      className="flex items-center justify-between py-6"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-32 h-32 overflow-hidden rounded-md">
                          <img
                            src={image}
                            alt={title}
                            className="w-100% h-full object-cover"
                          />
                        </div>

                        <div>
                          <h2 className="text-lg font-medium">{title}</h2>
                          <p className="text-sm text-gray-500">
                            ₺{price.toFixed(2)} x {quantity}
                          </p>
                          <p className="text-sm text-gray-500">
                            Toplam: ₺{(price * quantity).toFixed(2)}
                          </p>
                          {size && (
                            <p className="text-sm text-gray-500">
                              Beden :{" "}
                              <span className="font-medium">{size}</span>
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex flex-col items-center">
                          <label
                            htmlFor={`quantity-${id}`}
                            className="text-sm text-gray-500 mb-1"
                          >
                            Adet
                          </label>
                          <select
                            id={`quantity-${id}`}
                            value={quantity}
                            onChange={(e) =>
                              changeQuantity(
                                id,
                                parseInt(e.target.value) - quantity
                              )
                            }
                            className="border rounded px-2 py-1 text-sm"
                          >
                            {Array.from({ length: 40 }, (_, i) => i + 1).map(
                              (num) => (
                                <option key={num} value={num}>
                                  {num}
                                </option>
                              )
                            )}
                          </select>
                        </div>

                        <button
                          onClick={() => removeFromCart(id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="bg-white rounded-lg p-6 h-fit">
              <h2 className="text-xl font-semibold mb-4">Sipariş Özeti</h2>
              <div className="text-sm space-y-3">
                <div className="flex justify-between">
                  <span>Ürün Toplamı</span>
                  <span className="font-medium">₺{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Sepette Kazan</span>
                  <span>-₺{discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Kargo</span>
                  <span>₺{shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>KDV</span>
                  <span>₺{tax.toFixed(2)}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Toplam Tutar</span>
                  <span>₺{finalTotal.toFixed(2)}</span>
                </div>

                <button
                  onClick={handlePayment}
                  className="mt-4 w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
                >
                  Ödeme Yap
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold text-green-600">
              ✅ Ödemeniz alındı!
            </h2>
            <p className="mt-2 text-gray-600">Teşekkür ederiz.</p>
          </div>
        </div>
      )}
    </div>
  );
}
