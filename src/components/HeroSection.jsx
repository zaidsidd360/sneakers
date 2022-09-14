import React from "react";
import SplineComponent from "./SplineComponent";
import Details from "./Details";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full justify-center items-center md:mt-12 mb-9 md:mb-0">
      <div className="w-full md:w-[40%] h-[50vh] md:h-[67vh]">
        <SplineComponent />
      </div>
      <div className="w-full md:w-[40%] px-10 md:pl-16">
        <Details />
      </div>
    </div>
  );
};

export default HeroSection;
