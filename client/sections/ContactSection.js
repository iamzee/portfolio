import React from 'react';

const ContactSection = () => (
  <div className="contact-section col-schema--back" id="contact-section">
    <h2 className="contact-section__title">Contact Me</h2>
    <form className="form">
      <div className="form__group">
        <input
          className="form__input"
          type="text"
          placeholder="Email"
          id="email"
        />
      </div>
      <div classname="form__group">
        <textarea
          className="form__input"
          type="text"
          placeholder="Enter your message"
          id="message"
          rows="5"
        />
      </div>
    </form>
  </div>
);

export default ContactSection;
