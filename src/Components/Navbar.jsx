import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import "../App.css";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <div className="  flex  justify-between items-center">
        {" "}
        <a href="#hero" className="text-2xl font-semibold ">
          <h1>Ahmed's Portfolio</h1>
        </a>
        <div className="nav hidden sm:block text-3xl font-semibold ">
          <a
            href="#about"
            className="hover:underline hover:text-orange-600 hover:underline-offset-3"
          >
            About
          </a>

          <a
            href="#skills"
            className=" hover:underline hover:text-orange-600 hover:underline-offset-3"
          >
            Skills
          </a>

          <a
            href="#projects"
            className=" hover:underline hover:text-orange-600 hover:underline-offset-3"
          >
            Projects
          </a>

          <a
            href="#contact"
            className=" hover:underline hover:text-orange-600 hover:underline-offset-3"
          >
            Contact
          </a>
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
        className={` ${isOpen ? "block" : "hidden"} nav sm:hidden bg-gray-800 py-1 rounded-md text-white`}
      >
        <a
          href="#about"
          className="block m-0.5"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          About
        </a>

        <a
          href="#skills"
          className="block m-0.5"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Skills
        </a>

        <a
          href="#projects"
          className="block m-0.5"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Projects
        </a>

        <a
          href="#contact"
          className="block m-0.5"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Contact
        </a>
      </div>
    </section>
  );
}

export default Navbar;
