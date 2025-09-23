import React from "react";
import myPhoto from "../assets/images/Untitled-1.jpg";
const Home = () => {
  return (
    <div className="container">
      <div className="main-container">
        <p className="Home-container">
          Hi I'm <br /> <span>Olaniyan Oluwajomiloju John 👋</span>
        </p>
        <p className="about-container">
          A passionate Front-End Developer focused on building modern,
          responsive, and user-friendly web applications. I turn ideas into
          clean, scalable, and functional digital solutions.
          {/* I’m a front-end developer passionate about creating modern,
          responsive,
          <br /> and user-friendly web applications. I specialize in{" "}
          <strong>
            Html,Css, Tailwind CSS, <br /> Javascript, Reactjs,{" "}
          </strong>
          and and I’m constantly improving my skills to <br /> stay aligned with
          the latest industry standards. My goal is to build clean,
          <br /> functional, and scalable digital solutions that help businesses
          and individuals <br /> bring their ideas to life. */}
        </p>
        <div className="button">
          <button className="hire-button">Hire me </button>
          <button className="contact-button">Contact me </button>
        </div>
      </div>
      <img src={myPhoto} alt="ownerImage" className="image" />
    </div>
  );
};

export default Home;
