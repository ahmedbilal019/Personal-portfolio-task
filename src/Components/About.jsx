import React from "react";
import "../App.css";
function About() {
  return (
    <section
      id="about"
      className="flex flex-row items-center justify-center min-h-screen flex-wrap"
    >
      <div className="profile flex justify-center  ">
        <img
          className="profileImg rounded-lg mx-20 my-20 w-80 h-80"
          src="src\assets\profile.jpg"
          alt="my profile image "
        />
      </div>

      <div className="aboutMe w-full max-w-3xl px-4 sm:px-6 md:px-0">
        <h2 className="text-3xl text-orange-500 my-2">About Me!</h2>

        <p className="w-full text-lg leading-7">
          I’m a Computer Science graduate with a passion for web development and
          building things for the web. I enjoy turning ideas into functional,
          responsive, and user-friendly digital experiences.
        </p>

        <br />

        <p className="w-full text-lg leading-7">
          I’m continuously improving my development skills by working on
          personal projects, exploring new technologies, and learning through
          hands-on experience. Each project gives me an opportunity to solve
          problems, experiment with different approaches, and become a better
          developer.
        </p>
      </div>
    </section>
  );
}

export default About;
