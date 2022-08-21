import React from "react";
import "./About.css";
import Footer from "../Footer"
import coverImage from "../../assets/cover/profile-img.jpg";

function About() {
  return (
    <div className="main-header">
      <div style={{ height: "80vh" }}>
        <section>
          <h1 id="about">Hello World!</h1>

          <img
            src={coverImage}
            className="my-4"
            style={{ width: "15%" }}
            alt="cover"
          />
          <p>
            Hi there! My name is Alana McKeel and I am currently progressing
            through the Full Stack Coding Boot Camp at Michigan State
            University. Professionally, I have had prior experience in Business
            and Hotel management as well as Title and Escrow experience.
            Currently, I am focused on securing a full-time position as a Full
            Stack Developer upon graduation (expected September 2022). As I have
            progressed thru the course, I have been drawn to the back end and
            have really enjoyed learning and understanding the processes. Thank
            you for visiting, let's connect!
          </p>
        </section>
        <Footer/>
      </div>
    </div>
  );
}

export default About;
