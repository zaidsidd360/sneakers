import React from "react";
import SplineComponent from "./SplineComponent";
import Details from "./Details";

const HeroSection = () => {
  return (
    <div className="flex w-full h-full justify-center items-center mt-12">
      <div className="w-[40%] h-[67vh]">
        <SplineComponent />
      </div>
      <div className="w-[40%] pl-16">
        <Details />
      </div>
    </div>
  );
};

export default HeroSection;
