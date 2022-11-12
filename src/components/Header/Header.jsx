import { useState } from "react";
import "./Header.css";

const Header = () => {
  // menu burger
  const [burgerState, setBurgerState] = useState(false);
  const burgerHandler = () => {
    setBurgerState(!burgerState);
  };

  // anchor links, scrolls method

  const scrollToTop = () => {
    const body = document.querySelector("body");
    body.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToAboutMe = () => {
    const aboutMe = document.querySelector(".aboutMe");
    aboutMe.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToIllustration = () => {
    const illuSection = document.querySelector(".illuSection");
    illuSection.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToProjects = () => {
    const projectSection = document.querySelector(".projectSection");
    projectSection.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToUxUi = () => {
    const uxUiSection = document.querySelector(".uxUi");
    uxUiSection.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollTo3D = () => {
    const threeDSection = document.querySelector(".threeDSection");
    threeDSection.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header>
      <nav>
        <p id="homeLink">
          <span id="burgerIcon" onClick={burgerHandler}>
            &#9776;
          </span>
          <span id="logoMenu" onClick={scrollToTop}>
            H
          </span>
        </p>
        <ul className={burgerState ? "burgerVisible" : ""}>
          <li onClick={scrollToAboutMe}>About Me</li>
          <li onClick={scrollToIllustration}>Illustrations</li>
          <li onClick={scrollToProjects}>Projects</li>
          <li onClick={scrollToUxUi}>UX/UI</li>
          <li onClick={scrollTo3D}>3D</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div id="navDecoration"></div>
    </header>
  );
};

export default Header;
