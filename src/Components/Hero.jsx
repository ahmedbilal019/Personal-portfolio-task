import React from "react";
import "../App.css";
function Hero() {
  return (
    <div
      id="hero"
      className="hero-sec flex flex-row justify-center items-center m-auto min-h-screen"
    >
      <div className="intro">
        <h1 className="tagLine text-7xl ">
          Hello! I'm <strong className="text-orange-500">Ahmed Bilal</strong>
        </h1>
        <p className="text-2xl">CS Graduate & Web Developer</p>
        <br />

        <a href="#projects">
          <button className="bg-blue-600 text-white font-bold p-2 rounded-lg">
            View my Work
          </button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
