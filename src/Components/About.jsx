import React from "react";
import "../App.css";
function About() {
  return (
    <div className="flex flex-row justify-evenly">
      <div className="profile">
        <img
          className="profileImg"
          src="src\assets\profile-img.jpeg"
          alt="my profile image "
        />
      </div>
      <div className="aboutMe">
        <p className="w-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          dignissimos ad ipsum officia beatae numquam soluta sunt sint odio quod
          debitis voluptatum aliquam, expedita cupiditate dolor quos aliquid
          natus pariatur.
        </p>
      </div>
    </div>
  );
}

export default About;
