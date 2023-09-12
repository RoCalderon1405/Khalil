import React from "react";
import useIntersectionObserver from "../Hooks/InterseccitonObserver";
import Khalil1 from "../assets/Khalil1.png";
import Khalil2 from "../assets/Khalil2.png";
import MickeyCorona from "../assets/MickeyCorona.jpeg";
import Arcoiris from "../assets/Arcoiris.gif";
import Audio from "../assets/AudioFondo.mp4";

export const Header = () => {
  // Definir las funciones de callback para los efectos de animación

  const animateFade = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade",
          "animate-duration-1500",
          "animate-ease-in-out",
          "opacity:1"
        );
      } else {
        entry.target.classList.remove(
          "animate-fade-left",
          "animate-duration-1000",
          "animate-ease-in-out",
          "opacity:1"
        );
      }
    });
  };
  const animateFadeLeft = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade-left",
          "animate-duration-1000",
          "animate-ease-in-out",
          "opacity:1"
        );
      } else {
        entry.target.classList.remove(
          "animate-fade-left",
          "animate-duration-1000",
          "animate-ease-in-out",
          "opacity:1"
        );
      }
    });
  };
  const animateFadeUp = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-fade-up",
          "animate-duration-1000",
          "animate-delay-[500ms]",
          "animate-ease-in-out",
          "opacity:1"
        );
      } else {
        entry.target.classList.remove(
          "animate-fade-up",
          "animate-duration-1000",
          "animate-delay-[500ms]",
          "animate-ease-in-out",
          "opacity:1"
        );
      }
    });
  };
  const animateWiggleMore = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate-wiggle-more",
          "animate-infinite",
          "animate-duration-",
          "animate-ease-in-out",
          "opacity:1"
        );
      }
    });
  };
  // Crear instancias del hook de Intersection Observer
  const useAnimateFade = useIntersectionObserver(animateFade, {
    threshold: 0.1,
  });
  const useAnimateFadeLeft = useIntersectionObserver(animateFadeLeft, {
    threshold: 0.1,
  });
  const useAnimateFadeUp = useIntersectionObserver(animateFadeUp, {
    threshold: 0.1,
  });
  const useAnimateWiggleMore = useIntersectionObserver(animateWiggleMore, {
    threshold: 0.1,
  });
  return (
    <section className="flex flex-col max-w-[320px]">
      <div className="flex justify-center mx-auto">
        <audio
          autoPlay={true}
          loop
          muted
          controls
          className="border-4 rounded-full border-black/50"
        >
          <source src={Audio} type="audio/mp4" />
        </audio>
      </div>
      <div className="mx-auto mt-5">
        <img
          src="https://eltallerdehector.com/wp-content/uploads/2022/06/56a8d-mickey-bebe-principe-png.png"
          alt=""
          className="animate-wiggle animate-infinite animate-duration-[1300ms]"
        />
      </div>
      <div
        className="mx-auto mt-5 w-full flex flex-col text-white font-bold text-center border-4 border-sky-300 rounded-3xl p-3 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-300 to-red-600 opacity-0"
        ref={useAnimateFadeUp}
      >
        <h2>te invito a mi graduación</h2>
      </div>
      <div
        className="text-center mt-5 mx-auto rounded-full max-w-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400 to-sky-500 opacity-0"
        ref={useAnimateFade}
      >
        <img
          src={Khalil2}
          alt=""
          className="w-full p-8  rounded-full mx-auto opacity-100"
        />
      </div>
      <div className="mx-auto mt-5 w-full flex flex-col text-white font-bold text-center border-4 border-sky-300 rounded-3xl p-3">
        <div className="relative bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-300 to-red-600 opacity-90 w-full h-full"></div>
        <h2>Khalil Camacho Uscanga</h2>
        <p>Mi primer peda</p>
        <img
          src="https://media.tenor.com/ylEedf3vs5YAAAAi/baby-mickey-cam-its-happy-gif.gif"
          alt=""
          className="mx-auto mt-2 max-w-[100px]"
        />
      </div>
      <div>
        <img
          src="https://media.tenor.com/QEXmhVB1As8AAAAi/winnie-the.gif"
          alt=""
        />
      </div>
      <div className="mx-auto mt-5 w-full flex flex-col text-white font-bold text-center border-4 border-sky-300 rounded-3xl p-3 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-300 to-red-600">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5438/5438982.png"
          alt=""
          className="mx-auto w-[100px]"
        />
        <h2>Mis papis:</h2>
        <span>Luisa Maria Uscanga Silva</span>
        <span>Camacho Ramírez Rayinmunda</span>
      </div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEtggQ5aYWl1pSzWbPEHwBpWgNpH8_eJ1Ce-YT-dLwGapRJvV_"
          alt=""
        />
      </div>
      <div className="mx-auto mt-5 w-full flex flex-col text-white font-bold text-center border-4 border-sky-300 rounded-3xl p-3 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-300 to-red-600">
        <img
          src="https://cdn-icons-png.flaticon.com/128/6549/6549216.png"
          alt=""
          className="mx-auto w-[100px]"
        />
        <h2>Mis padrinos:</h2>
        <span>Luisa Maria Uscanga Silva</span>
        <span>Camacho Ramírez Rayinmunda</span>
      </div>
      <div className="mx-auto mt-5 w-full flex flex-col text-white font-bold text-center border-4 border-sky-300 rounded-3xl p-3 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-300 to-red-600">
        <img
          src="https://media.tenor.com/KOfiR_99tTgAAAAj/papa-pope-emoji.gif"
          alt=""
          className="mx-auto w-[100px]"
        />
        <h2>Ceremonia</h2>
        <span>1:00 PM</span>
        <span>Lorem ipsum dolor sit amet.</span>
        <button className="border-4 mt-2 rounded-md bg-blue-600 w-[60%] mx-auto">
          Ver Mapa
        </button>
      </div>
      <div>
        <img src={Arcoiris} alt="" className="my-[1rem]" />
      </div>
      <div className="mx-auto mt-5 w-full flex flex-col text-white font-bold text-center border-4 border-sky-300 rounded-3xl p-3 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-300 to-red-600">
        <img
          src="https://media.tenor.com/PBym7KA4_1cAAAAj/happy-birthday-birthday-cake.gif"
          alt=""
          className="mx-auto w-[100px]"
        />
        <h2>Fiesta</h2>
        <span>3:00 PM</span>
        <span>Lorem ipsum dolor sit amet.</span>
        <button className="border-4 mt-2 rounded-md bg-blue-600 w-[60%] mx-auto">
          Ver Mapa
        </button>
      </div>
      <div className="mx-auto mt-5 w-full flex flex-col text-white font-bold text-center border-4 border-sky-300 rounded-3xl p-3 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-300 to-red-600">
        <div className="bg-blue-600 rounded-full w-[60%] m-auto">
          <img src={Khalil1} alt="" className="mx-auto w-[120px]" />
        </div>
        <img
          src="https://media.tenor.com/ZHTwUoobI7IAAAAC/happy-birthday-birthday.gif"
          alt=""
        />
        <h2>Regalos sugeridos</h2>
        <span>Evento:1246459</span>
        <span>Liverpul</span>

        <button className="border-4 mt-2 rounded-md bg-blue-600 w-[60%] mx-auto">
          Ver Mapa
        </button>
      </div>
      <div>
        <img
          src="https://media.tenor.com/R0hZcFrUwbkAAAAi/%D1%87%D0%B5%D1%81%D1%82%D0%B8%D1%82%D0%BE%D0%B1%D0%B5%D0%B1%D0%B5.gif"
          alt=""
        />
      </div>
      <div className="mx-auto mt-5 w-full flex flex-col text-white font-bold text-center border-4 border-sky-300 rounded-3xl p-3 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-300 to-red-600">
        <h2>Confirma asistencia con:</h2>
        <div className="">
          <a href="">
            <button className="flex mt-4 w-1/2 gap-2 justify-center items-center mx-auto border-4 rounded-lg p-1 bg-sky-600">
              Mamá
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png"
                alt=""
                className="w-[20px] ml-2"
              />
            </button>
          </a>
        </div>
        <div className="">
          <a href="https://wa.me/+525584018454?text=Jalo%20perro%20cochino%20ahí%20te%20wacho">
            <button className="flex mt-4 w-1/2 gap-2 justify-center items-center mx-auto border-4 rounded-lg p-1 bg-sky-600">
              Papá
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png"
                alt=""
                className="w-[20px] ml-2"
              />
            </button>
          </a>
          <img
            src="https://media.tenor.com/S95fh0TpuJ8AAAAi/glitters-mickey-mouse.gif"
            alt=""
            className="mx-auto w-[100px]"
          />
          <img
            src="https://media.tenor.com/5pwP8sWuk7kAAAAj/good-night-mickey-mouse.gif"
            alt=""
            className="mx-auto w-[100px]"
          />
        </div>
      </div>
      <div className="text-center py-5 mt-10 border-t-2 border-sky5-600">
        <h2 className="text-white">
          Desarrollado por{" "}
          <a
            href="https://portfoliorocalderon.netlify.app/"
            className="text-cyan-500 font-bold"
          >
            Roberto Calderón
          </a>
        </h2>
      </div>
    </section>
  );
};
