// PostProperty.js
import React, { useState } from 'react';

import './index.css'; // Linking the CSS file

const PostProperty = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling form submission
  }; 

  const handleGoogleLogin = () => {
    // Functionality for handling Google login/authentication
    // For example:
    // googleAuth.signIn()
    // .then((user) => {
    //    // Handle user login
    // })
    // .catch((error) => {
    //    // Handle error
    // });
  };

  const handleFacebookLogin = () => {
   
  };

  const handleLinkedInLogin = () => {
   
  };


  const [clickedButton, setClickedButton] = useState('');



  const handleButtonClick = (buttonName) => {
    setClickedButton(buttonName);
  };

  return (
    <div className="post-property-container">
      <div className="text-and-image">
        <h1>Post Property for Free</h1>
        <img className='img101' src="https://img.freepik.com/premium-photo/property-buy-rent-concept-miniature-house-hand-pick-wooden-cube-with-text-buy-rent_577978-55.jpg" alt="Property" />
      </div>
      <div className="form-container">
        <h3>Let's get you started</h3>
        <form onSubmit={handleSubmit}>
          <div className="user-type">
            <p>You are:</p>
            <button
          className={clickedButton === 'Owner' ? 'blue-button' : 'white-button'}
          onClick={() => handleButtonClick('Owner')}
        >
          Owner
        </button> 
        <button
          className={clickedButton === 'Owner' ? 'blue-button' : 'white-button'}
          onClick={() => handleButtonClick('Owner')}
        >
     Agent
        </button>
        <button
          className={clickedButton === 'Owner' ? 'blue-button' : 'white-button'}
          onClick={() => handleButtonClick('Owner')}
        >
            Builder
        </button>
            
          </div>
          <div className="purpose">
            <p>You are here to:</p>
            <button className="white-button">Buy</button>
            <button className="white-button">Sell</button>
            <button className="white-button">Rent</button>

          </div>
          <div className="contact-info">
            <label>
              Your contact number
              <select>
                <option value="IND">IND +91</option>
                {/* Other country codes can be added */}
              </select>
              <input type="tel" placeholder="Enter your contact number" />
            </label>
            <button type="submit" className="submit-button">Submit</button> 
           

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

        </form>
      </div>
    </div>
  );
};

export default PostProperty;

