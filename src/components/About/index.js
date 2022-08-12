import React, { useEffect } from "react";
import coverImage from "../../assets/cover/hero-bg.jpg";

function About() {
  // set about me to default view on hitting the page
  useEffect(() => {
    document.title = "Home Page";
  }, []);

  return (
    <section className="my-5">
      <h1 id="about">Hello World!</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
    </section>
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
