import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-form-containerf">
      <h2 style={{ marginTop: "40px" }}>CONTACT US</h2>
      <p
        style={{
          letterSpacing: "5px",
          marginBottom: "50px",
          color: "orange",
        }}
      >
        WE ARE HERE TO HELP YOU
      </p>
      <form
        onSubmit={handleSubmit}
        className="container"
        style={{ maxWidth: "50%" }}
      >
        <div className="input-groupf">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" onChange={handleChange} />
        </div>
        <div className="input-groupf">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" onChange={handleChange} />
        </div>
        <div className="input-groupf">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="bf" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
