import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import CartImage from "../assets/icon-cart.svg";
import Avatar from "../assets/image-avatar.png";
import Cart from "./Cart";
import Ham from "../assets/icon-menu.svg";
import Close from "../assets/icon-close.svg";

const Navbar = ({ cartValue, setCartValue, isGreen }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  return (
    <div className="flex justify-center h-[108px]">
      <ul className="flex items-center px-5 md:px-0 w-full md:w-[70vw] border-b-2 border-gray-200 md:relative fixed top-0 bg-white">
        <li
          onClick={() => {
            setNavToggle(!navToggle);
            setCartOpen(false);
          }}
          className="absolute z-30 md:hidden"
        >
          <img className="w-4 h-4 mr-3" src={navToggle ? Close : Ham} alt="" />
        </li>
        <div
          className={
            navToggle
              ? "absolute flex flex-col items-start pl-7 pt-16 top-0 left-0 h-[100vh] w-[65vw] bg-white duration-300 ease-in-out shadow-2xl md:hidden"
              : "absolute flex flex-col items-start pl-7 pt-16 top-0 left-0 h-[100vh] w-[65vw] bg-white -translate-x-96 duration-300 ease-in-out md:hidden"
          }
        >
          <li className="py-2">Collections</li>
          <li className="py-2">Men</li>
          <li className="py-2">Women</li>
          <li className="py-2">About</li>
          <li className="py-2">Contact</li>
        </div>
        <li>
          <img className="py-10 mr-6 ml-6 cursor-pointer" src={Logo} alt="" />
        </li>
        <li
          className={
            isGreen ? "navligreen hidden md:flex" : "navli hidden md:flex"
          }
        >
          Collections
        </li>
        <li
          className={
            isGreen ? "navligreen hidden md:flex" : "navli hidden md:flex"
          }
        >
          Men
        </li>
        <li
          className={
            isGreen ? "navligreen hidden md:flex" : "navli hidden md:flex"
          }
        >
          Women
        </li>
        <li
          className={
            isGreen ? "navligreen hidden md:flex" : "navli hidden md:flex"
          }
        >
          About
        </li>
        <li
          className={
            isGreen ? "navligreen hidden md:flex" : "navli hidden md:flex"
          }
        >
          Contact
        </li>
        <div
          className={
            cartOpen
              ? "absolute top-24 right-0 md:-right-32 duration-300 ease-in-out"
              : "absolute -top-[500px] right-0 md:-right-32 duration-300 ease-in-out"
          }
        >
          <Cart
            cartValue={cartValue}
            setCartValue={setCartValue}
            isGreen={isGreen}
          />
        </div>
        <div className="flex items-center justify-between ml-auto">
          <li
            className="cursor-pointer relative"
            onClick={() => {
              !navToggle ? setCartOpen(!cartOpen) : null;
            }}
          >
            <img className="w-5 h-5 md:w-6 md:h-6" src={CartImage} alt="" />
            {cartValue && !cartOpen ? (
              <div
                className={
                  isGreen
                    ? "absolute -top-3 -right-3 bg-[#748220] text-white w-3 h-3 flex items-center justify-center p-3 rounded-full"
                    : "absolute -top-3 -right-3 bg-[#962827] text-white w-3 h-3 flex items-center justify-center p-3 rounded-full"
                }
              >
                {cartValue}
              </div>
            ) : null}
          </li>
          <li>
            <img
              className={
                isGreen
                  ? "w-7 h-7 md:w-10 md:h-10 ml-6 cursor-pointer rounded-full hover:border-[#748220] hover:border-2"
                  : "w-7 h-7 md:w-10 md:h-10 ml-6 cursor-pointer rounded-full hover:border-[#962827] hover:border-2"
              }
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
