import React from "react";
import myPhoto from "../assets/images/Untitled-1.jpg";
import HTML from "../assets/images/html.png";
import css from "../assets/images/CSS.jpeg";
import script from "../assets/images/java.png";
import act from "../assets/images/react.png";
import Contact from "./Contact";

const About = () => {
  return (
    <section className="about-section">
      <img
        src={myPhoto}
        alt="Olaniyan Oluwajomiloju"
        className="image2 fade-zoom-in"
      />
      <div className="about-text fade-zoom-in">
        <p>
          I’m {""}
          <span className="highlight">
            <strong>Olaniyan Oluwajomiloju</strong>
          </span>
          , a passionate front-end developer with a love for building clean,
          functional, and user-friendly web applications. My journey into web
          development started with curiosity about how websites work, and today,
          I specialize in{" "}
          <div id="lang-container">
            <div id="lang">
              <img src={HTML} alt="" className="html-image" />
              <div className="LANG1">HTML</div>
            </div>
            <div id="lang">
              <img src={css} alt="" className="html-image" />
              <div className="LANG1" id="css-text">
                CSS
              </div>
            </div>
            <div id="lang">
              <img src={script} alt="" className="html-image" />
              <div className="LANG1" id="java-text">
                JAVASCRIPT
              </div>
            </div>
            <div id="lang">
              <img src={act} alt="" className="html-image" />
              <div className="LANG1" id="react-text">
                REACTJS
              </div>
            </div>
          </div>
        </p>
        <p>
          I enjoy solving problems, turning ideas into interactive experiences,
          and continuously learning to stay aligned with industry standards. My
          approach to development is simple: write clean code, design with
          purpose, and always put the user first.
        </p>
        <p>
          Outside of coding, I enjoy exploring new technologies, reading, and
          working on personal projects that challenge me to grow. I believe in
          lifelong learning and bringing creativity into everything I do.
        </p>
      </div>
      <div className="contact-join">
        <Contact />
      </div>
    </section>
  );
};

export default About;
