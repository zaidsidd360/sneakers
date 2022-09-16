import React, { useState, useContext } from "react";
import PlusRed from "../assets/icon-plus.svg";
import MinusRed from "../assets/icon-minus.svg";
import PlusGreen from "../assets/icon-plus-green.svg";
import MinusGreen from "../assets/icon-minus-green.svg";
import CartImage from "../assets/icon-cartbottom.svg";

const Details = ({ cartValue, setCartValue, isGreen, setIsGreen }) => {
  const [itemNumber, setItemNumber] = useState(0);

  const handleAddToCart = () => {
    setCartValue(cartValue + itemNumber);
  };
  return (
    <div>
      <h1 className="font-bold text-4xl md:text-6xl">Air Jordan 1</h1>
      <br />
      <h2 className="font-bold text-2xl md:text-4xl">
        Varsity {isGreen ? "chieftain" : "leader"}
      </h2>
      <div className="flex w-20 justify-start mt-3">
        <div
          onClick={() => {
            setIsGreen(false);
          }}
          className="w-5 h-5 md:w-8 md:h-8 bg-[#962827] rounded-full cursor-pointer mr-2"
          id={!isGreen ? "border-black" : null}
        ></div>
        <div
          onClick={() => {
            setIsGreen(true);
          }}
          className="w-5 h-5 md:w-8 md:h-8 bg-[#748220] rounded-full cursor-pointer"
          id={isGreen ? "border-black" : null}
        ></div>
      </div>
      <p className="mt-4 max-w-xl text-base md:text-xl text-justify md:text-left">
        "Quality inspired by the greatest player ever". That pretty much sums up
        MJ's original signature shoe, dressed down in an understated colourway.
        Richly textured leather done in Stealth and white ages to pure
        perfection, while classic branding honours the look that redefined
        basketball and off-court style as we know it.
      </p>
      <h1 className="font-bold text-2xl mt-8">$420.69</h1>
      <h3 className="font-bold text-gray-400 line-through my-2">$500.00</h3>
      <div className="flex flex-col items-center md:flex-row">
        <div className="flex justify-between items-center h-10 md:h-14 w-full md:w-[20%] bg-gray-200 p-2 md:p-4 rounded-lg md:rounded-xl">
          <img
            onClick={() => {
              setItemNumber(itemNumber + 1);
            }}
            className="cursor-pointer w-4 h-auto"
            src={isGreen ? PlusGreen : PlusRed}
            alt="plus"
          />
          {itemNumber}
          <img
            onClick={() => {
              itemNumber > 0 && setItemNumber(itemNumber - 1);
            }}
            className="cursor-pointer w-4 h-auto"
            src={isGreen ? MinusGreen : MinusRed}
            alt="minus"
          />
        </div>
        <div
          onClick={handleAddToCart}
          className={
            isGreen
              ? "flex justify-center items-center h-10 md:h-14 w-full md:w-[40%] p-4 mt-3 md:mt-0 md:ml-3 text-white bg-[#748220] hover:bg-[#8ea028] rounded-xl cursor-pointer shadowminegreen"
              : "flex justify-center items-center h-10 md:h-14 w-full md:w-[40%] p-4 mt-3 md:mt-0 md:ml-3 text-white bg-[#962827] hover:bg-[#b63532] rounded-xl cursor-pointer shadowmine"
          }
        >
          <img className="w-5 h-5 mr-2" src={CartImage} alt="" /> Add to cart
        </div>
      </div>
    </div>
  );
};

export default Details;
