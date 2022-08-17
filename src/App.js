// this is the center of the application, root component, or wrapper component
import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// lifted the state to the parent, so it can be used by all the children components
// useState() is a function that will always return an array. The first item is the value of your state (or store your state), and the second item is a setter, which allows you to set the state to something else.
// Because we're destructuring from an array, we could name these two things whatever we want, but it's best to stick to variable names that make sense.
// useState(0), has it started at 0, but can be any number wanted/needed
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/contact" element={<ContactForm />} />
          <Route exact path="/portfolio" element={<Projects />} />
          {/* <Route exact path="/resume" element={<Resume />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
