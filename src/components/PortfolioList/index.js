import React, { useState } from "react";

const PortfolioList = ({ category }) => {
  const [projects] = useState([
    {
      name: "Project 1",
      category: "projects",
      description: "Examples of projects I have participated or worked on",
    },
    {
      name: "Project 2",
      category: "projects",
      description: "Examples of projects I have participated or worked on",
    },
    {
      name: "Tech Blog",
      category: "challenges",
      description: "Challenges completed throughout the Bootcamp class",
    },
    {
      name: "Budget Tracker",
      category: "challenges",
      description: "Challenges completed throughout the Bootcamp class",
    },
    {
      name: "Social Network API",
      category: "challenges",
      description: "Challenges completed throughout the Bootcamp class",
    },
    {
      name: "Regex Tutorial",
      category: "challenges",
      description: "Challenges completed throughout the Bootcamp class",
    },
  ]);

  const currentProjects = projects.filter(
    (project) => project.category === category
  );

  return (
    <div>
      <div className="flex-row">
        {currentProjects.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
