// this is the center of the application, root component, or wrapper component
import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Footer from "./components/Footer/index";
// import { Router, BrowserRouter } from "react-router-dom"; <---look into this in the future

function App() {
  const [categories] = useState([
    {
      name: "projects",
      description: "Group Projects I have participated in.",
    },
    {
      name: "homeworks",
      description: "Assignments I have completed during Coding Bootcamp.",
    },
    { name: "resume", description: "My Resume" },
    // {
    //   name: "",
    //   description: "",
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
      <>Stuff!</>
      <Footer />
    </div>
  );
}

export default App;
