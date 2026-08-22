import React from "react";
import "../App.css";
function Navbar() {
  return (
    <div>
      <ul className="flex flex-row gap-11">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Skills</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
