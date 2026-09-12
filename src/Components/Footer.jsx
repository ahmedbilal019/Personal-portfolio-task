import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
function Footer() {
  return (
    <div>
     
      <div className="footer flex flex-col justify-center py-2 gap-2">
        <p className="text-center">Copy Right &copy 2026.</p>
        <div className="flex flex-row gap-2.5 align-middle justify-center items-center ">
          <a href="https://www.linkedin.com/in/ahmedbilal019/" target="_blank">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/ahmedbilal019" target="_blank">
            <FaGithub size={20} />{" "}
          </a>
          <FaWhatsappSquare size={20} />
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
