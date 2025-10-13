import React from "react";
import Projects from "./Projects";
const portfolio = [
  {
    id: 1,
    Title: "Rubies-Technology",
    desc: "Html,Css,ReactJs",
    Link: "https://rubiestechfoundation.vercel.app/",
  },
  {
    id: 2,
    Title: "Appointment",
    desc: "Html,CSS,ReactJs",
    Link: "https://appointment-wh8y.vercel.app/",
  },
  {
    id: 3,
    Title: "...Loading",
    desc: "..Loading",
    // Link: "https://rubiestechfoundation.vercel.app/",
  },
];

const Herosection = () => {
  return (
    <div className="bg">
      <div className="project-container">
        {portfolio.map((items, index) => (
          <div key={index} className="project-card fade-zoom-in">
            <img
              src={
                items.Link
                  ? `https://s.wordpress.com/mshots/v1/${items.Link}`
                  : "https://via.placeholder.com/400x250?text=Coming+Soon"
              }
              alt={items.Title}
              className="project-image"
            />
            <div>
              <a href={items.Link} target="_Blank" rel="noopener noreferrer">
                Visit project
              </a>
            </div>
            <div>
              <h2>{items.Title}</h2>
              <p className="desc">{items.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="JOIN-SECTION">
        <Projects />
      </div>
    </div>
  );
};

export default Herosection;
