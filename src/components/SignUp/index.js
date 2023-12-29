import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link from 'react-router-dom' 
import './index.css'

const SignInPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
  });

  const { name, mobile, email } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
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
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="sign-in-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile number</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div className="existing-account">
        <p>Already have an account?  <Link to="/login">Log in</Link></p>
       
      </div>
      <div className='row-lines'>
        <hr width="120px" size="2"></hr> 
        <p>OR</p>
        <hr width="120px" size="2"></hr> 

      </div>
      <div className="social-buttons">
  <button className="google-button" onClick={handleGoogleLogin}>
    <img src="https://res.cloudinary.com/ajaymedidhi7/image/upload/v1703231079/R.27fa9f7a7ce6789c74f3679be56786c8_yfkeia.jpg" alt="Google Logo" />
    Continue with Google
  </button>
  <button className="facebook-button" onClick={handleFacebookLogin}>
    <img src="https://img.freepik.com/premium-photo/facebook-application-logo-3d-rendering-white-background_41204-6939.jpg" alt="Facebook Logo" />
    Continue with Facebook
  </button>
  <button className="linkedin-button" onClick={handleLinkedInLogin}>
    <img src="https://img.freepik.com/premium-vector/linkedin-icon-paper-cut-style-social-media-icons_505135-239.jpg" alt="LinkedIn Logo" />
    Continue with LinkedIn
  </button>
</div>

    </div>
    </div>
   </>
  );
};

export default SignInPage;
