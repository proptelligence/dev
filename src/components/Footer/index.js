import React from 'react';
import {Link} from 'react-router-dom'
import './index.css'

const Footer = () => {
  return (
    <>
    <div className='footer-main'>
      <div className='footer-container-101'>
      <div className="social-links"> 
     
        <a href='https://www.facebook.com/proptelligence' target="_blank" rel="noopener noreferrer"> <img className='prop-social-img'
                src="https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg" 
                alt="Facebook"
              /></a>
        <a href='https://www.linkedin.com/company/proptelligence/'  target="_blank" rel="noopener noreferrer"> <img className='prop-social-img'
                src="https://img.freepik.com/premium-vector/linkedin-app-icon-world-s-largest-professional-network-social-networking-jobs-careers_277909-476.jpg" // Replace with the actual image URL
                alt="LinkedIn"
              /> </a>
        <a href='https://www.instagram.com/proptelligence' target="_blank" rel="noopener noreferrer"> <img className='prop-social-img'
                src="https://img.freepik.com/premium-vector/instagram-icon-paper-cut-style-social-media-icons_505135-235.jpg" 
                alt="Instagram"
              /></a>
      </div>
      <div className="legal-links"> 
      <Link  to="/privacypolicy">
      <p>Privacy Policy</p>
      </Link>
       <Link to="/proptelligence-terms&conditions">
       <p >Terms & Condition</p>
       </Link> 
       <Link to="/proptelligence-refund-policy">
       <p>Refund & Cancellation Policy</p>
       </Link>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Proptelligence. All rights reserved.
      </div>
      </div> 
    </div>
    </>
  );
}

export default Footer;
