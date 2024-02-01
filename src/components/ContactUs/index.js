import React, { useState } from 'react'; 
import {Link} from 'react-router-dom'
import Navbar from '../Navbar';
import './index.css'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://formdata-bpqo.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setSubmitStatus('success');
        console.log('Email sent successfully!');
  
        // Clear form fields after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        console.error('Failed to send email');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending email:', error);
    }
  };

  return (
    <> 
    <Navbar/>
    <div className="cont1"> 
      <div className="contact-us-container">
        <div className="contact-info"> 
        <img src="https://img.freepik.com/free-photo/contact-register-feedback-support-help-concept_53876-124243.jpg" alt="contact-us"/>
          <p>
            Feel free to get in touch with us. We are here to assist you with
            any inquiries or concerns you may have.
          </p>
          <div className="contact-details">
            <p>Say Hello</p>
            <p>080-71176088</p>
            <p>connect@proptelligence.net</p> 
          </div>
          {/* Add Social Media Buttons */}
          <div className="social-media-buttons">
            <Link to="/facebook">
              <img
                src="https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg" // Replace with the actual image URL
                alt="Facebook"
              />
            </Link>
            <Link to="/twitter" target="_blank">
              <img
                src="https://img.freepik.com/premium-vector/vector-new-twitter-logo-x-2023-twitter-x-logo-twitter-with-black-circle_982187-137.jpg" // Replace with the actual image URL
                alt="Twitter"
              />
            </Link>

            <a href="https://www.linkedin.com/company/proptelligence/">
              <img
                src="https://img.freepik.com/premium-vector/linkedin-app-icon-world-s-largest-professional-network-social-networking-jobs-careers_277909-476.jpg" // Replace with the actual image URL
                alt="LinkedIn"
              />
            </a>

            <Link to="/instagram" target="_blank">
              <img
                src="https://img.freepik.com/premium-vector/instagram-icon-paper-cut-style-social-media-icons_505135-235.jpg" // Replace with the actual image URL
                alt="Instagram"
              />
            </Link>
          </div>
        </div>
        <div className="contact-form">
          <h3>Send us a message</h3>
          <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>

        {submitStatus === 'success' && (
          <p style={{ color: 'green' }}>Message sent successfully!</p>
        )}

        {submitStatus === 'error' && (
          <p style={{ color: 'red' }}>
            Oops! Something went wrong. Please try again later.
          </p>
        )}
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
