import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Javascript", icon: <FaJs /> },
    { name: "Tailwindcss", icon: <RiTailwindCssFill /> },
    { name: "Reactjs", icon: <RiReactjsFill /> },
  ];

  return (
    <div>
      {skills.map((skill) => (
        <div key={skill.name}>
          {skill.icon}
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Skills;
