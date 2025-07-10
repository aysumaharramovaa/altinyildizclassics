"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image?: string;
  size?: string;
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Omit<Product, "quantity">, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  changeQuantity: (id: number, amount: number) => void;
    clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Omit<Product, "quantity">, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const changeQuantity = (id: number, amount: number) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(1, p.quantity + amount) } : p
      )
    );
  };

  const clearCart = () => {
    setCart([]); 
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, changeQuantity, clearCart }} 
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
