import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegistrationPage.css';
// import {Toaster,toast} from 'sooner'
const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    uname: '',
    email: '',
    pwd: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await fetch('http://localhost:5000/registration', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   data: formData,
      // });
      const config={
        headers: {
              'Content-Type': 'application/json',
            }
      }
      const response= await axios.post("http://localhost:5000/registration",formData,config)
      console.log(formData)
      console.log(response);
      if (response.status===200) {
        console.log('User Registered successfully');
      } else {
        console.error('Failed to register user');
      }
    } catch (error) {
      console.log(error)
    }
  };
  // const handleClick(()=>{
  //   return(
  //     <div>
  //         <Toaster/>
          
  //     </div>
  //   );
  // });

  return (
    <div className="registration-container">
      <div className="registration-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="uname"
            required
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="pwd"
            required
            onChange={handleChange}
          />

          <button type="submit" >Register</button>
        </form>

        <div className="additional-links">
          <Link to="/">Already have an account? Login here</Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
