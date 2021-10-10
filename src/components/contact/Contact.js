import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-main">
      <h2 className="contact-head">Contact Details :-</h2>
      <div className="contact-div">
        <p>
          <b>Phone :</b> +91 9529137944
        </p>
        <p>
          <b>Email :</b>
          <a
            href="mailto:hatwarajinkya@gmail.com"
            target="_blank"
            className="mail"
          >
            hatwarajinkya@gmail.com
          </a>
        </p>
        <p>
          <b className="address">Address :</b>
          Nagpur, Maharashtra, India
        </p>
        <p>
          <b>Github :</b>
          <a
            href="https://github.com/Aj86952"
            target="_blank"
            className="github"
          >
            Aj86952
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
