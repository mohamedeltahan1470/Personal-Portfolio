import "./About.css";

const AboutMe = () => {
  return (
    <div className="about" id="about">
      <div className="about-image">
        <img 
        src="https://res.cloudinary.com/dum9aqxis/image/upload/v1733342383/7e5af332-f0be-452c-8de1-bc7fefeec3af_wgh0a8.jpg"
        alt="Mohamed Ali Abdullah" />
      </div>
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          Hello, I&apos;m <strong>Mohammed Ali</strong>, a highly skilled Frontend
          Developer with a Bachelor&apos;s degree in Information Technology. I am
          passionate about creating high-quality, scalable web applications.
        </p>
        <p>
          My skill set includes proficiency in React, JavaScript, Material UI,
          and Tailwind CSS. I excel at developing responsive, user-friendly
          interfaces and have worked on numerous exciting projects, such as an
          Edusity platform clone, e-commerce applications, and a YouTube clone
          using APIs.
        </p>
        <p>
          I am continuously learning and enhancing my skills through
          certifications in front-end web development and programming. I thrive
          on contributing to development teams with a focus on innovation and
          performance optimization.
        </p>
        <div className="about-action">
          <a href="#contact" className="about-connect">
            Connect With Me
          </a>
          <a
            href="https://mohammed-ali-abdullah-cv.tiiny.site"
            className="about-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
