import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import axios from 'axios'; // Import Axios for making HTTP requests

function Navbar() {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user's login status
  const [userName, setUserName] = useState('');

  // Function to handle user logout
  const handleLogout = () => {
    // Perform logout actions, such as clearing local storage, removing tokens, etc.
    localStorage.removeItem('jwtToken');
    setIsLoggedIn(false); // Update login status to false
    setUserName('');
  };

  useEffect(() => {
    // Check if the user is logged in by inspecting local storage or any other method
    const token = localStorage.getItem('jwtToken');
    if (token) {
      setIsLoggedIn(true);

      // Fetch user information after successful login
      axios.get('http://localhost:3005/user', {
        headers: {
          Authorization: `Bearer ${token}`, // Send the token for authentication
        },
      })
      .then((response) => {
        setUserName(response.data.name); // Set the user's name
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
    }
  }, []);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    // Other dropdown related states handling
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
          {isLoggedIn ? (
            <>
              <p className="user-name">{userName}</p>
              <button type="button" className="logout-desktop-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/signup">
              <button type="button" className="logout-desktop-btn">
                Login / Sign Up
              </button>
            </Link>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
