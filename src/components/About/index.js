import React, { useEffect } from "react";
import coverImage from "../../assets/cover/profile-img.jpg";

function About() {
  // set about me to default view on hitting the page
  useEffect(() => {
    document.title = "Home Page";
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div>
            <img
              src={coverImage}
              className="my-2"
              style={{ width: "15%" }}
              alt="cover"
            />
          </div>
          <div className="col-6">
            <h1 id="about">Hello World!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

// below is correct way shown by tutor, using module work for first draft of portfolio
// function About() {
//   return (
// <section className="my-5">
//   <h1 id="about">Hello World!</h1>
//    <img
//     src={coverImage}
//     className="my-2"
//     style={{ width: "100%" }}
//     alt="cover"
//   />
// </section>
//   );
// }

export default About;
