// this is the center of the application, root component, or wrapper component
import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
// import Header from "./components/Header"; <--finish development
// import { Router, BrowserRouter } from "react-router-dom"; <---look into this in the future

// lifted the state to the parent, so it can be used by all the children components
// useState() is a function that will always return an array. The first item is the value of your state (or store your state), and the second item is a setter, which allows you to set the state to something else.
// Because we're destructuring from an array, we could name these two things whatever we want, but it's best to stick to variable names that make sense.
// useState(0), has it started at 0, but can be any number wanted/needed
function App() {
  // const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {
      name: "about",
      description: "About me",
    },
    {
      name: "portfolio",
      description: "Examples of projects I have participated or worked on",
    },
    {
      name: "contact",
      description: "Contact",
    },
    { name: "resume", description: "My Resume" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0].name);

  return (
    <div>
      {/* change nav to header and pull nav into header */}
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
          {currentCategory === "about" (
          <>
           <About></About>
            <Projects currentCategory={currentCategory}></Projects>
          </>
        ) (
          <ContactForm></ContactForm>
        )}
      </main>
      {/* <>Stuff!</> */}
      <Footer />
    </div>
  );
}

export default App;
