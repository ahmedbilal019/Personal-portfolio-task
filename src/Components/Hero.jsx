import React from "react";
import "../App.css";
function Hero() {
  return (
    <div
      id="hero"
      className="hero-sec flex flex-row justify-center items-center m-auto min-h-screen "
    >
      <div className="intro text-center">
        <h1 className="tagLine  text-4xl sm:text-7xl ">
          Hello! I'm <strong className="text-orange-500 ">Ahmed Bilal</strong>
        </h1>
        <p className="text-lg sm:text-lg">
          A Web Developer Turning Ideas into Interactive Experiences.
        </p>
        <br />

        <a href="#projects" className="projectBtn">
          <button className="font-bold px-4 py-2 rounded-lg bg-orange-400 transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-orange-500 hover:cursor-pointer">
            My Projects
          </button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
