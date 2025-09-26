import React from "react";
import { Link } from "react-router-dom";
import myPhoto from "../assets/images/Untitled-1.jpg";

const Home = () => {
  return (
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
  );
};

export default Home;
