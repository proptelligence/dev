import React from 'react'

import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
import './index.css'

const ContactUs = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

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
            <p>info@proptelligence.net</p> 
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
            <div className="form-group">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                required
              />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" name="email" required />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Message"
                name="message"
                rows="5"
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactUs