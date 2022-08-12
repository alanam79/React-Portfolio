import React from "react";
import Nav from "../Nav";

function Header(props) {
  return (
    <header>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      ></meta>
      <h2>
        <a style={{ fontSize: "40px", margin: "20px" }}>Alana McKeel</a>
      </h2>
      <Nav
        categories={props.categories}
      />
    </header>
  );
}

export default Header;
