import React, { useState } from "react";
import share from "../assets/images/folder.png";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navMenu = [
    { id: 2, name: "Home", link: "/" },
    { id: 3, name: "Portfolio", link: "/Portfolio" },
    { id: 4, name: "About", link: "/About" },
    { id: 5, name: "Contact", link: "/Contact" },
  ];

  return (
    <main>
      <nav className="nav-bar">
        <Link to="/projects" className="nav-left-link">
          <div className="nav-left">
            <p>
              <img src={share} alt="" className="share-icon" />
            </p>
            <p>Projects</p>
          </div>
        </Link>
        <ul className={`nav-menu ${menu ? " active" : ""}`}>
          {navMenu.map((item) => (
            <div key={item.id} className="nav-item">
              <div>
                <Link
                  className="navlink"
                  to={item.link}
                  onClick={() => setMenu(false)}
                >
                  {item.name}
                </Link>
              </div>
            </div>
          ))}
        </ul>
        <div>
          <IoMdMenu className="menu-icon" onClick={() => setMenu(!menu)} />
          <p className="download">Download CV</p>
        </div>{" "}
      </nav>
    </main>
  );
};

export default Navbar;
