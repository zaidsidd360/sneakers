import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import CartImage from "../assets/icon-cart.svg";
import Avatar from "../assets/image-avatar.png";
import Cart from "./Cart";
import CartContextProvider from "../contexts/CartItemContext";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <div className="flex justify-center h-[108px]">
      <ul className="flex items-center px-9 md:px-0 w-full md:w-[70vw] border-b-2 border-gray-200 md:relative fixed top-0 bg-white">
        <li>
          <img className="py-10 mr-6 cursor-pointer" src={Logo} alt="" />
        </li>
        <li className="navli hidden md:flex">Collections</li>
        <li className="navli hidden md:flex">Men</li>
        <li className="navli hidden md:flex">Women</li>
        <li className="navli hidden md:flex">About</li>
        <li className="navli hidden md:flex">Contact</li>
        <div
          className={
            cartOpen
              ? "absolute top-24 right-0 md:-right-32 duration-300 ease-in-out"
              : "absolute -top-[500px] right-0 md:-right-32 duration-300 ease-in-out"
          }
        >
          <CartContextProvider>
            <Cart />
          </CartContextProvider>
        </div>
        <div className="flex items-center justify-between ml-auto">
          <li
            className="cursor-pointer"
            onClick={() => {
              setCartOpen(!cartOpen);
            }}
          >
            <img src={CartImage} alt="" />
          </li>
          <li>
            <img
              className="w-10 h-10 ml-6 cursor-pointer rounded-full hover:border-orange-400 hover:border-2"
              src={Avatar}
              alt=""
            />
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
