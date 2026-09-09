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
      {/* <div className="aboutMe">
        <h2 className="text-2xl text-orange-500 my-2">Who i am?</h2>
        <p className="w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          dignissimos ad ipsum officia beatae numquam soluta sunt sint odio quod
          debitis voluptatum aliquam, expedita cupiditate dolor quos aliquid
          natus pariatur.
        </p>
        <br />
        <p className="w-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veniam
          ducimus ipsum aliquam! Dolorum dolor reiciendis recusandae rem?
          Doloremque, praesentium sit? Esse, quae. Harum quis voluptatem
          voluptatum neque voluptas quam.
        </p>
      </div> */}
      <div className="aboutMe w-full max-w-3xl px-4 sm:px-6 md:px-0">
        <h2 className="text-2xl text-orange-500 my-2">Who I am?</h2>

        <p className="w-full text-base leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          dignissimos ad ipsum officia beatae numquam soluta sunt sint odio quod
          debitis voluptatum aliquam, expedita cupiditate dolor quos aliquid
          natus pariatur.
        </p>

        <br />

        <p className="w-full text-base leading-7">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veniam
          ducimus ipsum aliquam! Dolorum dolor reiciendis recusandae rem?
          Doloremque, praesentium sit? Esse, quae. Harum quis voluptatem
          voluptatum neque voluptas quam.
        </p>
      </div>
    </section>
  );
}

export default About;
