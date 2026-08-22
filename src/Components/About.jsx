import React from "react";
import "../App.css";
function About() {
  return (
    <div className="flex flex-row justify-around mx-2.5">
      <div className="profile flex justify-center  ">
        <img
          className="profileImg rounded-lg"
          src="src\assets\profile-img.jpeg"
          alt="my profile image "
        />
      </div>
      <div className="aboutMe">
        <h2 className="text-2xl text-orange-300 my-2">Who i am?</h2>
        <p className="w-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          dignissimos ad ipsum officia beatae numquam soluta sunt sint odio quod
          debitis voluptatum aliquam, expedita cupiditate dolor quos aliquid
          natus pariatur.
        </p>
        <br />
        <p className="w-3xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veniam
          ducimus ipsum aliquam! Dolorum dolor reiciendis recusandae rem?
          Doloremque, praesentium sit? Esse, quae. Harum quis voluptatem
          voluptatum neque voluptas quam.
        </p>
      </div>
    </div>
  );
}

export default About;
