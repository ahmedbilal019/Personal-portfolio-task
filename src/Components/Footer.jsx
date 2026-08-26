import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

function Footer() {
  return (
    <div>
      {/* <FaLinkedin />
      <FaGithub />
      <FaWhatsappSquare /> */}
      <div className="footer flex flex-row justify-center py-2 gap-2">
        <p>Copy Right &copy 2026.</p>
        <div className="flex flex-row gap-1.5 align-middle justify-center items-center ">
          <FaLinkedin size={20} /> <FaGithub size={20} />{" "}
          <FaWhatsappSquare size={20} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
