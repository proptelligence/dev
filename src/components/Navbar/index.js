import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropdown';
import DropdownS from '../DropdownS';
import './index.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [servicesDropdown, setServicesDropdown] = useState(false);
    const [techDropdown, setTechDropdown] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => {
      setClick(false);
      setServicesDropdown(false); // Close both dropdowns when closing mobile menu
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
        setServicesDropdown(false);
        setTechDropdown(false);
      }
    };

  return (
    <> 
     <nav className='navbar'>
     <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
         <h1 className='logo-heading'>Proptelligence</h1>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            {servicesDropdown && <DropdownS />} {/* Display Services dropdown */}
          </li>

          {/* Technologies */}
          <li
            className='nav-item'
            onMouseEnter={handleTechHover}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
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

        <Link to="/signup">
        <button type="button" className="logout-desktop-btn">
          Login / Sign Up
        </button>
        </Link>

      </nav>



      
    </>
  );
}

export default Navbar;