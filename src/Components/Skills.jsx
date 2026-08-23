import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";

function Skills() {
  const skills = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "Javascript", icon: FaJs },
    { name: "Tailwindcss", icon: RiTailwindCssFill },
    { name: "Reactjs", icon: RiReactjsFill },
  ];

  return (
    <section>
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-3">My Skills</h2>

        <p className="text-gray-400">My Skills set Includes:</p>
      </div>
      <div className=" flex flex-row justify-evenly">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              <Icon size={50} />

              <span className="text-2xl text-orange-500">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
