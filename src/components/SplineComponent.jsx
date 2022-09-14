import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";

const SplineComponent = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < "400") {
      setMobile(true);
    } else setMobile(false);
  }, [window.innerWidth]);

  return (
    // <Spline scene="https://prod.spline.design/qRiCG8INnQwngVOk/scene.splinecode" />
    <Spline
      scene={
        mobile
          ? "https://prod.spline.design/arS1AKZvFrQNOUO1/scene.splinecode"
          : "https://prod.spline.design/qRiCG8INnQwngVOk/scene.splinecode"
      }
    />
  );
};

export default SplineComponent;
