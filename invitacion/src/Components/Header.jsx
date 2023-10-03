import React from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import useIntersectionObserver from "../Hooks/InterseccitonObserver";
import {
  Pluto,
  Goofy,
  Dondald,
  Daisy,
  Minnie,
  MPBb,
  AudioFondo,
} from "../importsImg";
import { Khalil } from "./Khalil";
import { Bautizo } from "./Bautizo";
import { Papis } from "./Papis";
import { Padrinos } from "./Padrinos";
import { IglesiaComp } from "./Iglesia";
import { Fiesta } from "./Fiesta";
import { Khalil2 } from "./Khalil2";
import { Asistencia } from "./Asistencia";

export const Header = () => {
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

  const useAnimateFade1 = useIntersectionObserver(animateFade, {
    threshold: 0.1,
  });
  const useAnimateFade2 = useIntersectionObserver(animateFade, {
    threshold: 0.1,
  });
  const useAnimateFade3 = useIntersectionObserver(animateFade, {
    threshold: 0.1,
  });
  const useAnimateFade4 = useIntersectionObserver(animateFade, {
    threshold: 0.1,
  });
  const useAnimateFade5 = useIntersectionObserver(animateFade, {
    threshold: 0.1,
  });
  const useAnimateFade6 = useIntersectionObserver(animateFade, {
    threshold: 0.1,
  });
  const useAnimateFade7 = useIntersectionObserver(animateFade, {
    threshold: 0.1,
  });
  

  return (
    <section className="flex flex-col w-full">
      <div className="flex flex-col justify-center mx-auto ">
        <audio
          autoPlay={true}
          loop
          controls
          className="border-4 rounded-full border-black/50"
        >
          <source src={AudioFondo} type="audio/mp4" />
        </audio>
        <div className="flex flex-col items-center mx-auto justify-center mt-5 text-red-500 text-5xl">
          <BsArrowUpCircle className="text-blue-600 my-6 animate-bounce animate-infinite animate-duration-1000" />
          <h1 className="text-blue-700 font-bold animate-pulse animate-infinite animate-duration-1500">
            Reprodúceme
          </h1>
        </div>
      </div>
      <Khalil />
      <div className="mx-auto mt-10 opacity-0" ref={useAnimateFade1}>
        <img
          src="https://eltallerdehector.com/wp-content/uploads/2022/06/56a8d-mickey-bebe-principe-png.png"
          alt=""
          className="animate-wiggle animate-infinite animate-duration-[1300ms] "
          loading="lazy"
        />
      </div>
      <Bautizo />

      <div
        className="text-center mt-10 mx-auto rounded-full max-w-[500px] opacity-0 "
        ref={useAnimateFade2}
      >
        <img
          src={Pluto}
          alt=""
          className="mx-auto max-w-[300px] animate-wiggle animate-infinite animate-duration-[1300ms] drop-shadow-[0_1px_35px_rgba(55,102,255,0.5)]"
          loading="lazy"
        />
      </div>

      <Papis />

      <div className="mx-auto mt-10 opacity-0" ref={useAnimateFade3}>
        <img
          src={Goofy}
          alt=""
          className="mx-auto max-w-[200px] animate-wiggle animate-infinite animate-duration-[1300ms] drop-shadow-[0_1px_35px_rgba(55,102,255,0.5)] "
        />
      </div>

      <Padrinos />

      <div className="mx-auto mt-10 opacity-0" ref={useAnimateFade4}>
        <img
          src={Minnie}
          alt=""
          className="w-full max-w-[200px] drop-shadow-[0_1px_35px_rgba(55,102,255,0.5)] animate-wiggle animate-infinite animate-duration-[1300ms]"
          loading="lazy"
        />
      </div>

      <IglesiaComp />

      <div className="mx-auto opacity-0" ref={useAnimateFade5}>
        <img
          src={Dondald}
          alt=""
          className="my-[1rem] w-[280px] animate-wiggle animate-infinite animate-duration-[1300ms]"
          loading="lazy"
        />
      </div>

      <Fiesta />

      <div className="mx-auto mt-10 opacity-0" ref={useAnimateFade6}>
        <img
          src={Daisy}
          alt=""
          className=" w-[220px] animate-wiggle animate-infinite animate-duration-[1300ms]"
          loading="lazy"
        />
      </div>

      <Khalil2/>

      <div className="mx-auto mt-10 opacity-0" ref={useAnimateFade7}>
        <img
          src={MPBb}
          alt=""
          className="w-full animate-wiggle animate-infinite animate-duration-[1300ms]"
          loading="lazy"
        />
      </div>

      <Asistencia/>
      
      <div className="text-center text-2xl py-5 mt-[4rem] border-t-2 border-black">
        <h1 className="text-black font-bold">Desarrollado por </h1>
        <a
          href="https://portfoliorocalderon.netlify.app/"
          className="text-cyan-700 font-bold"
        >
          Roberto Calderón
        </a>
      </div>
    </section>
  );
};
