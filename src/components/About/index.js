import React, { useEffect } from "react";
import coverImage from "../../assets/cover/profile-img.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Hello World!</h1>
      <p>Hi there! My name is Alana McKeel and I am currently progressing through the Full Stack Coding Boot Camp at Michigan State University. Professionally, I have had prior experience in Business and Hotel management as well as Title and Escrow experience. Currently, I am focused on securing a full-time position as a Full Stack Developer upon graduation (expected September 2022). As I have progressed thru the course, I have been drawn to the back end and have really enjoyed learning and understanding the processes. Thank you for visiting, let's connect!</p>
      <img
        src={coverImage}
        className="my-4"
        style={{ width: "15%" }}
        alt="cover"
      />
    </section>
  );
}

export default About;

// function About() {
//   // set about me to default view on hitting the page
//   // useEffect(() => {
//   //   document.title = "About";
//   // });

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-6">
//           <div>
//             <img
//               src={coverImage}
//               className="my-4"
//               style={{ width: "15%" }}
//               alt="cover"
//             />
//           </div>
//           <div className="col-6">
//             <h1 id="about">Hello World!</h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;
