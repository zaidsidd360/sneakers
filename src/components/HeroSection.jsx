import React from "react";
import SplineComponent from "./SplineComponent";
import Details from "./Details";

const HeroSection = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="w-[40vw] h-[80vh]">
        <SplineComponent />
      </div>
      <div className="w-[40vw]">
        <Details />
      </div>
    </div>
  );
};

export default HeroSection;
