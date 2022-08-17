import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div style={{}}>
            <a href="https://github.com/alanam79">
              <FaGithub className="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/alana-mckeel-47597522b/"
              className="linkedin"
            >
              <FaLinkedin className="linkedin" />
            </a>
            <a href="mailto:alanarmckeel@gmail.com">
              <FaEnvelope className="email" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
