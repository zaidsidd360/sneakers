import React, { useState, createContext } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = (props) => {
  const [cartValue, setCartValue] = useState({
    itemsInCart: 0,
    totalCartPrice: 0,
  });
  return (
    <CartContext.Provider value={{ cartValue, setCartValue }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
