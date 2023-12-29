import React, { useState } from 'react';

import './index.css';
import { Link } from 'react-router-dom';

const MenuItems = [
    {
      title: 'Industries',
      path: '/industries',
      cName: 'dropdown-link'
    },
    {
      title: 'Technologies',
      path: '/tech',
      cName: 'dropdown-link'
    },
  
  ];

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;