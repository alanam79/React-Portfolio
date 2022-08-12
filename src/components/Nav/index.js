import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  // const { categories = [], setCurrentCategory, currentCategory } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory.name);
  // }, [currentCategory]);

  const categories = [
    {
      name: "portfolio",
      description:
        "A compilation of my projects and challenges completed thru the bootcamp.",
    },
    { name: "resume", description: "My Resume" },
  ];
  // defining onclick event in the return statement
  function categorySelected() {
    console.log("hello");
  }

  return (
    <header className="flex-row px-1">
      <h2>📍Portfolio!</h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {/* mapping over the array of categories, Whenever we map over anything in JSX, the outermost element must have a key attribute that's set to be something unique. */}
          {/* wrapped below in an anonymous arrow function to allow about category selection function to work when clicked */}
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
