import React from "react";
import useIntersectionObserver from "../Hooks/InterseccitonObserver";

export const Fiesta = () => {
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
          src="https://media.tenor.com/PBym7KA4_1cAAAAj/happy-birthday-birthday-cake.gif"
          alt=""
          className="mx-auto w-[180px] "
          loading="lazy"
        />
      </div>
      <h1
        className="text-4xl text-blue-800 font-semibold my-[3rem] opacity-0"
        ref={useAnimateFadeUp}
      >
        Fiesta
      </h1>
      <div className="text-2xl opacity-0" ref={useAnimateFadeRight}>
        11:30 hrs
      </div>
      <div className="text-3xl opacity-0" ref={useAnimateFadeLeft}>
        Jardín de eventos Clavelina.
      </div>
      <a href="https://maps.app.goo.gl/jm8UP1qfnqfByLvg9" target="_blank">
        <button className="my-4 rounded-full py-1 bg-blue-500 w-[60%] mx-auto text-white text-lg hover:scale-105 transition duration-300 ease-in-out">
          Ver Mapa
        </button>
      </a>
    </div>
  );
};
