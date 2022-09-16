import React, { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

const SplineComponentGreen = ({ mobile }) => {
  return (
    <Suspense fallback={<div>Loading 3d model...</div>}>
      <Spline
        scene={
          mobile
            ? "https://prod.spline.design/ztDdIqf4uTrdGRAk/scene.splinecode"
            : "https://prod.spline.design/Xowfr6QZF2y0KQiG/scene.splinecode"
        }
      />
    </Suspense>
  );
};

export default SplineComponentGreen;
