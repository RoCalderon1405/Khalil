import React from "react";
import useIntersectionObserver from "../Hooks/InterseccitonObserver";
import { Khalil1 } from "../importsImg";

export const Khalil2 = () => {
  const animateFade = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade",
          "animate-duration-[1200ms]",
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
    <div className="mx-auto mt-10 w-full flex flex-col text-black font-bold text-center p-5 border-4 border-sky-500 rounded-3xl shadow-[0_1px_35px_rgba(55,102,255,0.6)]">
    <div className="opacity-0" ref={useAnimateFade}>
      <img
        src={Khalil1}
        alt=""
        className="mx-auto w-[180px] drop-shadow-[0_35px_35px_rgba(55,102,255,0.45)]"
        loading="lazy"
      />
    </div>

    <h1 className="text-4xl text-blue-800 font-semibold  mb-[3rem] opacity-0" ref={useAnimateFadeUp}>
      Regalos sugeridos
    </h1>
    <div className="text-3xl opacity-0" ref={useAnimateFadeLeft}>Evento: 51303041</div>
    <div className="text-3xl opacity-0" ref={useAnimateFadeRight}>Liverpool</div>

    <a href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51303041" className="border-2 border-blue-600 my-4 rounded-full py-1 bg-transparent w-[60%] mx-auto text-black text-lg hover:bg-blue-600 hover:border-black/60 hover:text-white hover:scale-105 transition duration-300 ease-in-out">
      Liverpool
    </a>
  </div>
  );
};
