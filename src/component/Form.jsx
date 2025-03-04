import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Form.css";

const Form = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ull197", // Replace with your EmailJS Service ID
        "template_ooofskg", // Replace with your EmailJS Template ID
        form.current,
        "vnRJmGO3q1sPP1ksZ" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          setMessage("Email sent successfully!");
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          setMessage("Failed to send email. Try again later.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Form">
      <div className="Form-container">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="Form-form">
            <label htmlFor="name">Your Name </label> 
          <input
            type="text"
            id="name"
            name="from_name"
            placeholder="Your Name"
            required
          /> 
          <label htmlFor="email">Your Email </label> 
          <input
            type="email"
            id="email"
            name="reply_to"
            placeholder="Your Email"
            required
          />
          
          <label htmlFor="msg">Your Message</label> 
          <textarea
            name="message"
            id="msg"
            placeholder="Your Message"
            required
          ></textarea>
          
          <button type="submit">Send</button>
        </form>
        {message && <p className="Form-msg">{message}</p>}
      </div>
    </div>
  );
};

export default Form;
