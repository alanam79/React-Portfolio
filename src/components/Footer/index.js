import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="icon-container">
        <a href="https://github.com/alanam79">
          <FaGithub className="github icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/alana-mckeel-47597522b/"
          className="linkedin"
        >
          <FaLinkedin className="linkedin icon" />
        </a>
        <a href="mailto:alanarmckeel@gmail.com">
          <FaEnvelope className="email icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
