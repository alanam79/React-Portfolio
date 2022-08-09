import React from "react";

function Nav() {
  const categories = [
    {
      name: "projects",
      description: "Group Projects I have participated in.",
    },
    {
      name: "homework",
      description: "Assignments I have completed during Coding Bootcamp.",
    },
    { name: "resume", description: "My Resume" },
    // {
    //   name: "landscape",
    //   description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    // },
  ];

  function categorySelected(name) {
    console.log(`${name} clicked`);
  }

  return (
    <header>
      <h2>Alana McKeel Portfolio</h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span onClick={() => categorySelected(category.name)}>
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
