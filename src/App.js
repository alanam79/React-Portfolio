// this is the center of the application, root component, or wrapper component
import React from "react";
import About from "./components/About";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
