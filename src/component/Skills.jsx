import "./Skills.css";
import react from "../assets/icon/react-1.svg";
import html5 from "../assets/icon/HTML5.png";
import Css from "../assets/icon/images.png";
import js from "../assets/icon/javascript-1.svg";
import Bootstrap from "../assets/icon/bootstrap-stack.png";
import Tailwind from "../assets/icon/tailwind.png";
import MUI from "../assets/icon/material-ui-1.svg";
import Redux from "../assets/icon/redux.svg";
import Next from "../assets/icon/next.jpg"
const Skills = () => {
  const skills = [
    { name: "HTML", icon: html5 },
    { name: "CSS", icon: Css },
    { name: "JavaScript", icon: js },
    { name: "BootStrap", icon: Bootstrap },
    { name: "Tailwind", icon: Tailwind },
    { name: "React", icon: react },
    { name: "Redux", icon: Redux },
    { name: "Material UI", icon: MUI },
    { name: "Next Js", icon: Next },
  ];

  return (
    <div className="skills-section" id="skills">
      <h1>Skills</h1>
      <br />
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
