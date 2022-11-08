import LaynariaMini from "../../assets/LaynariaMini.png";
import PortfolioMini from "../../assets/PortfolioMini.png";
import "./Project.css";

const ProjectSection = () => (
  <section className="projectSection">
    <h2 className="titleBlock">Projects</h2>
    <img src={LaynariaMini} alt="Laynaria Project Picture" id="leftProject" />
    <img
      src={PortfolioMini}
      alt="Portfolio Project Picture"
      id="rightProject"
    />
    <p className="textBlock">
      All my professional projects are introduced here.
    </p>
  </section>
);

export default ProjectSection;
