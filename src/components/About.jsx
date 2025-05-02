import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.set(".mask-clip-path-about", {
      clipPath:
        "path('M 947.773 148.623 L 947.773 148.623 Q 955.353 151.181 956.735 159.06 L 1036.83 616.034 Q 1038.21 623.914 1030.22 624.328 L 651.484 643.916 Q 643.495 644.329 643.614 636.33 L 652.251 56.9489 Q 652.37 48.9497 659.95 51.5074 Z')",
      scale: 1.1,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#clip",
          start: "center center",
          end: "+=800 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      })
      .to(".mask-clip-path-about", {
        clipPath:
          "path('M 1631.85 -394.141 L 1631.85 -394.141 Q 1639.85 -394.141 1639.85 -386.141 L 1639.85 1246.14 Q 1639.85 1254.14 1631.85 1254.14 L -0.429688 1254.14 Q -8.42969 1254.14 -8.42969 1246.14 L -8.42969 -386.141 Q -8.42969 -394.141 -0.429688 -394.141 Z')",
        scale: 1,
      });
  });
  return (
    <div id="about" className="min-h-screen w-screen overflow-hidden">
      <div className="relative mb-8 mt-36 flex flex-col">
        <h2 className="font-general text-sm text-center uppercase md:text-[10px]">
          Welcome to Zentry
        </h2>
        <AnimatedTitle
          title={
            "Disc<b>o</b>ver the world's <br /> l<b>a</b>rgest shared <b>a</b>dventure"
          }
          containerClass="mt-5 text-center text-4xl uppercase leading-[0.8] !text-black md:text-[6rem]"
        />
        <div className="about-subtext">
          <p>The Game of Games begins-your life, now an epic MMORPG</p>
          <p>Zentry unites every player from countless games and platform</p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <img
          src="img/about-float.webp"
          alt="background"
          className="absolute left-0 top-0 z-40 w-full object-cover"
        />
        <div className="mask-clip-path-about about-image-mod">
          <img
            src="img/about.webp"
            alt="background"
            className="absolute left-0 top-0 w-full object-cover origin-center"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
