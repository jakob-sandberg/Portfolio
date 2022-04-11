import React, { useRef } from "react";
import "./contact.css";
import { FiMail } from "react-icons/fi";
import { FaFacebookMessenger } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6d13nok",
        "template_hcglfhj",
        form.current,
        "Zg188Ty_PUywPQcwM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className="contact__option-img" />
            <h4>Email</h4>
            <h5>alexjakobsandberg@gmail.com</h5>
            <a href="mailto:alexjakobsandberg@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-img" />
            <h4>Messenger</h4>
            <h5></h5>
            <a href="https://m.me/jakob.a.sandberg/" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            type="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className=" btn btn-primary">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
