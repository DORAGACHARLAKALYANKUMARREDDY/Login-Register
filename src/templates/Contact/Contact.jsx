// ContactForm.jsx
import React, { useState } from 'react';
import './ContactForm.css'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        alert('Email sent successfully');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="wrapper">
      <div className="contact__container">
        <div className="contact__title">
          <h2>Contact us</h2>
          <hr />
        </div>
        <form className="contact__form" onSubmit={handleSubmit}>
          <p>Name</p>
          <input
            className="contact__form-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <p>Email</p>
          <input
            className="contact__form-input"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <p>Message</p>
          <textarea
            className="contact__form-textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" value="Send message" >Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
