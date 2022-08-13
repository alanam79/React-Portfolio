import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/projects/small/portfolio-2-min.jpg";

// useState() is a function that will always return an array. The first item is the value of your state (or store your state), and the second item is a setter, which allows you to set the state to something else. 
// Because we're destructuring from an array, we could name these two things whatever we want, but it's best to stick to variable names that make sense.
// useState(0), has it started at 0, but can be any number wanted/needed
function Projects(props) {
  const currentCategory = {
    name: "projects",
    description:
      "Examples of projects and challenges I have participated or worked on.",
  };

  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div>
        <img
          src={photo}
          style={{ width: "30%" }}
          alt="Portfolio Example"
          className="img-thumbnail mx-1"
        />
      </div>
    </section>
  );
}

export default Projects;

// below is correct way shown by tutor, using module work for first draft of portfolio
// function Projects() {
//   return (
//     <section>
//       {ProjectData.map((project) => {
//         return (
//           <div key={project.id}>
//             <h1>{project.name}</h1>
//             <p>{project.description}</p>
//             <div>
//               <img
//                 src={project.photoUrl}
//                 alt={project.imgAlt}
//                 className="img-thumbnail mx-1"
//               />
//             </div>
//             <a href={project.githubLink}>Github Repo</a>
//             <a href={project.liveAppLink}>Live App</a>
//           </div>
//         );
//       })}
//     </section>
//   );
// }
