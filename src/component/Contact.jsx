import React from "react";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p>Please fill out the form below:</p>
      <a
        href="https://form.jotform.com/250913434571051"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="message-button">Open Contact Form</button>
      </a>
    </section>
    // <form action="https://formspree.io/account" method="POST">
    //   <section className="contact-section">
    //     <div className="contact-info">
    //       <label htmlFor=""></label>
    //       <input type="name" placeholder="Fullname" className="name" />
    //       <label htmlFor=""></label>
    //       <input type="email" placeholder="Email Address" className="address" />
    //     </div>
    //     <div>
    //       <label htmlFor=""></label>
    //       <input type="text" placeholder="Your Message" className="mssg" />
    //     </div>

    //     <button type="submit" className="message-button">
    //       Send Message
    //     </button>
    //   </section>
    // </form>
  );
};

export default Contact;
