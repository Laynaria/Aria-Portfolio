import Prayers from "../../Assets/Prayers.png";
import Serene from "../../Assets/Serene.png";
import "./IlluSection.css";

const IlluSection = () => (
  <section className="illuSection">
    <h2 className="titleBlock">Illustrations</h2>
    <img src={Prayers} alt="Prayer Illustration" id="leftIllu" />
    <img src={Serene} alt="Serene Illustration" id="rightIllu" />
    <p className="textBlock">
      Here is where I express myself without any restriction.
    </p>
  </section>
);

export default IlluSection;
