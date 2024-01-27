import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown';
import DropdownS from '../DropdownS';
import './index.css'; // Import updated styles

function Navbottom() {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [techDropdown, setTechDropdown] = useState(false);

  const closeMenus = () => {
    setServicesDropdown(false);
    setTechDropdown(false);
  };

  const handleServicesHover = () => {
    if (window.innerWidth >= 960) {
      setServicesDropdown(true);
      setTechDropdown(false);
    }
  };

  const handleTechHover = () => {
    if (window.innerWidth >= 960) {
      setTechDropdown(true);
      setServicesDropdown(false);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 960) {
      closeMenus();
    }
  };

  const closeMobileMenu = () => {
    closeMenus(); // Close menus when mobile menu items are clicked
  };

  return (
    <div className='navbottom-container'>
      <ul className='nav-menu'>
        <li className='nav-item'>
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
            About Us
          </Link>
        </li>
        <li
          className='nav-item'
          onMouseEnter={handleServicesHover}
          onMouseLeave={handleMouseLeave}
        >
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Services <i className='fas fa-caret-down' />
          </Link>
          {servicesDropdown && <DropdownS />} {/* Display Services dropdown */}
        </li>
        <li
          className='nav-item'
          onMouseEnter={handleTechHover}
          onMouseLeave={handleMouseLeave}
        >
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Solutions <i className='fas fa-caret-down' />
          </Link>
          {techDropdown && <Dropdown />} {/* Display Technologies dropdown */}
        </li>
        <li className='nav-item'>
          <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
            Contact Us
          </Link>
        </li>
      </ul>

      <div className='footer-container'>
        <div className='footer-section contact'>
          <h3>Contact Us</h3>
          <p>
            <i className='fa fa-phone' /> 080-71176088
          </p>
          <p>Email - connect@proptelligence.net</p>
        </div>
        <div className='footer-section follow'>
          <h3>Follow Us</h3>
          <ul className='social-links'>
          <li>
              <a href='https://www.linkedin.com/company/proptelligence/' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-linkedin'></i> 
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com/proptelligence' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-facebook'></i> 
              </a>
            </li>
            <li>
              <a href='https:/instagram.com/proptelligence' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-instagram'></i>
              </a>
            </li>
            <li>
              <a href='https:/x.com/proptelligence' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-twitter'></i> 
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbottom;
