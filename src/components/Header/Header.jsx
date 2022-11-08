import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [burgerState, setBurgerState] = useState(false);
  const burgerWindow = document.querySelector("nav ul");
  const burgerHandler = () => {
    setBurgerState(!burgerState);
  };

  window.addEventListener("click", () => {
    burgerState
      ? (burgerWindow.style.left = "0px")
      : (burgerWindow.style.left = "-500px");
  });
  return (
    <header>
      <nav>
        <p id="homeLink">
          <span id="burgerIcon" onClick={burgerHandler}>
            &#9776;
          </span>
          <span>H</span>
        </p>
        <ul>
          <li>About Me</li>
          <li>Illustrations</li>
          <li>Projects</li>
          <li>UX/UI</li>
          <li>3D</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div id="navDecoration"></div>
    </header>
  );
};

export default Header;
