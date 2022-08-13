import React from "react";
import ProjectData from "./projectData";

function Projects() {
  return (
    <section>
      {ProjectData.map((project) => {
        return (
          <div className="flex-row">
            <div key={project.id}>
              <h1>{project.name}</h1>
              <p>{project.description}</p>
              <div>
                <img
                  src={project.photoUrl}
                  alt={project.imgAlt}
                  className="img-thumbnail mx-1"
                />
              </div>
              <a href={project.githubLink}>Github Repo</a>
              <a href={project.liveAppLink}>Live App</a>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Projects;
