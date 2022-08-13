import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  // below can be used if the useEffect in About component is commented out, this will allow the tabs to change to show which section you are in
  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory.name);
  // }, [currentCategory]);

  // defining onclick event in the return statement
  // function categorySelected() {
  //   console.log("hello");
  // }

  return (
    <header className="flex-row px-1">
      <h2>Alana McKeel</h2>
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
            <li
              className={`mx-1 ${
                // The below code means that currentCategory.name === category.name will get evaluated, and as long as it is true, then the second bit of the short circuit, navActive, will be returned.
                currentCategory.name === category.name && "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
