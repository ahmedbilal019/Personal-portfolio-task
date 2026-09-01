import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import "../App.css";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" items-center flex  justify-between ">
        {" "}
        <h1>PERSONAL PORTFOLIO</h1>
        <div className="nav hidden sm:block ">
          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>
        </div>
        <button
          className="block sm:hidden"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* navbar for mobile */}
      <div
        className={` ${isOpen ? "block" : "hidden"} nav sm:hidden bg-gray-800 text-white`}
      >
        <a href="#about" className="block">
          About
        </a>

        <a href="#skills" className="block">
          Skills
        </a>

        <a href="#projects" className="block">
          Projects
        </a>

        <a href="#contact" className="block">
          Contact
        </a>
      </div>
    </>
  );
}

export default Navbar;
