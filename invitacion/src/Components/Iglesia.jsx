import React from "react";
import useIntersectionObserver from "../Hooks/InterseccitonObserver";
import { Iglesia } from "../importsImg";

export const IglesiaComp = () => {
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
    <div className="mx-auto my-10 w-full flex flex-col text-black font-bold text-center p-5 border-4 border-sky-500 rounded-3xl shadow-[0_1px_35px_rgba(55,102,255,0.6)]">
      <div className="opacity-0" ref={useAnimateFade}>
        <img
          src={Iglesia}
          alt=""
          className="mx-auto w-full rounded-full p-2 mt-5 drop-shadow-xl"
          loading="lazy"
        />
      </div>
      <h1
        className="text-4xl text-blue-800 font-semibold my-[3rem] opacity-0"
        ref={useAnimateFadeUp}
      >
        Ceremonia
      </h1>
      <div className="text-2xl opacity-0" ref={useAnimateFadeLeft}>
        10:00 hrs
      </div>
      <div className="text-3xl opacity-0" ref={useAnimateFadeRight}>
        El señor de la cuevita
      </div>
      <a
        href="https://www.google.com/maps/place/La+Catedral+de+Iztapalapa,+Ermita+Iztapalapa+1281,+El+Molino+Iztapalapa,+Iztapalapa,+09810+Ciudad+de+México,+CDMX,+México/data=!4m2!3m1!1s0x85d1fd450b4e2e99:0x722435e4d5f2fbce?utm_source=mstt_1&entry=gps&lucs=47068615,,47075915&g_ep=CAESCTExLjk1LjMwMBgAINeCAyoSNDcwNjg2MTUsLDQ3MDc1OTE1QgJVUw%3D%3D"
        target="_blank"
      >
        <button className="my-4 rounded-full py-1 bg-blue-500 w-[60%] mx-auto text-white text-lg hover:scale-105 transition duration-300 ease-in-out">
          Ver Mapa
        </button>
      </a>
    </div>
  );
};
