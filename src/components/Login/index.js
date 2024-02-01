import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');

  const { username, password } = loginData;

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSuccess = (token) => {
    localStorage.setItem('jwtToken', token); // Storing token in localStorage
    // Redirect or perform any action after successful login
    // For example, you could redirect to the home page here
    window.location.href = '/';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', loginData);
      const { data } = response;
      
      if (response.status === 200) {
        handleLoginSuccess(data.jwt_token);
      } else {
        setError(data.error_msg || 'Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <>
       <div className='logo-cont'>
       <div className='login-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username/Email</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
            placeholder="Enter your username or email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button id='login-btn' type="submit">Login</button>
      </form>
    </div>
       </div>
    </>
  );
};

export default Login;