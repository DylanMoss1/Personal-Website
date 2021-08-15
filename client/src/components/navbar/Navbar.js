import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <b>Dylan Moss</b>
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
              <Link to='/gary' className='nav-links' onClick={closeMobileMenu}>
                Project Gary
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/rubiks' className='nav-links' onClick={closeMobileMenu}>
                Rubik's Cube
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/this' className='nav-links' onClick={closeMobileMenu}>
                Portfolio
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/gantt' className='nav-links' onClick={closeMobileMenu}>
                Gantt Chart
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/other' className='nav-links' onClick={closeMobileMenu}>
                Other Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;