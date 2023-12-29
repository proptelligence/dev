import React, { useState } from 'react'; 
import './index.css'

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // You'd perform API calls here using a library like Axios or fetch
      // Example: 
      // const response = await axios.post('your_login_endpoint', formData);
      // Handle your login logic based on the response from the API
      console.log('Login data:', formData);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  // Function placeholders for API integrations
  const handleGoogleLogin = () => {
    // Perform Google login integration
  };

  const handleFacebookLogin = () => {
    // Perform Facebook login integration
  };

  const handleLinkedInLogin = () => {
    // Perform LinkedIn login integration
  };

  const handleXLogin = () => {
    // Perform X login integration
  };

  return (
    <>
     <div className='main-cont'>
     <div className="login-container">
      <h2 className='heading1'>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
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
        <button type="submit">Login</button>
      </form>
      <div className='row-lines'>
        <hr width="120px" size="2"></hr> 
        <p>OR</p>
        <hr width="120px" size="2"></hr> 

      </div>
      <div className="social-buttons">
  <button className="google-button" onClick={handleGoogleLogin}>
    <img src="https://res.cloudinary.com/ajaymedidhi7/image/upload/v1703231079/R.27fa9f7a7ce6789c74f3679be56786c8_yfkeia.jpg" alt="Google Logo" />
    Login with Google
  </button>
  <button className="facebook-button" onClick={handleFacebookLogin}>
    <img src="https://img.freepik.com/premium-photo/facebook-application-logo-3d-rendering-white-background_41204-6939.jpg" alt="Facebook Logo" />
    Login with Facebook
  </button>
  <button className="linkedin-button" onClick={handleLinkedInLogin}>
    <img src="https://img.freepik.com/premium-vector/linkedin-icon-paper-cut-style-social-media-icons_505135-239.jpg" alt="LinkedIn Logo" />
    Login with LinkedIn
  </button>
</div>

    </div>
     </div>
    </>
  );
};

export default LoginPage;
