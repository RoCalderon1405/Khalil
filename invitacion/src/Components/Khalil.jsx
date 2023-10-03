import React from "react";
import useIntersectionObserver from "../Hooks/InterseccitonObserver";
import { Khalil2 } from "../importsImg";

export const Khalil = () => {
  const animateFade = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade",
          "animate-duration-[1500ms]",
          "animate-ease-in-out",
          "opacity:100"
        );
      }
    });
  };
  const animateFadeLeft = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade-left",
          "animate-duration-[1200ms]",
          "animate-ease-in-out",
          "opacity:100"
        );
      }
    });
  };
  const animateFadeUp = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade-up",
          "animate-duration-[1200ms]",
          "animate-ease-in-out",
          "opacity:100"
        );
      }
    });
  };
  const animateFadeRight = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade-right",
          "animate-duration-[1200ms]",
          "animate-ease-in-out",
          "opacity:100"
        );
      }
    });
  };

  const useAnimateFade = useIntersectionObserver(animateFade, {
    threshold: 0.1,
  });
  const useAnimateFadeLeft = useIntersectionObserver(animateFadeLeft, {
    threshold: 0.1,
  });
  const useAnimateFadeRight = useIntersectionObserver(animateFadeRight, {
    threshold: 0.1,
  });
  const useAnimateFadeUp = useIntersectionObserver(animateFadeUp, {
    threshold: 0.1,
  });

  return (
    <div className="w-full mt-10 flex flex-col text-black font-bold text-center border-4 border-sky-500 rounded-3xl p-5 shadow-[0_1px_35px_rgba(55,102,255,0.6)]">
      <div className="z-10 ">
        <h1 className="text-5xl opacity-0" ref={useAnimateFadeLeft}>
          Khalil
        </h1>
        <h1 className="text-4xl mt-4 opacity-0" ref={useAnimateFadeRight}>
          Camacho Uscanga
        </h1>
        <p className="text-3xl mt-5 opacity-0" ref={useAnimateFadeUp}>
          Mi bautizo
        </p>
        <img
          src={Khalil2}
          alt=""
          className="w-full rounded-full mx-auto my-5 opacity-0"
          ref={useAnimateFade}
          loading="eager"
        />
      </div>
    </div>
  );
};
