import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './index.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    registrationSuccess: false,
    errorMessage: '',
  });

  const { name, mobile, email, password, registrationSuccess, errorMessage } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3005/register', {
        name,
        mobile,
        email,
        password,
      });

      console.log(response.data);
      setFormData({ ...formData, registrationSuccess: true });
    } catch (error) {
      console.error('Error registering user:', error);
      setFormData({
        ...formData,
        errorMessage: 'User already exists. Please use a different email.',
      });
    }
  };

  const handleGoogleLogin = () => {
    // Perform Google login integration
  };

  const handleFacebookLogin = () => {
    // Perform Facebook login integration
  };

  const handleLinkedInLogin = () => {
    // Perform LinkedIn login integration
  };

  return (
    <>
      <div className='main-cont'>
        <div className='sign-in-container'>
          {registrationSuccess ? (
            <div className='success-message'>
              <p>Registration Successful!</p>
              <img
                src='https://assets.ccbp.in/frontend/react-js/events-regestered-img.png'
                alt='Success'
                width='200'
                height='200'
              /> 
             <p> <Link to='/login'>Login Here</Link></p>
            </div>
          ) : (
            <>
              <h2>Sign Up</h2>
              <form onSubmit={handleSubmit} className='sign-in-form'>
                <div className='form-group'>
                  <label htmlFor='name'>Name</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={name}
                    placeholder='Enter your Name'
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='mobile'>Mobile number</label>
                  <input
                    type='text'
                    id='mobile'
                    name='mobile'
                    placeholder='Enter your Mobile Number'
                    value={mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Create your own Password'
                    value={password}
                    onChange={handleChange}
                    required
                  />
                </div>
                {errorMessage && <p className='error-message'>{errorMessage}</p>}
                <button id='sign-button' type='submit'>Sign Up</button>
              </form>
              <div className="existing-account">
                <p>Already have an account? <Link to="/login">Log in</Link></p>
              </div>
              <div className='row-lines'>
                  <hr width="120px" size="2"></hr> 
                  <p>OR</p>
                  <hr width="120px" size="2"></hr> 

               </div>
              <div className='social-buttons'>
                <button className='google-button' onClick={handleGoogleLogin}>
                  <img
                    src='https://res.cloudinary.com/ajaymedidhi7/image/upload/v1703231079/R.27fa9f7a7ce6789c74f3679be56786c8_yfkeia.jpg'
                    alt='Google Logo'
                  />
                  Continue with Google
                </button>
                <button className='facebook-button' onClick={handleFacebookLogin}>
                  <img
                    src='https://img.freepik.com/premium-photo/facebook-application-logo-3d-rendering-white-background_41204-6939.jpg'
                    alt='Facebook Logo'
                  />
                  Continue with Facebook
                </button>
                
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SignUp;
