import React from "react";
import ProjectData from "./projectData";


function Projects() {
  return (
    <section>
      {ProjectData.map((project, i) => {
        <div key={i}>
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
        </div>;
      })}
    </section>
  );
}

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

export default Projects;
