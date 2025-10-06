import React from "react";
import "../css/contact.css";

const Contact = () => {
  return (
    <div className="mainContactCon" id="contact">
      <h2>Contact Us</h2>
      <p>
        We’d love to hear from you! Please fill out the form below and we’ll get
        back to you shortly.
      </p>
      <form>
        <label htmlFor="name">Enter Your Name</label>
        <input type="text" name="name" placeholder="Enter Your Name..." />

        <label htmlFor="name">Enter Your Email</label>
        <input type="text" name="name" placeholder="Enter Your Email..." />

        <label htmlFor="name">Subject</label>
        <input type="text" name="name" placeholder="Subject" />

        <label htmlFor="message">Message</label>
        <textarea name="message" placeholder="Your Message..."></textarea>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
