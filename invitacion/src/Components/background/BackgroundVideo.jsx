import React from "react";
import Video from "../../assets/fondoAnimado5.mp4";
import './backgroundVideo.css'

export const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
};
