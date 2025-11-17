import React from "react";

// Import skill images
import htmlImg from "../assets/skills/html.png";
import cssImg from "../assets/skills/css.png";
import jsImg from "../assets/skills/js.png";
import reactImg from "../assets/skills/react.png";
import figmaImg from "../assets/skills/figma.png";
import pythonImg from "../assets/skills/python.png";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-inner">

        {/* LEFT SIDE — ABOUT TEXT */}
        <div className="about-text">
          <h2 className="section-title">About Me</h2>

          <p>
            I’m a design-focused Information Technology student from LICET.
            I enjoy turning clean, minimal designs into responsive, modern
            user interfaces.
          </p>

          <p>
            I have experience in React development, Figma UI design, Oracle APEX
            application workflow, and an AI waste classification project during
            my Shell Internship.
          </p>

          <p>
            My passion lies in building neat, aesthetic user experiences
            using dark-themed color palettes and smooth interactions.
          </p>
        </div>

        {/* RIGHT SIDE — SKILLS SECTION */}
        <div id="skills" className="skills-column">
          <h3>Skills</h3>

          <div className="skills-grid">

            <div className="skill">
              <img src={htmlImg} alt="HTML" />
              <span>HTML</span>
            </div>

            <div className="skill">
              <img src={cssImg} alt="CSS" />
              <span>CSS</span>
            </div>

            <div className="skill">
              <img src={jsImg} alt="JavaScript" />
              <span>JavaScript</span>
            </div>

            <div className="skill">
              <img src={reactImg} alt="React" />
              <span>React</span>
            </div>

            <div className="skill">
              <img src={figmaImg} alt="Figma" />
              <span>Figma</span>
            </div>

            <div className="skill">
              <img src={pythonImg} alt="Python" />
              <span>Python</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
