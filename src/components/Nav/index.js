import React from "react";

function Nav() {
  return (
    <header className="flex-row px-1">
      <h2>
        <a id="link" href="/React-Portfolio/">
          Alana McKeel
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-1">
            <a id="about" href="/React-Portfolio/">
              About me
            </a>
          </li>
          <li className="mx-1">
            <a id="about" href="/React-Portfolio/contact">
              Contact
            </a>
          </li>
          <li className="mx-1">
            <a id="about" href="/React-Portfolio/portfolio">
              Portfolio
            </a>
          </li>
          <li className="mx-1">
            <a id="about" href="/React-Portfolio/resume">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
