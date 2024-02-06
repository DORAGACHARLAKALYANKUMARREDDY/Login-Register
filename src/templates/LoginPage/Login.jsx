import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    pwd: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Assuming you are making the login request in a component

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.post("http://localhost:5000/login", formData, config);
    console.log(response);

    if (response.data.status === "ok") {
      const token = response.data.data;
      console.log('Token:', token);
      // Now you can use the token as needed (e.g., store it in state or local storage)
      alert("login successfull");
      window.localStorage.setItem("token",token);
      window.location.href="/userDetails"
    } else {
      alert("wrong password or email")
      console.error('Failed to login user');
    }
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" required onChange={handleChange} />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="pwd" required onChange={handleChange} />

          <button type="submit">Login</button>
        </form>

        <div className="additional-links">
          <Link to="/forgot-password">Forgot Password?</Link>
          <span> | </span>
          <Link to="/registration">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
