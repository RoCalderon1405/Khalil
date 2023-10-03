import React from "react";
import useIntersectionObserver from "../Hooks/InterseccitonObserver";

export const Papis = () => {
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
    <div className="mx-auto mt-10 w-full flex flex-col text-black font-bold text-center p-5 border-4 border-sky-500 rounded-3xl shadow-[0_1px_35px_rgba(55,102,255,0.6)]">
      <h1
        className="text-4xl text-blue-800 font-semibold my-[3rem] opacity-0"
        ref={useAnimateFadeUp}
      >
        Mis papis:
      </h1>
      <div className="text-3xl mb-5 opacity-0" ref={useAnimateFadeLeft}>
        Raymundo
        <br /> Camacho Ramírez
      </div>
      <span className="text-3xl mb-5 opacity-0" ref={useAnimateFadeRight}>
        Luisa Maria
        <br />
        Uscanga Silva
      </span>
    </div>
  );
};
