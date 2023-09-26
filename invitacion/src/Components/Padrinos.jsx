import React from "react";
import useIntersectionObserver from "../Hooks/InterseccitonObserver";
import { Khalil2 } from "../importsImg";

export const Padrinos = () => {
  const animateFadeLeft = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade-left",
          "animate-duration-[1200ms]",
          "animate-ease-in-out",
          "opacity:100"
        );
      } else {
        entry.target.classList.remove(
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
      } else {
        entry.target.classList.remove(
          "animate-fade-up",
          "animate-duration-[1200ms]",
          "animate-ease-in-out",
          "opacity:100"
        );
      }
    });
  };
  const animateFadeDown = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade-down",
          "animate-duration-[1200ms]",
          "animate-ease-in-out",
          "opacity:100"
        );
      } else {
        entry.target.classList.remove(
          "animate-fade-down",
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
      } else {
        entry.target.classList.remove(
          "animate-fade-right",
          "animate-duration-[1200ms]",
          "animate-ease-in-out",
          "opacity:100"
        );
      }
    });
  };

  const useAnimateFadeLeft = useIntersectionObserver(animateFadeLeft, {
    threshold: 0.1,
  });
  const useAnimateFadeLeft1 = useIntersectionObserver(animateFadeLeft, {
    threshold: 0.1,
  });
  const useAnimateFadeRight = useIntersectionObserver(animateFadeRight, {
    threshold: 0.1,
  });
  const useAnimateFadeUp = useIntersectionObserver(animateFadeUp, {
    threshold: 0.1,
  });

  return (
    <div className="mx-auto mt-10 w-full flex flex-col text-black font-bold text-center p-5 border-4 border-sky-500 rounded-3xl shadow-[0_1px_35px_rgba(55,102,255,0.6)]">
      <h1
        className="text-4xl text-blue-800 font-semibold my-[3rem] opacity-0"
        ref={useAnimateFadeUp}
      >
        Mis padrinos:
      </h1>
      <div className="text-3xl mb-5 opacity-0" ref={useAnimateFadeRight}>
        Johany Saúl <br />
        Bautista García
      </div>
      <div className="text-3xl mb-5 opacity-0" ref={useAnimateFadeLeft}>
        Mariana <br />
        Vázquez Silva
      </div>
    </div>
  );
};
