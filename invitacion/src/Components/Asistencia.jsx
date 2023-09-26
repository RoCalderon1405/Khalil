import React from "react";
import useIntersectionObserver from "../Hooks/InterseccitonObserver";
import { M1 } from "../importsImg";

export const Asistencia = () => {
  const animateFade = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade",
          "animate-duration-[1200ms]",
          "animate-ease-in-out",
          "opacity:100"
        );
      } else {
        entry.target.classList.remove(
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
    <div
        className="mx-auto mt-[3.5rem] w-full flex flex-col text-black font-bold text-center p-5 border-4 border-sky-500 rounded-3xl shadow-[0_1px_35px_rgba(55,102,255,0.6)]"
        id="contacto"
      >
        <h1
          className="text-4xl text-blue-800 font-semibold my-[3rem] opacity-0"
          ref={useAnimateFadeUp}
        >
          Confirma asistencia con:
        </h1>
        <div className="flex w-full justify-center">
          <div className="w-full opacity-0" ref={useAnimateFadeRight}>
            <a
              href="https://wa.me/+525576718993?text=¡Hola%20Luisa!%20Cuenta%20conmigo%20🌟,%20ahí%20estaré."
              target="_blank"
            >
              <button className="flex text-2xl font-bold mt-4 w-[80%] gap-2 justify-center items-center mx-auto border-4 rounded-lg p-1 bg-gradient-to-bl from-sky-400 to-cyan-300">
                Mamá
              </button>
            </a>
          </div>
          <div className="w-full opacity-0" ref={useAnimateFadeLeft}>
            <a
              href="https://wa.me/+525584018454?text=Jalo%20perro%20cochino%20ahí%20te%20wacho"
              target="_blank"
            >
              <button className="flex text-2xl font-bold mt-4 w-[80%] gap-2 justify-center items-center mx-auto border-4 rounded-lg p-1 bg-gradient-to-bl from-sky-400 to-cyan-300">
                Papá
              </button>
            </a>
          </div>
        </div>
        <div className="opacity-0" ref={useAnimateFade}>
          <img
            src={M1}
            alt=""
            className="mx-auto my-10 w-[200px] animate-wiggle animate-infinite animate-duration-[1300ms]"
            loading="lazy"
          />
        </div>
      </div>
  );
};
