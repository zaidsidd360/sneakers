import React, { useContext } from "react";
import CartContextProvider, { CartContext } from "../contexts/CartItemContext";

const Cart = () => {
  const { cartValue } = useContext(CartContext);
  console.log(cartValue.itemsInCart);

  return (
    <div className="rounded-xl shadow-2xl h-[300px] w-[100vw] md:w-[400px] md:mx-2 bg-white">
      <div className="pl-8 flex justify-start items-center w-full h-[25%] border-b-2 font-bold text-base">
        Cart
      </div>
      <div className="flex justify-center items-center w-full h-[75%]">
        {cartValue !== undefined
          ? `You have ${cartValue.itemsInCart} items in your cart.`
          : "Your cart is empty."}
      </div>
    </div>
  );
};

export default Cart;
