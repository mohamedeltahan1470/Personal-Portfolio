import "./Hero.css";
import logo from "../assets/my_img.jpg";
import { useRef } from "react";
const Hero = () => {
  const menuRef = useRef();
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };
  return (
    <div className="hero" id="hero">
      <div>
        <div className="hero-content">
          <p>Hello, I&apos;m</p>
          <h2>Mohammed Ali</h2>
          <p>Frontend developer &nbsp;&nbsp;&nbsp; |Software Engineer</p>
        </div>
        <div className="hero-action">
          <div
            className="hero-conntent"
            onClick={() => scrollToSection("contact")}
          >
            Connect With Me
          </div>
          <a
            href="https://i.postimg.cc/C5t7GpNM/Mohamed-Ali-CV-page-0001.jpg"
            className="hero-resume"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            My resume
          </a>
        </div>
      </div>
      <div>
        <img src={logo} />
      </div>
    </div>
  );
};

export default Hero;
