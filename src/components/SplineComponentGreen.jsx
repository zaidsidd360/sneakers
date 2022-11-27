import React, { Suspense } from "react";
import Spline from "@splinetool/react-spline";

const SplineComponentGreen = ({ windowWidth }) => {
  const handleLoad = (spline) => {
    windowWidth < 400 ? spline.setZoom(0.46) : spline.setZoom(0.85);
  };
  return (
    <Suspense fallback={<div>Loading 3d model...</div>}>
      <Spline
        onLoad={handleLoad}
        scene={"https://prod.spline.design/Xowfr6QZF2y0KQiG/scene.splinecode"}
      />
    </Suspense>
  );
};

export default SplineComponentGreen;
