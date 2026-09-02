import { useState } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="sticky top-0 bg-black py-3 px-5 ">
        <Navbar></Navbar>
      </div>
      <Hero></Hero>
      {/* <About></About> */}
      <Skills></Skills>
      <Projects></Projects>
      {/* <Contact></Contact> */}
      <Footer></Footer>
    </>
  );
}

export default App;
