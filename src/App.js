import About from "./About";
import "./App.css";
import Edu from "./Edu";
import Main from "./Main";
import Nav from "./Nav";
import Contact from "./Contact";
import Skill from "./Skill";
import Project from "./Project";

function App() {
  return (
    <header className="container">
      <div className="portfolio">
        <div className="portofolio-deatail">
          <div className="bg-blur"></div>
          <img src="./a.jpg" className="portfolio-img" />
          <span className="portfolio-h3"> roshan Kumar</span>
          <p className="portfolio-p">Full Stack Developer</p>
          <Nav />
        </div>
      </div>
      <div className="portfolio-main">
        <Main />
        <About />
        <Edu />
        <Skill />
        <Project />
        <Contact />
      </div>
    </header>
  );
}

export default App;
