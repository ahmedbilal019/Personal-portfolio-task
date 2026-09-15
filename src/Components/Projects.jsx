import React, { useState } from "react";
import project1_img from "../assets/currency-converter.PNG";
import project2_img from "../assets/todo.PNG";
import project3_img from "../assets/calculator.PNG";
import project4_img from "../assets/imagin-clone.PNG";
import project5_img from "../assets/photosen.PNG";
import project6_img from "../assets/quiz-app.PNG";

function Projects() {
  const [category, setCategory] = useState("All");

  const projects = [
    {
      title: "Currency Converter",
      description:
        "An interective Frontend Application for converting currencies.",
      tech: ["Html", "CSS", "Javascript"],
      category: "UI",
      image: { project1_img },
      demo: "#",
      code: "https://github.com/ahmedbilal019/Currency-converter",
    },
    {
      title: "ToDo App",
      description: "A React.js application to manage daily todo-tasks.",
      tech: ["Reactjs", "CSS"],
      category: "React",
      image: { project2_img },
      demo: "https://list-todos-here.netlify.app/",
      code: "https://github.com/ahmedbilal019/ToDo_List-using-React",
    },
    {
      title: "Calculator",
      description:
        "Simple calculator to perform basic Maths operations suc as Addition, Subtraction, Division and Multiplication.",
      tech: ["HTML", "CSS", "Javascript"],
      category: "UI",
      demo: "https://ahmedbilal019.github.io/Calculator/",
      image: { project3_img },
      code: "https://github.com/ahmedbilal019/Calculator-using-React-",
    },
    {
      title: "Imagine Website Clone",
      description:
        "A responsive website clone created to practice modern layouts and responsive design.",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "UI",
      image: { project4_img },
      demo: "#",
      code: "https://github.com/ahmedbilal019/Imagine-website-Clone",
    },
    {
      title: "Photosen-clone",
      description: "Clone of website to practice UI and Flex box properties",
      tech: ["HTML", "CSS"],
      category: "UI",
      image: { project5_img },
      demo: "#",
      code: "https://github.com/ahmedbilal019/Photosen-clone",
    },
    {
      title: "Quiz App",
      description:
        "A React.js application to take quiz and showing the result.",
      tech: ["Reactjs", "CSS"],
      category: "React",
      image: { project6_img },
      demo: "",
      code: "https://github.com/ahmedbilal019/quiz-app-in-react",
    },
  ];

  // Filter projects
  const filteredProjects =
    category === "All"
      ? projects
      : projects.filter((project) => project.category === category);

  return (
    <section
      id="projects"
      className="bg-black text-white px-6 py-20 min-h-screen"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-3">My Projects</h2>

        <p className="text-gray-400">Some of the projects I have built.</p>
      </div>

      <div className="flex justify-center gap-4 mb-12">
        {["All", "React", "UI"].map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`px-5 py-2 rounded-full border transition ${
              category === item
                ? "bg-white text-black"
                : "border-gray-600 text-white hover:bg-gray-800"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-500 transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200"
                >
                  Live Demo
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-600 rounded-lg text-sm font-medium hover:bg-gray-800"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
