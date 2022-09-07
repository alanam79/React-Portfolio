import React from "react";
import Footer from "../Footer/index";
import ProjectData from "./projectData";
import "./Project.css";

function Projects() {
  return (
    <section className="main-body">
      {ProjectData.map((project) => {
        return (
          <div className="align-items:center">
            <div key={project.id}>
              <h1>{project.name}</h1>
              <p>{project.description}</p>
              <a href={project.githubLink}>Github Repo</a>
              <a href={project.liveAppLink}>Live App</a>
              <div>
                <img
                  src={project.photoUrl}
                  alt={project.imgAlt}
                  className="img-thumbnail mx-1"
                />
              </div>
            </div>
          </div>
        );
      })}
      <Footer />
    </section>
  );
}

export default Projects;
