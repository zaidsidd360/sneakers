import React, { useState } from "react";
import Plus from "../assets/icon-plus.svg";
import Minus from "../assets/icon-minus.svg";
import CartImage from "../assets/icon-cartbottom.svg";

const Details = () => {
  const [itemNumber, setItemNumber] = useState(0);
  return (
    <div>
      <h1 className="font-bold text-6xl">Air Jordan 1</h1>
      <br />
      <h2 className="font-bold text-4xl">Varsity leader</h2>
      <p className="mt-8 max-w-xl text-xl">
        "Quality inspired by the greatest player ever". That pretty much sums up
        MJ's original signature shoe, dressed down in an understated colourway.
        Richly textured leather done in Stealth and white ages to pure
        perfection, while classic branding honours the look that redefined
        basketball and off-court style as we know it.
      </p>
      <h1 className="font-bold text-2xl mt-4">$250.00</h1>
      <h3 className="font-bold text-gray-400 line-through my-2">$500.00</h3>
      <div className="flex">
        <div className="flex justify-between items-center w-[20%] bg-gray-200 p-4 rounded-xl">
          <img
            onClick={() => {
              setItemNumber(itemNumber + 1);
            }}
            className="cursor-pointer w-5 h-auto"
            src={Plus}
            alt="plus"
          />
          {itemNumber}
          <img
            onClick={() => {
              itemNumber > 0 && setItemNumber(itemNumber - 1);
            }}
            className="cursor-pointer w-5 h-auto"
            src={Minus}
            alt="minus"
          />
        </div>
        <div className="flex justify-center items-center w-[40%] p-4 ml-3 text-white bg-[#962827] hover:bg-[#b63532] rounded-xl cursor-pointer shadowmine">
          <img className="w-5 h-5 mr-2" src={CartImage} alt="" /> Add to cart
        </div>
      </div>
    </div>
  );
};

export default Details;
