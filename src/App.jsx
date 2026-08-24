import { useState } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <div className="navbar flex flex-row items-center justify-between sticky top-0 bg-black py-3 px-5 ">
        <h1>PERSONAL PORTFOLIO</h1>
        <Navbar></Navbar>
      </div>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
}

export default App;
