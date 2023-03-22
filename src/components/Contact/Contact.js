import React, { useRef } from "react";
import './Contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const Contact = () => {
  // send client mail to my email
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2pqgl4x",
        "template_bo4w939",
        form.current,
        "9y8P4jc0UnKIVoTWo"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="w-2/3 mx-auto" id="contact">
      <h5 className="text-center">Get In Touch</h5>
      <h2 className="text-2xl text-center py-4 text-blue-500 mb-4">Contact Me</h2>

      <div className="containers contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon mx-auto" />
            <h4>Email</h4>
            <h5>bayajidalam2001@gmail.com</h5>
            <Link target="_blank" to="mailto:bayajidalam2001@gmail.com">
              Send a message
            </Link>
          </article>
          <article className="contact_option">
            <BsMessenger className="contact_option-icon mx-auto" />
            <h4>Messenger</h4>
            <h5>Bayajid Alam Juyel</h5>
            < Link target="_blank" to="https://m.me/bayajid2001">
              Send a message
            </Link>
          </article>
          <article className="contact_option">
            <FaWhatsapp className="contact_option-icon mx-auto" />
            <h4>Whatsapp</h4>
            <h5>01860301407</h5>
            <Link target="_blank" to='https://api.whatsapp.com/send?phone=01860301407'>Send a message</Link>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            required
          />
          <input type="email" name="name" placeholder="johndoe@gmail.com"/>
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
