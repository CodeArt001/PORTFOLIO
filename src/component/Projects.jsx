import React from "react";

const Projects = () => {
  const project = [
    {
      id: 1,
      Title: "Cart",
      Desc: "Html,Css,Reactjs",
      link: "https://cart-tan-rho.vercel.app/",
    },
    {
      id: 2,
      Title: "Extension",
      Desc: "Html,Css,Reactjs",
      link: "https://extensionlist-neon.vercel.app/",
    },
    {
      id: 3,
      Title: "Eat and Slip",
      Desc: "Html,Css,Reactjs",
      link: "https://eat-and-slip-two.vercel.app/",
    },
    {
      id: 4,
      Title: "Todo",
      Desc: "Html,Css,Javascript",
      link: "https://dice-game-phi-amber.vercel.app/",
    },
  ];

  return (
    <section>
      <div className="project-container">
        {project.map((items, index) => (
          <div key={index} className="project-card">
            <img
              src={`https://image.thum.io/get/${items.link}`}
              alt="project-thumbnail"
              className="project-image"
            />
            <div>
              <a href={items.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
            <div>
              <h2>{items.Title}</h2>
              <p className="desc">{items.Desc}</p>
            </div>
          </div>

          // <a
          //   href={items.link}
          //   key={index}
          //   target="_blank"
          //   rel="noopener noreferrer"
          //   className="project-card"
          // >
          //   <img
          //     src={`https://image.thum.io/get/${items.link}`}
          //     alt="project-thumbnail"
          //     className="project-image"
          //   />
          //   <div>
          //     <a href={items.link}>View Project</a>
          //     <h1>{items.Title}</h1>
          //     <p>{items.Desc}</p>
          //   </div>
          // </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
