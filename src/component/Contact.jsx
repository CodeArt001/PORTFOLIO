import React from "react";

const Contact = () => {
  return (
    <form action="https://formspree.io/account" method="POST">
      <section className="contact-section">
        <div className="contact-info">
          <label htmlFor=""></label>
          <input type="name" placeholder="Fullname" className="name" />
          <label htmlFor=""></label>
          <input type="email" placeholder="Email Address" className="address" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="text" placeholder="Your Message" className="mssg" />
        </div>

        <button type="submit" className="message-button">
          Send Message
        </button>
      </section>
    </form>
  );
};

export default Contact;
