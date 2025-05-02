import { useEffect, useState } from "react";

const useResponsiveClipPathHero = () => {
  const [clipPathD, setClipPathD] = useState({
    initial: "",
    middle: "",
    final: "",
  });

  useEffect(() => {
    function updateClipPath() {
      const w = window.innerWidth;

      let initialPath = `
        M ${w} -3 
        L ${w} -3 
        Q ${w + 8} -3 ${w + 8} 5 
        L ${w + 8} 854.422 
        Q ${w + 8} 862.422 ${w} 862.422 
        L 5 862.422 
        Q -3 862.422 -3 854.422 
        L -3 5 
        Q -3 -3 5 -3 
        Z
      `;

      let middlePath = `M ${0.931 * w - 34.3} 185.647
    L ${0.931 * w - 34.3} 185.647
    Q ${0.947 * w - 32.8} 186.339 ${0.95 * w - 28.9} 194.137
    L ${0.99 * w + 2.2} 786.123
    Q ${0.993 * w + 4.0} 793.92 ${0.986 * w + 2.0} 794.063
    L ${-0.996 * w + 462.0} 819.577
    Q ${-1.0 * w + 460.0} 819.72 ${-0.994 * w + 450.6} 812.027
    L ${1.286 * w - 432.0} 98.3966
    Q ${1.291 * w - 435.0} 90.7035 ${1.297 * w - 438.5} 91.3961
    Z`;

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
