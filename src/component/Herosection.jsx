import React from "react";
const portfolio = [
  {
    id: 1,
    Title: "Rubies-Technology",
    desc: "Html,Css,ReactJs",
    Link: "https://rubiestechfoundation.vercel.app/",
  },
  {
    id: 2,
    Title: "...Loading",
    desc: "...Loading",
    // Link: "https://rubiestechfoundation.vercel.app/",
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
    <div className="project-container">
      {portfolio.map((items, index) => (
        <div key={index} className="project-card fade-zoom-in">
          <img
            src={`https://image.thum.io/get/${items.Link}`}
            alt=""
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
  );
};

export default Herosection;
