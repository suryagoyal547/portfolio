import React, {useRef} from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6nnsdpc', 'template_9qyzkab', form.current, 'zhMZF-gNpBRlkGfq-')
      .then((result) => {
          console.log(result.text);
          alert("Message sent");
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <div className="main">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form onSubmit={sendEmail} ref={form}>
          <input type="text" name="user_name" placeholder="Name" required />
          <input type="email" name="user_email" placeholder="Email" required />
          <input type="tel" name="user_phone" placeholder="Phone" />
          <textarea name="message" placeholder="Your message..." required ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact
