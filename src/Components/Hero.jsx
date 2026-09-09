import React from "react";
import "../App.css";
function Hero() {
  return (
    <div
      id="hero"
      className="hero-sec flex flex-row justify-center items-center m-auto min-h-screen"
    >
      <div className="intro text-center">
        <h1 className="tagLine  text-4xl sm:text-7xl ">
          Hello! I'm <strong className="text-orange-500">Ahmed Bilal</strong>
        </h1>
        <p className="text-2xl">
          A Web Developer Turning Ideas into Interactive Experiences.
        </p>
        <br />

        <a href="#projects" className="projectBtn">
          <button className=" px-4 py-2 rounded-lg bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-800">
            View my Work
          </button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
