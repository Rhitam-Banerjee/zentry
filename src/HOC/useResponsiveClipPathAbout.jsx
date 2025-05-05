import { useCallback, useEffect, useState } from "react";

const useResponsiveClipPathAbout = () => {
  const [clipPathD, setClipPathD] = useState({
    initialPath: "",
    finalPath: "",
  });

  const getInitialPath = (screenWidth) => {
    const coeffs = {
      Mx: { a: 0.5106, b: 135.939 },
      My: { a: -0.0147, b: 254.381 },
      Q1x1: { a: 0.5106, b: 143.295 },
      Q1y1: { a: -0.0146, b: 257.354 },
      Q1x: { a: 0.5107, b: 144.979 },
      Q1y: { a: -0.0146, b: 265.242 },
      L1x: { a: 0.5315, b: 254.163 },
      L1y: { a: 0.0466, b: 752.157 },
      Q2x1: { a: 0.5316, b: 255.847 },
      Q2y1: { a: 0.0466, b: 759.988 },
      Q2x: { a: 0.5316, b: 247.853 },
      Q2y: { a: 0.0469, b: 759.591 },
      L2x: { a: 0.4459, b: -196.709 },
      L2y: { a: 0.0757, b: 750.612 },
      Q3x1: { a: 0.4459, b: -204.716 },
      Q3y1: { a: 0.0761, b: 750.483 },
      Q3x: { a: 0.4461, b: -205.69 },
      Q3y: { a: 0.0761, b: 742.493 },
      L3x: { a: 0.4766, b: -170.049 },
      L3y: { a: -0.0344, b: 137.993 },
      Q4x1: { a: 0.4768, b: -170.908 },
      Q4y1: { a: -0.0344, b: 129.963 },
      Q4x: { a: 0.4768, b: -163.528 },
      Q4y: { a: -0.0343, b: 133.083 },
    };

    // Calculate each coordinate based on the screen width
    const Mx = coeffs.Mx.a * screenWidth + coeffs.Mx.b;
    const My = coeffs.My.a * screenWidth + coeffs.My.b;
    const Q1x1 = coeffs.Q1x1.a * screenWidth + coeffs.Q1x1.b;
    const Q1y1 = coeffs.Q1y1.a * screenWidth + coeffs.Q1y1.b;
    const Q1x = coeffs.Q1x.a * screenWidth + coeffs.Q1x.b;
    const Q1y = coeffs.Q1y.a * screenWidth + coeffs.Q1y.b;
    const L1x = coeffs.L1x.a * screenWidth + coeffs.L1x.b;
    const L1y = coeffs.L1y.a * screenWidth + coeffs.L1y.b;
    const Q2x1 = coeffs.Q2x1.a * screenWidth + coeffs.Q2x1.b;
    const Q2y1 = coeffs.Q2y1.a * screenWidth + coeffs.Q2y1.b;
    const Q2x = coeffs.Q2x.a * screenWidth + coeffs.Q2x.b;
    const Q2y = coeffs.Q2y.a * screenWidth + coeffs.Q2y.b;
    const L2x = coeffs.L2x.a * screenWidth + coeffs.L2x.b;
    const L2y = coeffs.L2y.a * screenWidth + coeffs.L2y.b;
    const Q3x1 = coeffs.Q3x1.a * screenWidth + coeffs.Q3x1.b;
    const Q3y1 = coeffs.Q3y1.a * screenWidth + coeffs.Q3y1.b;
    const Q3x = coeffs.Q3x.a * screenWidth + coeffs.Q3x.b;
    const Q3y = coeffs.Q3y.a * screenWidth + coeffs.Q3y.b;
    const L3x = coeffs.L3x.a * screenWidth + coeffs.L3x.b;
    const L3y = coeffs.L3y.a * screenWidth + coeffs.L3y.b;
    const Q4x1 = coeffs.Q4x1.a * screenWidth + coeffs.Q4x1.b;
    const Q4y1 = coeffs.Q4y1.a * screenWidth + coeffs.Q4y1.b;
    const Q4x = coeffs.Q4x.a * screenWidth + coeffs.Q4x.b;
    const Q4y = coeffs.Q4y.a * screenWidth + coeffs.Q4y.b;

    // Construct the SVG path data string
    const pathData =
      `M ${Mx} ${My} ` +
      `L ${Mx} ${My} ` + // Redundant L command
      `Q ${Q1x1} ${Q1y1} ${Q1x} ${Q1y} ` +
      `L ${L1x} ${L1y} ` +
      `Q ${Q2x1} ${Q2y1} ${Q2x} ${Q2y} ` +
      `L ${L2x} ${L2y} ` +
      `Q ${Q3x1} ${Q3y1} ${Q3x} ${Q3y} ` +
      `L ${L3x} ${L3y} ` +
      `Q ${Q4x1} ${Q4y1} ${Q4x} ${Q4y} ` +
      `Z`;

    return pathData;
  };

  const getFinalPath = (screenWidth) => {
    const coeffs = {
      Mx: { a: 1, b: 0.0 },
      My: { a: -0.5036, b: 567.264 },
      Q1x1: { a: 1, b: 8.0 },
      Q1y1: { a: -0.5036, b: 567.264 },
      Q1x: { a: 1, b: 8.0 },
      Q1y: { a: -0.5036, b: 575.264 },
      L1x: { a: 1, b: 8.0 },
      L1y: { a: 0.5037, b: 574.418 },
      Q2x1: { a: 1, b: 8.0 },
      Q2y1: { a: 0.5037, b: 582.418 },
      Q2x: { a: 1, b: 0.0 },
      Q2y: { a: 0.5037, b: 582.418 },
      L2x: { a: -0.0001, b: -2.807 },
      L2y: { a: 0.5037, b: 582.418 },
      Q3x1: { a: -0.0001, b: -10.807 },
      Q3y1: { a: 0.5037, b: 582.418 },
      Q3x: { a: -0.0001, b: -10.807 },
      Q3y: { a: 0.5037, b: 574.418 },
      L3x: { a: -0.0001, b: -10.807 },
      L3y: { a: -0.5036, b: 575.264 },
      Q4x1: { a: -0.0001, b: -10.807 },
      Q4y1: { a: -0.5036, b: 567.264 },
      Q4x: { a: -0.0001, b: -2.807 },
      Q4y: { a: -0.5036, b: 567.264 },
    };

    // Calculate each coordinate based on the screen width
    const Mx = coeffs.Mx.a * screenWidth + coeffs.Mx.b;
    const My = coeffs.My.a * screenWidth + coeffs.My.b;
    const Q1x1 = coeffs.Q1x1.a * screenWidth + coeffs.Q1x1.b;
    const Q1y1 = coeffs.Q1y1.a * screenWidth + coeffs.Q1y1.b;
    const Q1x = coeffs.Q1x.a * screenWidth + coeffs.Q1x.b;
    const Q1y = coeffs.Q1y.a * screenWidth + coeffs.Q1y.b;
    const L1x = coeffs.L1x.a * screenWidth + coeffs.L1x.b;
    const L1y = coeffs.L1y.a * screenWidth + coeffs.L1y.b;
    const Q2x1 = coeffs.Q2x1.a * screenWidth + coeffs.Q2x1.b;
    const Q2y1 = coeffs.Q2y1.a * screenWidth + coeffs.Q2y1.b;
    const Q2x = coeffs.Q2x.a * screenWidth + coeffs.Q2x.b;
    const Q2y = coeffs.Q2y.a * screenWidth + coeffs.Q2y.b;
    const L2x = coeffs.L2x.a * screenWidth + coeffs.L2x.b;
    const L2y = coeffs.L2y.a * screenWidth + coeffs.L2y.b;
    const Q3x1 = coeffs.Q3x1.a * screenWidth + coeffs.Q3x1.b;
    const Q3y1 = coeffs.Q3y1.a * screenWidth + coeffs.Q3y1.b;
    const Q3x = coeffs.Q3x.a * screenWidth + coeffs.Q3x.b;
    const Q3y = coeffs.Q3y.a * screenWidth + coeffs.Q3y.b;
    const L3x = coeffs.L3x.a * screenWidth + coeffs.L3x.b;
    const L3y = coeffs.L3y.a * screenWidth + coeffs.L3y.b;
    const Q4x1 = coeffs.Q4x1.a * screenWidth + coeffs.Q4x1.b;
    const Q4y1 = coeffs.Q4y1.a * screenWidth + coeffs.Q4y1.b;
    const Q4x = coeffs.Q4x.a * screenWidth + coeffs.Q4x.b;
    const Q4y = coeffs.Q4y.a * screenWidth + coeffs.Q4y.b;

    // Construct the SVG path data string
    const pathData =
      `M ${Mx} ${My} ` +
      `L ${Mx} ${My} ` + // Redundant L command
      `Q ${Q1x1} ${Q1y1} ${Q1x} ${Q1y} ` +
      `L ${L1x} ${L1y} ` +
      `Q ${Q2x1} ${Q2y1} ${Q2x} ${Q2y} ` +
      `L ${L2x} ${L2y} ` +
      `Q ${Q3x1} ${Q3y1} ${Q3x} ${Q3y} ` +
      `L ${L3x} ${L3y} ` +
      `Q ${Q4x1} ${Q4y1} ${Q4x} ${Q4y} ` +
      `Z`;

    return pathData;
  };

  const updateClipPath = useCallback(() => {
    const w = window.innerWidth;
    let initialPath = getInitialPath(w);
    let finalPath = getFinalPath(w);
    initialPath = initialPath.replace(/\s+/g, " ").trim();
    finalPath = finalPath.replace(/\s+/g, " ").trim();

    setClipPathD({
      initialPath,
      finalPath,
    });
  }, []);

  useEffect(() => {
    updateClipPath();

    const handleResize = () => {
      updateClipPath();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return clipPathD;
};

export default useResponsiveClipPathAbout;
