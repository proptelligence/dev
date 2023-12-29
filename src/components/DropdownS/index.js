import React, { useState } from 'react';

import './index.css';
import { Link } from 'react-router-dom';

const MenuItems = [
    {
      title: 'Property Services',
      path: '/prop',
      cName: 'dropdown-link'
    },
    {
      title: 'Legal Services',
      path: '/legalservices',
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