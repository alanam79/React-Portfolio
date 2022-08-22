import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="flex-row px-1">
      <h2>
        <Link to="/">Alana McKeel</Link>

        {/* </=> */}
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/">About me</Link>

            {/* </a> */}
          </li>
          <li className="mx-1">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mx-1">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="mx-1">
            <Link id="about" to="/resume">
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
