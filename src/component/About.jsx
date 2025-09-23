import React from "react";
import myPhoto from "../assets/images/Untitled-1.jpg";

const About = () => {
  return (
    <section className="about-section">
      <img src={myPhoto} alt="Olaniyan Oluwajomiloju" className="image2" />
      <div className="about-text">
        <p>
          I’m{" "}
          <span className="highlight">
            {" "}
            <strong>Olaniyan Oluwajomiloju</strong>
          </span>
          , a passionate front-end developer with a love for building clean,
          functional, and user-friendly web applications. My journey into web
          development started with curiosity about how websites work, and today,
          I specialize in{" "}
          <strong>HTML, CSS, Tailwind CSS, JavaScript, and Reactjs.</strong>
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
    </section>
  );
};

export default About;
