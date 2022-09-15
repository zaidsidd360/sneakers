import React from "react";
import SplineComponent from "./SplineComponent";
import Details from "./Details";

const HeroSection = ({ cartValue, setCartValue }) => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full justify-center items-center md:mt-12 mb-9 md:mb-0">
      <div className="w-full md:w-[40%] h-[50vh] md:h-[67vh]">
        {/* <div className="flex justify-start pl-5 md:pl-28">
          <p className="w-auto text-center bg-gray-400 px-3 py-2 md:px-4 md:py-3 rounded-3xl backdrop-blur-md">
            hold + drag
          </p>
        </div> */}
        <SplineComponent />
      </div>
      <div className="w-full md:w-[40%] px-10 md:pl-20">
        <Details cartValue={cartValue} setCartValue={setCartValue} />
      </div>
    </div>
  );
};

export default HeroSection;
