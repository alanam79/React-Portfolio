// this is the center of the application, root component, or wrapper component
import React from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


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
