import React, { useEffect } from "react";
import coverImage from "../../assets/cover/profile-img.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Hello World!</h1>
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
