import React from "react";
import "../App.css";
function Hero() {
  return (
    <div className="hero-sec flex flex-row justify-center items-center m-auto">
      <div className="intro">
        <h1 className="tagLine text-7xl ">
          Hello! I'm <strong>Ahmed Bilal</strong>
        </h1>
        <p className="text-2xl">CS Graduate & Web Developer</p>
        <br />
        <button className="bg-blue-600 text-white font-bold p-2 rounded-lg">
          View my Work
        </button>
      </div>
    </div>
  );
}

export default Hero;
