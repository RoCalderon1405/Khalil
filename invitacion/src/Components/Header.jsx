import React from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import useIntersectionObserver from "../Hooks/InterseccitonObserver";
import {
  Khalil1,
  Khalil2,
  Iglesia,
  Pluto,
  Goofy,
  Dondald,
  Daisy,
  Minnie,
  MPBb,
  M1,
  AudioFondo
} from "../importsImg";


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
      } else {
        entry.target.classList.remove(
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
  const useAnimateFade8 = useIntersectionObserver(animateFade, {
    threshold: 0.1,
  });
  const useAnimateFade9 = useIntersectionObserver(animateFade, {
    threshold: 0.1,
  });
  const useAnimateFade10 = useIntersectionObserver(animateFade, {
    threshold: 0.1,
  });
  const useAnimateFade11 = useIntersectionObserver(animateFade, {
    threshold: 0.1,
  });
  const useAnimateFadeLeft = useIntersectionObserver(animateFadeLeft, {
    threshold: 0.1,
  });
  const useAnimateFadeLeft1 = useIntersectionObserver(animateFadeLeft, {
    threshold: 0.1,
  });
  const useAnimateFadeLeft2 = useIntersectionObserver(animateFadeLeft, {
    threshold: 0.1,
  });
  const useAnimateFadeLeft3 = useIntersectionObserver(animateFadeLeft, {
    threshold: 0.1,
  });
  const useAnimateFadeLeft4 = useIntersectionObserver(animateFadeLeft, {
    threshold: 0.1,
  });
  const useAnimateFadeLeft5 = useIntersectionObserver(animateFadeLeft, {
    threshold: 0.1,
  });
  const useAnimateFadeLeft6 = useIntersectionObserver(animateFadeLeft, {
    threshold: 0.1,
  });
  const useAnimateFadeLeft7 = useIntersectionObserver(animateFadeLeft, {
    threshold: 0.1,
  });
  const useAnimateFadeLeft8 = useIntersectionObserver(animateFadeLeft, {
    threshold: 0.1,
  });
  const useAnimateFadeRight = useIntersectionObserver(animateFadeRight, {
    threshold: 0.1,
  });
  const useAnimateFadeRight1 = useIntersectionObserver(animateFadeRight, {
    threshold: 0.1,
  });
  const useAnimateFadeRight2 = useIntersectionObserver(animateFadeRight, {
    threshold: 0.1,
  });
  const useAnimateFadeRight3 = useIntersectionObserver(animateFadeRight, {
    threshold: 0.1,
  });
  const useAnimateFadeRight4 = useIntersectionObserver(animateFadeRight, {
    threshold: 0.1,
  });
  const useAnimateFadeRight5 = useIntersectionObserver(animateFadeRight, {
    threshold: 0.1,
  });
  const useAnimateFadeRight6 = useIntersectionObserver(animateFadeRight, {
    threshold: 0.1,
  });
  const useAnimateFadeRight7 = useIntersectionObserver(animateFadeRight, {
    threshold: 0.1,
  });
  const useAnimateFadeUp = useIntersectionObserver(animateFadeUp, {
    threshold: 0.1,
  });
  const useAnimateFadeUp1 = useIntersectionObserver(animateFadeUp, {
    threshold: 0.1,
  });
  const useAnimateFadeUp2 = useIntersectionObserver(animateFadeUp, {
    threshold: 0.1,
  });
  const useAnimateFadeUp3 = useIntersectionObserver(animateFadeUp, {
    threshold: 0.1,
  });
  const useAnimateFadeUp4 = useIntersectionObserver(animateFadeUp, {
    threshold: 0.1,
  });
  const useAnimateFadeUp5 = useIntersectionObserver(animateFadeUp, {
    threshold: 0.1,
  });
  const useAnimateFadeUp6 = useIntersectionObserver(animateFadeUp, {
    threshold: 0.1,
  });
  const useAnimateFadeDown = useIntersectionObserver(animateFadeDown, {
    threshold: 0.1,
  });
  const useAnimateFadeDown2 = useIntersectionObserver(animateFadeDown, {
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
          />
        </div>
      </div>
      <div className="mx-auto mt-10 opacity-0" ref={useAnimateFade1}>
        <img
          src="https://eltallerdehector.com/wp-content/uploads/2022/06/56a8d-mickey-bebe-principe-png.png"
          alt=""
          className="animate-wiggle animate-infinite animate-duration-[1300ms] "
          loading="lazy"
        />
      </div>

      <div className="mx-auto mt-10 p-5 w-full text-center border-4 border-sky-500 rounded-3xl shadow-[0_1px_35px_rgba(55,102,255,0.6)] ">
        <div className="">
          <h1
            className="text-4xl text-blue-800 font-semibold my-[3rem] opacity-0"
            ref={useAnimateFadeDown}
          >
            ¡Te Invito a <br /> Mi bautizo!
          </h1>
          <h1
            className="text-4xl text-blue-800 font-semibold mb-[2rem] opacity-0"
            ref={useAnimateFadeUp1}
          >
            1 año
          </h1>
        </div>
        <div className="flex flex-col items-center font-semibold space-y-2">
          <p className="text-2xl opacity-0" ref={useAnimateFadeLeft1}>
            Fecha: 26/Noviembre/2023
          </p>
          <p className="text-2xl opacity-0" ref={useAnimateFadeRight1}>
            Hora: 11:30 hrs
          </p>
          <p className="text-2xl opacity-0" ref={useAnimateFadeLeft2}>
            Lugar: Jardín de eventos Clavelina
          </p>
        </div>
      </div>

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

      <div className="mx-auto mt-10 w-full flex flex-col text-black font-bold text-center p-5 border-4 border-sky-500 rounded-3xl shadow-[0_1px_35px_rgba(55,102,255,0.6)]">
        <h1
          className="text-4xl text-blue-800 font-semibold my-[3rem] opacity-0"
          ref={useAnimateFadeUp2}
        >
          Mis papis:
        </h1>
        <div className="text-3xl mb-5 opacity-0" ref={useAnimateFadeLeft3}>
          Raymundo
          <br /> Camacho Ramírez
        </div>
        <span className="text-3xl mb-5 opacity-0" ref={useAnimateFadeRight3}>
          Luisa Maria
          <br />
          Uscanga Silva
        </span>
      </div>
      <div className="mx-auto mt-10 opacity-0" ref={useAnimateFade3}>
        <img
          src={Goofy}
          alt=""
          className="mx-auto max-w-[200px] animate-wiggle animate-infinite animate-duration-[1300ms] drop-shadow-[0_1px_35px_rgba(55,102,255,0.5)] "
        />
      </div>
      <div className="mx-auto mt-10 w-full flex flex-col text-black font-bold text-center p-5 border-4 border-sky-500 rounded-3xl shadow-[0_1px_35px_rgba(55,102,255,0.6)]">
        <h1
          className="text-4xl text-blue-800 font-semibold my-[3rem] opacity-0"
          ref={useAnimateFadeUp3}
        >
          Mis padrinos:
        </h1>
        <div className="text-3xl mb-5 opacity-0" ref={useAnimateFadeRight4}>
          Johany Saúl <br />
          Bautista García
        </div>
        <div className="text-3xl mb-5 opacity-0" ref={useAnimateFadeLeft4}>
          Mariana <br />
          Vázquez Silva
        </div>
      </div>

      <div className="mx-auto mt-10 opacity-0" ref={useAnimateFade4}>
        <img
          src={Minnie}
          alt=""
          className="w-full max-w-[200px] drop-shadow-[0_1px_35px_rgba(55,102,255,0.5)] animate-wiggle animate-infinite animate-duration-[1300ms]"
          loading="lazy"
        />
      </div>

      <div className="mx-auto my-10 w-full flex flex-col text-black font-bold text-center p-5 border-4 border-sky-500 rounded-3xl shadow-[0_1px_35px_rgba(55,102,255,0.6)]">
        <div className="opacity-0" ref={useAnimateFade8}>
          <img
            src={Iglesia}
            alt=""
            className="mx-auto w-full rounded-full p-2 mt-5 drop-shadow-xl"
            loading="lazy"
          />
        </div>
        <h1
          className="text-4xl text-blue-800 font-semibold my-[3rem] opacity-0"
          ref={useAnimateFadeUp4}
        >
          Ceremonia
        </h1>
        <div className="text-2xl opacity-0" ref={useAnimateFadeLeft5}>
          10:00 hrs
        </div>
        <div className="text-3xl opacity-0" ref={useAnimateFadeRight2}>
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
      <div className="mx-auto opacity-0" ref={useAnimateFade5}>
        <img
          src={Dondald}
          alt=""
          className="my-[1rem] w-[280px] animate-wiggle animate-infinite animate-duration-[1300ms]"
          loading="lazy"
        />
      </div>
      <div className="mx-auto mt-10 w-full flex flex-col text-black font-bold text-center p-5 border-4 border-sky-500 rounded-3xl shadow-[0_1px_35px_rgba(55,102,255,0.6)]">
        <div className="opacity-0" ref={useAnimateFade9}>
          <img
            src="https://media.tenor.com/PBym7KA4_1cAAAAj/happy-birthday-birthday-cake.gif"
            alt=""
            className="mx-auto w-[180px] "
            loading="lazy"
          />
        </div>
        <h1
          className="text-4xl text-blue-800 font-semibold my-[3rem] opacity-0"
          ref={useAnimateFadeUp5}
        >
          Fiesta
        </h1>
        <div className="text-2xl opacity-0" ref={useAnimateFadeRight5}>
          11:30 hrs
        </div>
        <div className="text-3xl opacity-0" ref={useAnimateFadeLeft6}>
          Jardín de eventos Clavelina.
        </div>
        <a href="https://maps.app.goo.gl/jm8UP1qfnqfByLvg9" target="_blank">
          <button className="my-4 rounded-full py-1 bg-blue-500 w-[60%] mx-auto text-white text-lg hover:scale-105 transition duration-300 ease-in-out">
            Ver Mapa
          </button>
        </a>
      </div>
      <div className="mx-auto mt-10 " ref={useAnimateFade6}>
        <img
          src={Daisy}
          alt=""
          className=" w-[220px] animate-wiggle animate-infinite animate-duration-[1300ms]"
          loading="lazy"
        />
      </div>
      
      <div className="mx-auto mt-10 w-full flex flex-col text-black font-bold text-center p-5 border-4 border-sky-500 rounded-3xl shadow-[0_1px_35px_rgba(55,102,255,0.6)]">
        <div className="opacity-0" ref={useAnimateFade10}>
          <img
            src={Khalil1}
            alt=""
            className="mx-auto w-[180px] drop-shadow-[0_35px_35px_rgba(55,102,255,0.45)]"
            loading="lazy"
          />
        </div>

        <h1 className="text-4xl text-blue-800 font-semibold my-[3rem] opacity-0" ref={useAnimateFadeUp6}>
          Regalos sugeridos
        </h1>
        <div className="text-3xl opacity-0" ref={useAnimateFadeLeft7}>Evento:1246459</div>
        <div className="text-3xl opacity-0" ref={useAnimateFadeRight6}>Liverpool</div>

        <button className="border-2 border-blue-600 my-4 rounded-full py-1 bg-transparent w-[60%] mx-auto text-black text-lg hover:bg-blue-600 hover:border-black/60 hover:text-white hover:scale-105 transition duration-300 ease-in-out">
          Liverpool
        </button>
      </div>
      <div className="mx-auto mt-10 opacity-0" ref={useAnimateFade7}>
        <img
          src={MPBb}
          alt=""
          className="w-full animate-wiggle animate-infinite animate-duration-[1300ms]"
          loading="lazy"
        />
      </div>
      <div
        className="mx-auto mt-[3.5rem] w-full flex flex-col text-black font-bold text-center p-5 border-4 border-sky-500 rounded-3xl shadow-[0_1px_35px_rgba(55,102,255,0.6)]"
        id="contacto"
      >
        <h1 className="text-4xl text-blue-800 font-semibold my-[3rem] opacity-0" ref={useAnimateFadeDown2}>
          Confirma asistencia con:
        </h1>
        <div className="flex w-full justify-center">
          <div className="w-full opacity-0" ref={useAnimateFadeRight7}>
            <a
              href="https://wa.me/+525576718993?text=¡Hola%20Luisa!%20Cuenta%20conmigo%20🌟,%20ahí%20estaré."
              target="_blank"
            >
              <button className="flex text-2xl font-bold mt-4 w-[80%] gap-2 justify-center items-center mx-auto border-4 rounded-lg p-1 bg-gradient-to-bl from-sky-400 to-cyan-300">
                Mamá
              </button>
            </a>
          </div>
          <div className="w-full opacity-0" ref={useAnimateFadeLeft8}>
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
        <div className="opacity-0" ref={useAnimateFade11}>
          <img
            src={M1}
            alt=""
            className="mx-auto my-10 w-[200px] animate-wiggle animate-infinite animate-duration-[1300ms]"
            loading="lazy"
          />
        </div>
      </div>
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
