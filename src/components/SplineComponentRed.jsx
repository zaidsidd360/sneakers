import React, { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

const SplineComponentRed = ({ mobile }) => {
  return (
    <Suspense fallback={<div>Loading 3d model...</div>}>
      <Spline
        scene={
          mobile
            ? "https://prod.spline.design/W1LC6n2lPFqG0-Uc/scene.splinecode"
            : "https://prod.spline.design/qRiCG8INnQwngVOk/scene.splinecode"
        }
      />
    </Suspense>
  );
};

export default SplineComponentRed;
