// this is the center of the application, root component, or wrapper component
import React, { useState } from "react";
import About from "./components/About";
// import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import { Router, BrowserRouter } from "react-router-dom"; <---look into this in the future

function App() {
  const [categories] = useState([
    {
      name: "projects",
      description: "Examples of projects and challenges I have participated or worked on.",
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
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Header>
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
