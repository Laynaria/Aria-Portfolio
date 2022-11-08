import LightsAtNights from "../../Assets/Light-At-Nights.png";
import Pistacho from "../../Assets/Pistacho-1.png";
import "./ThreeD.css";

const ThreeDSection = () => (
  <section className="threeDSection">
    <h2 className="titleBlock">3D</h2>
    <img src={LightsAtNights} alt="Ascension Illustration" id="leftThreeD" />
    <img src={Pistacho} alt="Kindness Illustration" id="rightThreeD" />
    <p className="textBlock">There is nothing you can't do with Blender.</p>
  </section>
);

export default ThreeDSection;
