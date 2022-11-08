import BackgroundSVG from "./components/BackgroundSVG";
import Header from "./components/Header/Header.jsx";
import AboutMe from "./components/AboutMe/AboutMe";
import IlluSection from "./components/IlluSection/IlluSection";
import ProjectSection from "./components/Projects/Projects";
import UxUi from "./components/UxUi/UxUi";
import ThreeD from "./components/ThreeD/ThreeD";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BackgroundSVG />
      <Header />
      <main>
        <h2 id="welcome">Welcome to my Professional Portfolio!</h2>
        <AboutMe />
        <IlluSection />
        <ProjectSection />
        <UxUi />
        <ThreeD />
      </main>
      <Footer />
    </div>
  );
}

export default App;
