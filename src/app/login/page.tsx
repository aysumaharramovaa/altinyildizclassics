"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header&Footer/Header";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [rememberMe, setRememberMe] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        localStorage.setItem("token", data.token);
        router.push("/");
      } else {
        setError(data.message || "Giriş alınmadı");
      }
    } catch (err) {
      setError("Serverlə əlaqə zamanı xəta baş verdi");
    }
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-start justify-center pt-20">
        <div className="max-w-md w-full bg-white">
          <h2 className="text-2xl font-semibold mb-2">Giriş Yap</h2>
          <p className="text-xs mb-5">
            Fırsatları kaçırmamak veya siparişlerinizi görüntülemek için üyelik
            oluşturun.
          </p>

          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="E-poçta"
              />
            </div>

            <div>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Şifre"
              />
            </div>

            <div className="flex items-center">
              <input
                id="rememberMe"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 block text-sm text-gray-900"
              >
                Beni hatırla
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-600 text-white font-semibold py-2 rounded transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Daxil olursunuz..." : "Giriş Yap"}
            </button>

            <button
              type="button"
              onClick={() => setShowModal(true)}
              style={{ backgroundColor: "oklch(47.6% 0.114 61.907)" }}
              className="w-full hover:bg-gray-600 text-white font-semibold py-2 rounded transition disabled:opacity-50"
            >
              Yeni Üyelik Oluştur
            </button>
            {showModal && (
              <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none bg-opacity-20">
                <div
                  className="bg-white p-6 rounded shadow-lg max-w-sm w-full pointer-events-auto"
                  style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
                >
                  <h3 className="text-lg font-semibold mb-4">
                    Yeni Üyelik Oluştur
                  </h3>
                  <p className="text-sm mb-4">
                    Fırsatları kaçırmamak veya siparişlerinizi görüntülemek için giriş yapın. 
                    </p>
                  <input
                    type="text"
                    placeholder="Telefon Nömrəsi"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-600 mb-4"
                  />
                  <button
                    onClick={() => setShowModal(false)}
                    className="w-full bg-black hover:bg-gray-600 text-white font-semibold py-2 rounded transition"
                  >
                    Devam et
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
