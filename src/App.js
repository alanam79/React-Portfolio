// this is the center of the application, root component, or wrapper component
import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  const [categories] = useState([
    {
      name: "projects",
      description: "Group Projects I have participated in.",
    },
    {
      name: "homework",
      description: "Assignments I have completed during Coding Bootcamp.",
    },
    { name: "resume", description: "My Resume" },
    // {
    //   name: "landscape",
    //   description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    // },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Projects></Projects>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;
