import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import AboutMe from "./component/About";
import Certification from "./component/Certiticates";
import MyWork from "./component/Mywork";
import Contact from "./component/Contact";
import Skills from "./component/Skills";
import Footer from "./component/Footer";
import ScrollButton from "./component/ScrollButton";
import "./index.css";
import Posts from "./component/Posts";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <hr className="divider" />
      <div id="about">
        <AboutMe />
      </div>
      <hr className="divider" />
      <div id="skills">
        <Skills />
      </div>
      <hr className="divider" />
      <div id="certificates">
        <Certification />
      </div>
      <hr className="divider" />
      <div id="work">
        <MyWork />
      </div>
      <hr className="divider" />
      <div id="work">
        <Posts/>
      </div>
      <hr className="divider" />
      <div id="contact">
        <Contact />
      </div>
      <hr className="divider" />
      <div id="footer">
        <Footer />
      </div>
      <ScrollButton />
    </div>
  );
};

export default App;
