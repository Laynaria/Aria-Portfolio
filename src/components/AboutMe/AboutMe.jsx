import Avatar from "../../assets/Avatar.png";
import "./AboutMe.css";

const AboutMe = () => (
  <section className="aboutMe">
    <h2>About Me</h2>
    <img src={Avatar} alt="Asvatar" />
    <p className="textBlock">All informations about me are gathered here.</p>
  </section>
);

export default AboutMe;
