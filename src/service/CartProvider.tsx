"use client";
import { CartItemInput, OrderInput, Product, Sku } from "@/gql/graphql";
import React, { PropsWithChildren, useContext, useState } from "react";

interface CartInput extends CartItemInput {
  product: Product,
  sku: Sku
}

interface orderType extends OrderInput {
  carts?: CartInput[]
}

interface Props {
  order: orderType | null;
  setOrder: (x: orderType) => void;
}

const CartContext = React.createContext<Props>({
  order: null,
  setOrder: () => { }
});

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider(props: PropsWithChildren<unknown>) {
  const [value, setValue] = useState<orderType | null>({
    set: 'QO',
    amount: "0",
    discount: 0,
    carts: []
  });

  return (
    <CartContext.Provider value={{ order: value, setOrder: setValue }}>
      {props.children}
    </CartContext.Provider>
  );
}