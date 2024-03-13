import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown';
import DropdownS from '../DropdownS';
import './index.css'; // Import updated styles

function Navbottom() {
  

  return (
    <div className='navbottom-container'> 
     <div className='footer-section follow'>
          <h3>Follow Us</h3>
          <ul className="social-media-buttons">
            <li>
              <a href='https://www.facebook.com/proptelligence' >
              <img
                src="https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg" // Replace with the actual image URL
                alt="Facebook"
              />
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/proptelligence' >
              <img
                src="https://img.freepik.com/premium-vector/instagram-icon-paper-cut-style-social-media-icons_505135-235.jpg" // Replace with the actual image URL
                alt="Instagram"
              />
              </a>
            </li>
           
            <li>
              <a href='https://www.linkedin.com/company/proptelligence/' >
              <img
                src="https://img.freepik.com/premium-vector/linkedin-app-icon-world-s-largest-professional-network-social-networking-jobs-careers_277909-476.jpg" // Replace with the actual image URL
                alt="LinkedIn"
              />
              </a>
            </li>
          </ul>
        </div>
      

      <div className='footer-container'> 
      <div className='footer-section contact'>
          <ul className='ui'>
          <li className='li-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='li-item'>
            <Link to='/aboutus'>About Us</Link>
          </li>
          <li className='li-item'> 
            <Link to='/legalservices'>Services</Link>
          </li> 
          <li className='li-item'> 
            <Link to='/tech'>Solutions</Link>
          </li>
          <li className='li-item'> 
            <Link to='/contact'>Contact Us</Link>
          </li>
          {/* Add more cities as needed */}
        </ul>
        </div>
       
        <div className='footer-section contact'>
          <ul className='ui'>
          <li className='li-item'>
            <Link to='/prop'>Propeties in Telangana</Link>
          </li>
          <li className='li-item'>
            <Link to='/prop'>Propeties in Hyderabad</Link>
          </li>
          <li className='li-item'> 
            <Link to='/prop'>Propeties in Mumbai</Link>
          </li> 
          <li className='li-item'>
            <Link to='/prop'>Propeties in Delhi</Link>
          </li>
          <li className='li-item'>
            <Link to='/prop'>Propeties in Pune</Link>
          </li>
          <li className='li-item'> 
            <Link to='/prop'> Propeties in Kolkata</Link>
          </li>
         
          {/* Add more cities as needed */}
        </ul>
        </div> 
       
        <div className='footer-section contact'>
          <ul className='ui'>
          <li className='li-item'>
            <Link to='/legalservices'>Legal Services in Bangalore</Link>
          </li>
          <li className='li-item'>
            <Link to='/legalservices'>Legal Services in Hyderabad</Link>
          </li>
          <li className='li-item'> 
            <Link to='/legalservices'>Legal Services in Mumbai</Link>
          </li> 
          <li className='li-item'>
            <Link to='/legalservices'>Legal Services in Delhi</Link>
          </li>
          <li className='li-item'>
            <Link to='/legalservices'>Legal Services in Pune</Link>
          </li>
          <li className='li-item'> 
            <Link to='/legalservices'>Legal Services in Kolkata</Link>
          </li>
         
          {/* Add more cities as needed */}
        </ul>
        </div> 
        <div className='footer-section contact'>
          <ul className='ui'>
          <li className='li-item'>
            <Link to='/proptelligence-terms&conditions'>Terms & Condition</Link>
          </li>
          <li className='li-item'>
            <Link to='/privacypolicy'>Privacy Policy</Link>
          </li>
          <li className='li-item'> 
            <Link to='/proptelligence-refund-policy'>Refund & Cancellation Policy</Link>
          </li>
          {/* Add more cities as needed */}
        </ul>
        </div>  
      </div>
      <div className="copyright1">
        &copy; {new Date().getFullYear()} Proptelligence. All rights reserved.
      </div>
    </div>
  );
}

export default Navbottom;
