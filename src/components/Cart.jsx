import React from "react";

const Cart = () => {
  return (
    <div className="rounded-xl shadow-xl h-[300px] w-[400px] bg-white">
      <div className="flex justify-start items-center w-full h-[25%] border-b-2">
        Cart
      </div>
      <div className="flex justify-center w-full h-[75%]">
        {"Your cart is empty."}
      </div>
    </div>
  );
};

export default Cart;
