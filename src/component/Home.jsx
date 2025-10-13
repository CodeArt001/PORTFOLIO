import React from "react";
import { Link } from "react-router-dom";
import myPhoto from "../assets/images/Untitled-1.jpg";
import Herosection from "./Herosection";

const Home = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="main-container">
          <p className="Home-container fade-zoom-in">
            Hi I'm <br /> <span>Olaniyan Oluwajomiloju John 👋</span>
          </p>
          <p className="about-container">
            A passionate Front-End Developer focused on building modern,
            responsive, and user-friendly web applications. I turn ideas into
            clean, scalable, and functional digital solutions.
          </p>
          <p className="extra-paragraph">
            Beyond just coding, I enjoy solving real-world problems and
            collaborating with teams to deliver meaningful solutions.{" "}
          </p>
          <p className="extra-paragraph">
            My development philosophy is simple: clean code, intuitive design,
            and a focus on delivering real value to users.
          </p>
          <p className="extra-paragraph">
            Outside of coding, I enjoy learning new technologies and working on
            personal projects that challenge my creativity.
          </p>

          <div className="button fade-zoom-in">
            <a href="https://wa.me/2349061965442">
              <button className="hire-button">Hire me </button>
            </a>
            <Link to="/contact">
              <button className="contact-button">Contact me </button>
            </Link>
          </div>
        </div>
        <img src={myPhoto} alt="ownerImage" className="image" />
      </div>
      <p className="projects-title">PROJECTS</p>
      <div>
        <Herosection />
      </div>
    </div>
  );
};

export default Home;
