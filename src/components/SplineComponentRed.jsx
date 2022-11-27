import React, { Suspense } from "react";
import Spline from "@splinetool/react-spline";

const SplineComponentRed = ({ windowWidth }) => {
  const handleLoad = (spline) => {
    windowWidth < 400 ? spline.setZoom(0.46) : spline.setZoom(0.85);
  };
  return (
    <Suspense fallback={<div>Loading 3d model...</div>}>
      <Spline
        onLoad={handleLoad}
        scene={"https://prod.spline.design/qRiCG8INnQwngVOk/scene.splinecode"}
      />
    </Suspense>
  );
};

export default SplineComponentRed;
