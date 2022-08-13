import React from "react";
import PortfolioList from "../PortfolioList";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Projects({ currentCategory }) {
  const { name, description } = currentCategory;

  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      {/* <div></div> */}
      {/* <PortfolioList category={currentCategory.name} /> */}
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
