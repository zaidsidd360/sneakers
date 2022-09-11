import React from "react";

const Cart = () => {
  return (
    <div className="rounded-xl shadow-2xl h-[300px] w-[400px] bg-white">
      <div className="pl-8 flex justify-start items-center w-full h-[25%] border-b-2 font-bold text-base">
        Cart
      </div>
      <div className="flex justify-center items-center w-full h-[75%]">
        {"Your cart is empty."}
      </div>
    </div>
  );
};

export default Cart;
