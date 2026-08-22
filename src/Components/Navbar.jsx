import React from "react";
import "../App.css";
function Navbar() {
  return (
    <div>
      <ul className="flex flex-row gap-11">
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
