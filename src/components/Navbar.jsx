import React from "react";
import Logo from "../assets/logo.svg";
import Cart from "../assets/icon-cart.svg";
import Avatar from "../assets/image-avatar.png";

const Navbar = () => {
  return (
    <div className="flex justify-center h-[108px]">
      <ul className="flex items-center w-[80vw] border-b-2 border-gray-200">
        <li>
          <img className="py-10 mr-6 cursor-pointer" src={Logo} alt="" />
        </li>
        <li className="navli">Collections</li>
        <li className="navli">Men</li>
        <li className="navli">Women</li>
        <li className="navli">About</li>
        <li className="navli">Contact</li>
        <div className="flex items-center justify-between ml-auto">
          <li>
            <img src={Cart} alt="" />
          </li>
          <li>
            <img className="w-10 h-10 ml-6" src={Avatar} alt="" />
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
