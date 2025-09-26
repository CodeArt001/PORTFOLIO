import React from "react";
import whatsapp from "../assets/images/whatsapp3.png";
import Gmail from "../assets/images/gmail.png";
import phone from "../assets/images/phone2.png";
import Facebook from "../assets/images/facebook.png";
import x from "../assets/images/twitter.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-contents">
        <div>
          <p className="intouch">Get In Touch</p>
          <a href="tel:+234 808 751 6511" className="call-container">
            <img src={phone} alt="" />
            <p>+2348028087813</p>
          </a>
          <a
            className="email-container"
            href="mailto:olaniyanoluwajomiloju25@gmail.com"
          >
            <img src={Gmail} alt="" />
            <p>olaniyanoluwajomiloju25@gmail.com</p>
          </a>
          <a
            href="https://wa.me/2349061965442"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-container"
          >
            {" "}
            <img src={whatsapp} alt="" />
            <p>+2349061965442</p>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/CodeArt001/react"
            target="_Blank"
            rel="noopener noreferrer"
            className="git"
          >
            GitHub: https://github.com/CodeArt001/react:
          </a>
          <a
            href="https://www.facebook.com/share/16ypn1GSJE/?mibextid=wwXlfr"
            target="_blank"
            rel="noopener noreferrer"
            className="fb-icon"
          >
            <img src={Facebook} alt="" />
            <p> Olaniyan Oluwajomiloju</p>
          </a>
          <a
            href="https://x.com/High_tnsion_ 
          "
            className="X-ACT"
          >
            <img src={x} alt="" />
            <p>High_tnsion</p>
          </a>
        </div>
        <div className="footer-boom">
          <p>&copy; Olaniyan Oluwajomiloju J.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
