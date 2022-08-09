import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/projects/portfolio-2.jpg";

function Projects() {
  const currentCategory = {
    name: "projects",
    description: "Group Projects I have participated in.",
  };

  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div>
        <img
          src={photo}
          alt="Project Example"
          className="img-thumbnail mx-1"
        />
      </div>
    </section>
  );
}

export default Projects;
