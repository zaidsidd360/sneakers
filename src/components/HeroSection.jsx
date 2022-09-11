import React from "react";
import SplineComponent from "./SplineComponent";
import Details from "./Details";

const HeroSection = () => {
  return (
    <div className="flex w-full justify-center items-center mt-24">
      <div className="w-[40%] h-[60vh]">
        <SplineComponent />
      </div>
      <div className="w-[40%] pl-16">
        <Details />
      </div>
    </div>
  );
};

export default HeroSection;
