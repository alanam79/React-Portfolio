// this is the center of the application, root component, or wrapper component
import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
// import Header from "./components/Header"; <--finish development
// import { Router, BrowserRouter } from "react-router-dom"; <---look into this in the future


// lifted the state to the parent, so it can be used by all the children components
function App() {
  const [categories] = useState([
    {
      name: "projects",
      description:
        "Examples of projects and challenges I have participated or worked on.",
    },
    // {
    //   name: "homeworks",
    //   description: "Assignments I have completed during Coding Bootcamp.",
    // },
    { name: "resume", description: "My Resume" },
    // {
    //   name: "",
    //   description: "",
    // },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      {/* change nav to header and pull nav into header */}
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
