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
    <section
      id="skills"
      className="flex flex-col items-center justify-center min-h-screen "
    >
      <div className="text-center my-12">
        <h2 className="text-4xl font-bold mb-3">My Skills</h2>

        <p className="text-gray-400">My Skills set Includes:</p>
      </div>
      <div className=" flex flex-col sm:flex-row justify-between gap-5 ">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="flex flex-col items-center mx-10  cursor-pointer "
            >
              <Icon
                size={50}
                className=" transition duration-400 ease-in-out hover:-translate-y-1 hover:scale-120"
              />

              <span className="text-2xl text-orange-500">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
