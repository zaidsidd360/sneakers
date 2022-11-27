import React, { useState, useEffect } from "react";
import SplineComponentRed from "./SplineComponentRed";
import SplineComponentGreen from "./SplineComponentGreen";
import Details from "./Details";

const HeroSection = ({ cartValue, setCartValue, isGreen, setIsGreen }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.onresize = handleResize;
  }, [windowWidth]);

  return (
    <div className="flex flex-col md:flex-row w-full h-full justify-center items-center md:mt-12 mb-9 md:mb-0">
      <div className="w-full md:w-[40%] h-[50vh] md:h-[67vh] flex justify-center items-center">
        {isGreen ? (
          <SplineComponentGreen windowWidth={windowWidth} />
        ) : (
          <SplineComponentRed windowWidth={windowWidth} />
        )}
      </div>
      <div className="w-full md:w-[40%] px-7 md:pl-20">
        <Details
          cartValue={cartValue}
          setCartValue={setCartValue}
          isGreen={isGreen}
          setIsGreen={setIsGreen}
        />
      </div>
    </div>
  );
};

export default HeroSection;
