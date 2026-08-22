import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Navbar from "./Components/Navbar";
import "./App.css";
import Hero from "./Components/Hero";
import About from "./Components/About";

function App() {
  return (
    <>
      <div className="m-5 navbar flex flex-row items-center justify-between">
        <h1>PERSONAL PORTFOLIO</h1>
        <Navbar></Navbar>
      </div>
      <Hero></Hero>
      <About></About>
    </>
  );
}

export default App;
