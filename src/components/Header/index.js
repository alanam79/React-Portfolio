import React from "react";
import Nav from "../Nav";

function Header(props) {
  return (
    <header>
      {/* <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      ></meta> */}
      <h2>
        <a href="/" style={{ fontSize: "30px", margin: "20px" }}>
          Alana McKeel
        </a>
      </h2>
      {/* <Nav
        categories={props.categories}
        page={props.page}
        setPage={props.setPage}
      /> */}
    </header>
  );
}

export default Header;
