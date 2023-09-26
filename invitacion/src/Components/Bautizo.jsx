import React from "react";
import useIntersectionObserver from "../Hooks/InterseccitonObserver";
import { Khalil2 } from "../importsImg";

export const Bautizo = () => {
  
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
  const useAnimateFadeDown = useIntersectionObserver(animateFadeDown, {
    threshold: 0.1,
  });

  return (
    <div className="mx-auto mt-10 p-5 w-full text-center border-4 border-sky-500 rounded-3xl shadow-[0_1px_35px_rgba(55,102,255,0.6)] ">
        <div className="">
          <h1
            className="text-4xl text-blue-800 font-semibold my-[2rem] opacity-0"
            ref={useAnimateFadeDown}
          >
            ¡Te Invito a <br /> Mi bautizo!
          </h1>
          <h1
            className="text-4xl text-blue-800 font-semibold mb-[2rem] opacity-0"
            ref={useAnimateFadeUp}
          >
            1 año
          </h1>
        </div>
        <div className="flex flex-col mb-3 items-center font-semibold space-y-2">
          <p className="text-2xl opacity-0" ref={useAnimateFadeLeft}>
            Fecha: 26/Noviembre/2023
          </p>
          <p className="text-2xl opacity-0" ref={useAnimateFadeRight}>
            Hora: 11:30 hrs
          </p>
          <p className="text-2xl opacity-0" ref={useAnimateFadeLeft1}>
            Lugar: Jardín de eventos Clavelina
          </p>
        </div>
      </div>

  );
};
