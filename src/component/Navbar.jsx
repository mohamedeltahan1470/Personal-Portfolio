import "./Navbar.css";
import { useRef } from "react";
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/menu_close.svg";

const Navbar = () => {
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
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
    <div className="navbar">
      <img
       className="img1" 
       src="https://res.cloudinary.com/dum9aqxis/image/upload/v1733342435/514d3cb5-8bd6-4d69-843b-c780ca8f8287_wtveca.jpg"
      // src="https://res.cloudinary.com/dum9aqxis/image/upload/v1734792027/%D8%B5%D9%88%D8%B1%D8%A9_1_qhtcp0.jpg"
       alt="Logo" />

      <img
        src={menu_open}
        onClick={openMenu}
        alt="Open Menu"
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="Close Menu"
          className="nav-mob-close"
        />
        <li onClick={() => scrollToSection("hero")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About Me</li>
        <li onClick={() => scrollToSection("skills")}>Skills</li>
        <li onClick={() => scrollToSection("certificates")}>Certificates</li>
        <li onClick={() => scrollToSection("work")}>Work</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
        <li onClick={() => scrollToSection("footer")}>Footer</li>
      </ul>
      <div className="nav-conntent" onClick={() => scrollToSection("contact")}>
        <p>Connect With Me</p>
      </div>
    </div>
  );
};

export default Navbar;
