import React from "react";

function Nav() {
  return (
    <header className="flex-row px-1">
      <h2>
        <a id="link" href="/">
          Alana McKeel
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-1">
            <a id="about" href="/">
              About me
            </a>
          </li>
          <li className="mx-1">
            <a id="about" href="/contact">
              Contact
            </a>
          </li>
          <li className="mx-1">
            <a id="about" href="/portfolio">
              Portfolio
            </a>
          </li>
          <li className="mx-1">
            <a id="about" href="/resume">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
