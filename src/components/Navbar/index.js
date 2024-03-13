import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import Dropdown from '../Dropdown';
import DropdownS from '../DropdownS';
import DropdownC from '../DropdownC'

import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import axios from 'axios'; // Import Axios for making HTTP requests

function Navbar() {
  const [userName, setUserName] = useState(''); 
  const [servicesDropdown, setServicesDropdown,] = useState(false);
  const [techDropdown, setTechDropdown] = useState(false); 
  const [companyDropdown, setcompanyDropdown] = useState(false); 
  // Determine user authentication status
  const [user, loading, error] = useAuthState(auth);
  const isLoggedIn = !!user; // This will be true if a user is logged in, otherwise false
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [click, setClick] = useState(false); // State for menu click

 
  const handleClick = () => setClick(!click); // Function to handle menu click
  const closeMobileMenu = () => setClick(false); // Function to close mobile menu


  // Function to handle user logout
 
  const handleServicesHover = () => {
    if (window.innerWidth >= 960) {
      setServicesDropdown(true);
      setTechDropdown(false);
      setcompanyDropdown(false)
    }
  };

  const handleCompanyHover = () => {
    if (window.innerWidth >= 960) {
      setServicesDropdown(false);
      setTechDropdown(false);
      setcompanyDropdown(true)
    }
  };

  const handleTechHover = () => {
    if (window.innerWidth >= 960) {
      setTechDropdown(true);
      setServicesDropdown(false);
      setcompanyDropdown(false)
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 960) {
      setServicesDropdown(false);
      setTechDropdown(false);
      setcompanyDropdown(false)
    }
  };
 

  return (
    <>
      <nav className='navbar'>
         <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
           <img src="https://res.cloudinary.com/ajaymedidhi7/image/upload/v1702143803/rsz_yaja_1_bn6fjb.jpg" alt="logo" className='website-logo'/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {/* Conditionally render login/logout button */}  
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
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

          <li
            className='nav-item'
            onMouseEnter={handleCompanyHover}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Company <i className='fas fa-caret-down' />
            </Link>
            {companyDropdown && <DropdownC />} {/* Display Services dropdown */}
          </li>

       
          <li className='nav-item'>
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
          {/* Add animation classes and styles */}
          <div className='phone-container'>
            <span className='phone-text'>8062181169</span>
            <span className='phone-icon'>&#128222;</span>
          </div>
        </Link>
          </li>
         
         
        </ul>
        {isLoggedIn ? (
            <>
              <p className="user-name">Welcome {name} 👋 </p>
              <button type="button" className="logout-desktop-btn" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/signup">
            <button className="btn-2"><span className="free-btn">Free</span> Property Post</button>
          </Link>
          )}
      </nav>
    </>
  );
}

export default Navbar;