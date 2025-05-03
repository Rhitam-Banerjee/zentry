import { useEffect, useState } from "react";

const useResponsiveClipPathHero = () => {
  const [clipPathD, setClipPathD] = useState({
    initial: "",
    middle: "",
    final: "",
  });

  const getInitialPath = (screenWidth) => {
    const offsetX1 = 10.141;
    const offsetX2 = 18.141;

    const dynamicX1 = screenWidth + offsetX1;
    const dynamicX2 = screenWidth + offsetX2;

    // Define the constant coordinates
    const constX1 = 5;
    const constX2 = -3;

    const constY1 = -3;
    const constY2 = 5;
    const constY3 = 854.422;
    const constY4 = 862.422;

    const pathData =
      `M ${dynamicX1} ${constY1} ` +
      `L ${dynamicX1} ${constY1} ` + // This L command seems redundant but kept as per your original paths
      `Q ${dynamicX2} ${constY1} ${dynamicX2} ${constY2} ` + // Top-right rounded corner
      `L ${dynamicX2} ${constY3} ` + // Right vertical line
      `Q ${dynamicX2} ${constY4} ${dynamicX1} ${constY4} ` + // Bottom-right rounded corner
      `L ${constX1} ${constY4} ` + // Bottom horizontal line
      `Q ${constX2} ${constY4} ${constX2} ${constY3} ` + // Bottom-left rounded corner
      `L ${constX2} ${constY2} ` + // Left vertical line
      `Q ${constX2} ${constY1} ${constX1} ${constY1} ` + // Top-left rounded corner
      `Z`; // Close the path

    return pathData;
  };
  const getMiddlePath = (screenWidth) => {
    const mxRatio = 0.72703;
    const coeffs = {
      Mx: { a: 0.6756, b: 57.684 },
      My: { a: 0.1106, b: 208.856 },
      Q1x1: { a: 0.6754, b: 65.602 },
      Q1y1: { a: 0.1113, b: 210.212 },
      Q1x: { a: 0.6775, b: 67.08 },
      Q1y: { a: 0.1106, b: 218.781 },
      L1x: { a: 0.7685, b: 95.075 },
      L1y: { a: 0.0202, b: 709.486 },
      Q2x1: { a: 0.7706, b: 96.064 },
      Q2y1: { a: 0.0196, b: 717.66 },
      Q2x: { a: 0.7707, b: 84.072 },
      Q2y: { a: 0.0187, b: 717.437 },
      L2x: { a: 0.0408, b: 30.835 },
      L2y: { a: -0.1692, b: 806.852 },
      Q3x1: { a: 0.0409, b: 22.767 },
      Q3y1: { a: -0.17, b: 806.345 }, // Adjusted slightly from table due to rounding
      Q3x: { a: 0.0447, b: 21.559 },
      Q3y: { a: -0.1683, b: 797.342 },
      L3x: { a: 0.251, b: -15.977 },
      L3y: { a: -0.0466, b: 249.1 },
      Q4x1: { a: 0.2549, b: -17.841 },
      Q4y1: { a: -0.0449, b: 240.053 },
      Q4x: { a: 0.2547, b: -8.423 },
      Q4y: { a: -0.0443, b: 241.336 },
    };
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

  useEffect(() => {
    function updateClipPath() {
      const w = window.innerWidth;

      let initialPath = getInitialPath(w);
      let middlePath = getMiddlePath(w);

      let finalPath = `M ${0.931 * w - 34.3} 185.647
    L ${0.931 * w - 34.3} 185.647
    Q ${0.947 * w - 32.8} 186.339 ${0.95 * w - 28.9} 194.137
    L ${0.99 * w + 2.2} 786.123
    Q ${0.993 * w + 4.0} 793.92 ${0.986 * w + 2.0} 794.063
    L ${-0.996 * w + 462.0} 819.577
    Q ${-1.0 * w + 460.0} 819.72 ${-0.994 * w + 450.6} 812.027
    L ${1.286 * w - 432.0} 98.3966
    Q ${1.291 * w - 435.0} 90.7035 ${1.297 * w - 438.5} 91.3961
    Z`;

      initialPath = initialPath.replace(/\s+/g, " ").trim();
      middlePath = middlePath.replace(/\s+/g, " ").trim();
      finalPath = finalPath.replace(/\s+/g, " ").trim();

      setClipPathD({
        initial: initialPath,
        middle: middlePath,
        final: finalPath,
      });
    }

    updateClipPath();

    window.addEventListener("resize", updateClipPath);

    return () => window.removeEventListener("resize", updateClipPath);
  }, []);

  return clipPathD;
};
export default useResponsiveClipPathHero;
