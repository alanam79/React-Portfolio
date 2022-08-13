import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;

  // below can be used if the useEffect in About component is commented out, this will allow the tabs to change to show which section you are in
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  // defining onclick event in the return statement
  // function categorySelected() {
  //   console.log("hello");
  // }

  return (
    <header className="flex-row px-1">
      <h2>
        <a id="link" href="/">
          Alana McKeel
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-1">
            <a
              id="about"
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {/* mapping over the array of categories, Whenever we map over anything in JSX, the outermost element must have a key attribute that's set to be something unique. */}
          {/* wrapped below in an anonymous arrow function to allow about category selection function to work when clicked */}
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name &&
                !contactSelected &&
                `navActive`
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
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
