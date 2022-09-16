import React from "react";
import JordanRed from "../assets/jordanred.png";
import JordanGreen from "../assets/jordangreen.png";
import Delete from "../assets/icon-delete.svg";

const Cart = ({ cartValue, setCartValue, isGreen }) => {
  return (
    <div className="rounded-xl shadow-2xl h-[275px] w-[100vw] md:w-[400px] md:mx-2 bg-white">
      <div className="pl-8 flex justify-start items-center w-full h-[25%] border-b-2 font-bold text-base">
        Cart
      </div>
      {cartValue > 0 ? (
        <div>
          <div className="flex items-center justify-evenly w-full my-3">
            <img
              className="w-24 h-24"
              src={isGreen ? JordanGreen : JordanRed}
              alt=""
            />
            <div>
              <h5 className="font-bold text-gray-400">Air Jordan 1</h5>
              <h6 className="font-bold text-gray-400">Varsity leader</h6>
              <p className="text-gray-400 font-bold">
                Qty.: <strong className="text-black">{cartValue}</strong> Total:{" "}
                <strong className="text-black">${cartValue * 420.69}</strong>
              </p>
            </div>
            <img
              onClick={() => {
                setCartValue(0);
              }}
              className="w-4 cursor-pointer"
              src={Delete}
              alt=""
            />
          </div>
          <div
            className={
              isGreen
                ? "flex items-center justify-center w-[85%] h-14 mx-auto text-white bg-[#748220] hover:bg-[#8ea028] rounded-xl cursor-pointer"
                : "flex items-center justify-center w-[85%] h-14 mx-auto text-white bg-[#962827] hover:bg-[#b63532] rounded-xl cursor-pointer"
            }
          >
            Checkout
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-[100px]">
          <h5>Your cart is empty.</h5>
        </div>
      )}
    </div>
  );
};

export default Cart;
